let createhplk = document.getElementById("createhplk");
let nocampdiv = document.getElementById("nocampdiv");

createhplk.addEventListener("click", () => {
  window.api.openchildwindow();
});

//note when interacting with preload keep the elements at the top

window.api.recievedata((data) => {
  nocampdiv.style.display = "none";

  let campinst = document.createElement("div");

  campinst.id = "campaigninstance";

  //add the campaign hyperlink
  let camplink = document.createElement("a");

  camplink.innerHTML = data;
  camplink.href = "#";

  campinst.appendChild(camplink);
  document.body.appendChild(campinst);
});
