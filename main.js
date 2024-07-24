import "./style.css";

function showShare() {
  const shareButton = document.getElementById("share");
  shareButton.onclick = hideShare;
  shareButton.setAttribute("data-style", "inverted");

  const popupShareButton = document.getElementById("popup-share-btn");
  popupShareButton.setAttribute("data-style", "inverted");

  let sharePopup = document.getElementById("share-popup");
  sharePopup.classList.toggle("closed");
}

function hideShare() {
  console.log("hideShare called");
  let sharePopup = document.getElementById("share-popup");
  sharePopup.classList.toggle("closed");

  const shareButton = document.getElementById("share");
  shareButton.onclick = showShare;
  shareButton.setAttribute("data-style", "normal");
}

let shareButton = document.getElementById("share");
shareButton.onclick = showShare;

let popUpShareButton = document.getElementById("popup-share-btn");
popUpShareButton.onclick = hideShare;
