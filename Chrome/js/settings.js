(function() {
  const saveButton = document.querySelector('button.save')
  const userNameInput = document.querySelector('input[name="username"]')
  const message = document.querySelector('h5.message');
  restoreSettings()

  saveButton.addEventListener('click', event => {
    const userName = userNameInput.value
    chrome.storage.sync.set({
      userName: userName,
    })
    message.innerHTML = "Settings saved :)"
  });

  function restoreSettings() {
  chrome.storage.sync.get({
    userName: 'oliviabrown9',
  }, function(items) {
    userNameInput.placeholder = items.userName
  });
}


})()
