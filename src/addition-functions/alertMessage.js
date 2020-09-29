function alertMessage(message) {
  document.querySelectorAll('.alert-container')
    .forEach(elem => elem.remove());

  let alertContainer = document.createElement('div');
  let alertMessage = document.createElement('p');

  alertContainer.className = "alert-container";
  alertMessage.className = "alert-message";
  alertMessage.innerText = message;
  alertContainer.append(alertMessage);
  document.body.prepend(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000)
}

export default alertMessage;