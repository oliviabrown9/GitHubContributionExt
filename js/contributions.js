(function() {
  restoreUserName()
  const chart = document.querySelector('img.chart');
  const title = document.querySelector('h1.title');

  function restoreUserName() {
    chrome.storage.sync.get({
      userName: 'oliviabrown9',
    }, function(items) {
      const userLink = 'https:github.com/' + items.userName
      title.innerHTML = "<a href=" + userLink + ">" + items.userName +"'s' GitHub Contributions</a>"
      chart.src = "http://ghchart.rshah.org/" + items.userName
      return items.userName
    });
  }
})()
