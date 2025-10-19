dicebtn = document.getElementById("dice");

dicebtn.addEventListener("click", () => {
  window.api.opendicewindow();
});

npcsheetsbtn = document.getElementById("npcsheets");

npcsheetsbtn.addEventListener("click", () => {
  window.api.opennpcwindow();
});
//checking current campaign
let current;

async function checkcurrent() {
  current = await window.api.get_current_camp();
  console.log("Current Campaign is: ", current);
}

checkcurrent();
