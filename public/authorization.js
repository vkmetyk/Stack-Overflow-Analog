function test() {
  var tokens = null;

  function profile() {
    console.log("TEST");
  }
  function output(data) {
    console.log(data);
  }
  function httpGetAsync(theUrl, callback)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  }
  function getProfileData() {
    let siteName = 'stackoverflow';
    let client_secret = "zkXZ2f5C0gofIwlL4grthQ((";
    let appKey = 'xzf5GeIyy1QHmRTuxM3ZjA((';
    let accessToken = tokens.accessToken;
    let question = "info";
    let api = `https://api.stackexchange.com/2.2/${question}?site=${siteName}&key=${appKey}&access_token=${accessToken}`;

    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.querySelector('#checker').textContent = "authorized";
      })
      .catch(function (err) {
        console.log("Something went wrong!", err);
      });
  }

  function auth() {
    SE.authenticate({
      scope: ['private_info'],
      success: function(data) {tokens = data; console.log(tokens); getProfileData();}, // Приложение авторизовало пользователя
      error: function(data) {alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
    });
  }

  function initAPI() {
    SE.init({
      clientId: 18651, // Здесь мы ставим выданный нам clientId
      key: 'xzf5GeIyy1QHmRTuxM3ZjA((', // А здесь соответственно key
      channelUrl: 'https://7df163aee85e.ngrok.io/', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
      complete: auth // Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
    });
  }

  initAPI();
}

// window.onload = function () {
//   var button = document.querySelector('#start-test');
//
//   button.onclick = function (e) {
//     test();
//   };
//   console.log("I SEE SCRIPT")
// }

