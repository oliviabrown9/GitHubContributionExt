(function() {
  const saveButton = document.querySelector('button.save')
  const userNameInput = document.querySelector('input[name="username"]')
  const colorInput = document.querySelector('input[name="color"]')
  const message = document.querySelector('h5.message');
  restoreSettings()

  saveButton.addEventListener('click', event => {
    var userName
    if (userNameInput.value) {
      userName = userNameInput.value
    }
    else {
      userName = userNameInput.placeholder
    }
    var color
    if (colorInput.value) {
      color = colorInput.value
    }
    else {
      color = colorInput.placeholder
    }
    chrome.storage.sync.set({
      userName: userName,
      color: color
    })
    message.innerHTML = "Settings saved :)"
  });

  function restoreSettings() {
  chrome.storage.sync.get({
    userName: '',
    color: ''
  }, function(items) {
    userNameInput.placeholder = items.userName
    colorInput.placeholder = items.color
  });
}


})()
