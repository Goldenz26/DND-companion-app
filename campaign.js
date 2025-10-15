dicebtn = document.getElementById("dice");

dicebtn.addEventListener("click", () => {
  window.api.opendicewindow();
});

npcsheetsbtn = document.getElementById("npcsheets");

npcsheetsbtn.addEventListener("click", () => {
  window.api.opennpcwindow();
});
