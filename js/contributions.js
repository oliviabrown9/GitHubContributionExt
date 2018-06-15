(function() {
  restoreUserName()
  const chart = document.querySelector('img.chart');
  const title = document.querySelector('h1.title');
    const userLink = document.querySelector('a.userLink');

  function restoreUserName() {
    chrome.storage.sync.get({
      userName: 'oliviabrown9',
    }, function(items) {
      title.innerHTML = items.userName + "'s GitHub Contributions"
      userLink.href = "https:github.com/" + items.userName
      console.log(userLink.href)
      chart.src = "http://ghchart.rshah.org/" + items.userName
      return items.userName
    });
  }
})()
