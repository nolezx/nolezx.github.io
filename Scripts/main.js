var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "Images/xperia-back.jpg");
  } else {
    myImage.setAttribute("src", "Images/xperia-back.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Инструкция по перепрошивке на Sailfish X, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Инструкция по перепрошивке на Sailfish X, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};