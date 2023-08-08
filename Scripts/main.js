var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "Images/xperia-back.jpg");
  } else {
    myImage.setAttribute("src", "Images/xperia-back.jpg");
  }