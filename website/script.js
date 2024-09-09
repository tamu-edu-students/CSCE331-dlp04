function toggleTheme() {
  console.log(getCookie("current-mode"));
  if (getCookie("current-mode") === "2") {
    setTheme1();
  } else {
    setTheme2();
  }
}

function setTheme1(){
  document.getElementById("logo").src = 'img/my-logo.png';
  document.getElementById("style").href = "first-style.css";
  if(document.getElementById("index-background")){
    document.getElementById("index-background").src = "img/black-background.jpg";
  } else {
    document.getElementById("normal-background").src = "img/black-background-2.jpg";
  }
  if(document.getElementById("github-logo")){
    document.getElementById("github-logo").src = "img/github-logo.png";
  }
  if(document.getElementById("ctfb-logo")){
    document.getElementById("ctfb-logo").src = "img/ctfb-logo.png";
  }
  if(document.getElementById("qualifications-logo")){
    document.getElementById("qualifications-logo").src = "img/quals.png";
  }
  setCookie("current-mode", 1);
}

function setTheme2(){
  document.getElementById("logo").src = 'img/my-logo-2.png';
  document.getElementById("style").href = "second-style.css";
  if(document.getElementById("index-background")){
    document.getElementById("index-background").src = "img/white-background.jpg";
  } else {
    document.getElementById("normal-background").src = "img/white-background-2.jpg";
  }
  if(document.getElementById("github-logo")){
    document.getElementById("github-logo").src = "img/github-logo-black.png";
  }
  if(document.getElementById("ctfb-logo")){
    document.getElementById("ctfb-logo").src = "img/ctfb-logo-black.png";
  }
  if(document.getElementById("qualifications-logo")){
    document.getElementById("qualifications-logo").src = "img/quals-orange.png";
  }
  setCookie("current-mode", 2);
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


function setDefaultCookie() {
  if (!getCookie("current-mode")) {
    setCookie("current-mode", 1);
  }
}

window.onload=function(){
  setDefaultCookie();

  if(getCookie("current-mode") === "1"){
    setTheme1();
  } else {
    setTheme2();
  }
}
