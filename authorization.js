function saveUserInfo(token) {
  if (token && token.accessToken) {
    console.log(token);
    localStorage.setItem("userToken", token.accessToken);
    window.location.reload();
  } else
    alert('User authorization: Token error');
}

function auth() {
  SE.authenticate({
    scope: ['write_access', 'private_info'],
    success: function(data) { saveUserInfo(data) }, // Приложение авторизовало пользователя
    error: function(data) { alert("User authorization: Access denied") } // Приложение не авторизовало пользователя
  });
}

function initAPI() {
  SE.init({
    clientId: 18651, // Здесь мы ставим выданный нам clientId
    key: 'xzf5GeIyy1QHmRTuxM3ZjA((', // А здесь соответственно key
    channelUrl: `https://${window.location.hostname}/`, // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
    complete: auth // Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
  });
}

window.onload = function () {
  let checker = document.querySelector('#user-login');

  if (checker) {
    checker.onclick = function (e) {
      console.log(window.location.hostname);
      initAPI();
    };
  }
}
