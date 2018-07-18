
// Send a request
var request = new XMLHttpRequest();
request.onreadystatechange = function () { // callback function
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
request.open('GET', 'footer.html');
request.send();

