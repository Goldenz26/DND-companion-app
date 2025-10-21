let createnpclk = document.getElementById("createnpclk");
let addnewnpc = document.getElementById("addnewnpc");
let nonpcdiv = document.getElementById("nonpcdiv");

createnpclk.addEventListener("click", () => {
  console.log("link is being clicked");
  window.api.opennpcinputwindow();
});

window.api.get_NPC((FirstN, LastN) => {
  nonpcdiv.style.display = "none";
  let NPCinst = document.createElement("div");
  let NPClink = document.createElement("a");
  NPCinst.style.display = "block";

  let Firstname = `${FirstN}`;
  let Lastname = `${LastN}`;

  NPClink.innerHTML = Firstname + "" + Lastname;
  NPClink.href = "#";
  NPCinst.appendChild(NPClink);

  document.body.append(NPCinst);
});

//on load

window.onload = async () => {
  NPC = await window.api.get_NPC_Array();

  if (NPC) {
    nonpcdiv.style.display = "none";
    NPC.forEach((element) => {
      let NPCinst = document.createElement("div");
      let NPClink = document.createElement("a");

      let Firstname = `${element.FirstN}`;
      let Lastname = `${element.LastN}`;

      NPClink.innerHTML = Firstname + "" + Lastname;
      NPClink.href = "#";
      NPCinst.appendChild(NPClink);
      NPCinst.style.display = "block";

      document.body.append(NPCinst);
    });
  }
};
