let current;

dicebtn = document.getElementById("dice");
let title = document.getElementById("title");

dicebtn.addEventListener("click", () => {
  window.api.opendicewindow();
});

npcsheetsbtn = document.getElementById("npcsheets");

npcsheetsbtn.addEventListener("click", () => {
  window.api.opennpcwindow();
});

async function checkcurrent() {
  current = await window.api.get_current_camp();
  console.log("Current Campaign is: ", current);
  title.innerText = current;
}

checkcurrent();
