(function() {
  restoreUserName()
  const chart = document.querySelector('img.chart');
  const title = document.querySelector('h1.title');
  const countLabel = document.querySelector('h3.count');

  function restoreUserName() {
    chrome.storage.sync.get({
      userName: '',
      color: ''
    }, function(items) {
      if (items.userName == "") {
        title.innerHTML = "You need to set a username."
        chrome.runtime.openOptionsPage()
        return;
      }
      const userLink = 'https:github.com/' + items.userName
      title.innerHTML = "<a href=" + userLink + ">" + items.userName +"'s GitHub Contributions</a>"
      if (items.color) {
        chart.src = "http://ghchart.rshah.org/" + items.color + "/" + items.userName
        countLabel.style.color = "#" + items.color;
      }
      else {
        chart.src = "http://ghchart.rshah.org/" + items.userName
      }
      fetch('https://urlreq.appspot.com/req?method=GET&url=https://github.com/users/' + items.userName + '/contributions')
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        xmlDoc = new DOMParser().parseFromString(text, 'text/xml');
        var nodes = xmlDoc.getElementsByTagName('rect');
        var count = 0;
        var dataArray = [];
        for (var i = 0; i < nodes.length; i++) {
          count += parseInt(nodes[i].getAttribute('data-count'));
        }
        countLabel.innerHTML = count + " contributions in the last year"
      })
      .catch(function(error) {
        console.log('Request failed', error)
      });
    });
  }


})()
