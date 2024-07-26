import "./style.css";

function showShare() {
  const shareButton = document.getElementById("share");
  shareButton.onclick = hideShare;
  shareButton.setAttribute("data-style", "inverted");

  const popupShareButton = document.getElementById("popup-share-btn");
  popupShareButton.setAttribute("data-style", "inverted");

  const sharePopup = document.getElementById("share-popup");
  sharePopup.classList.toggle("closed");
}

function hideShare() {
  const sharePopup = document.getElementById("share-popup");
  sharePopup.classList.toggle("closed");

  const shareButton = document.getElementById("share");
  shareButton.onclick = showShare;
  shareButton.setAttribute("data-style", "normal");
}

const shareButton = document.getElementById("share");
shareButton.onclick = showShare;

const popUpShareButton = document.getElementById("popup-share-btn");
popUpShareButton.onclick = hideShare;
