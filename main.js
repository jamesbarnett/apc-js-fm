import "./style.css";

let shareButton = document.getElementById("share");
shareButton.addEventListener("click", (e) => {
  shareButton.style.display = "none";

  let sharePopup = document.getElementById("share-popup");
  sharePopup.style.display = "flex";

  let avatar = document.querySelector(".author img:first-child");
  avatar.style.display = "none";

  let authorInfo = document.querySelector(".author > div");
  authorInfo.style.display = "none";
});
