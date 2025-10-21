let firstnameinput = document.getElementById("firstnameinput");
let lastnameinput = document.getElementById("lastnameinput");
let addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", () => {
  if (firstnameinput.value == "") {
    alert("Please enter a First name");
  } else {
    window.api.add_NPC(firstnameinput.value, lastnameinput.value);
    console.log(firstnameinput.value, lastnameinput.value, "Sent to backend!");
    window.api.closenpcinputwindow();
  }
});
