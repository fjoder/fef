// ******************************
//  Front End Foundations - Lesson 7
// ******************************

// Hands-On 1
function loadText(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function changeText(xhttp) {
  document.getElementById("change").innerHTML = xhttp.responseText;
}

// Hands-On 2
function loadContent(url, callback) {
  const xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      let content = JSON.parse(this.responseText);
      callback(content);
    }
  };
  xhttp2.open("GET", url, true);
  xhttp2.send();
}

function changeContent(content) {
  $("header").html(content.header);
  $("img").attr("src", content.img);
  $("footer").html(content.footer);
}

// Hands-On 3
function loadInfo() {
  const xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      $("#info").html(this.responseText);
    }
  };
  xhttp3.open("GET", "./data/info.txt", true);
  xhttp3.send();
}
