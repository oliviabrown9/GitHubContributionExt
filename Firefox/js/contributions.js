(function() {
  restoreUserName()
  const chart = document.querySelector('img.chart');
  const title = document.querySelector('h1.title');
  const countLabel = document.querySelector('h3.count');

  function restoreUserName() {
    browser.storage.sync.get({
      userName: 'oliviabrown9',
    }, function(items) {
      const userLink = 'https:github.com/' + items.userName
      console.log(userLink)
      title.innerHTML = "<a href=" + userLink + ">" + items.userName +"'s GitHub Contributions</a>"
      chart.src = "http://ghchart.rshah.org/" + items.userName
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
