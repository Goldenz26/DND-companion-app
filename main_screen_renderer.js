let createhplk = document.getElementById("createhplk");
let nocampdiv = document.getElementById("nocampdiv");
let addnewcampplus = document.getElementById("addnewcomp");

let campaign;

createhplk.addEventListener("click", () => {
  window.api.openchildwindow();
});
addnewcampplus.addEventListener("click", () => {
  window.api.openchildwindow();
});

//note when interacting with preload keep the elements at the top

window.api.recievedata((data) => {
  nocampdiv.style.display = "none";
  addnewcampplus.style.display = "block";

  let campinst = document.createElement("div");

  campinst.className = "campaigninstance";

  //add the campaign hyperlink
  let camplink = document.createElement("a");

  camplink.innerHTML = data;
  camplink.href = "./src/html/campaign.html";
  camplink.addEventListener("click", () => {
    window.api.set_current_camp(data);
  });

  campinst.appendChild(camplink);
  document.body.appendChild(campinst);
});

//on load
window.onload = async () => {
  campaign = await window.api.get_storage_Cname();

  if (campaign) {
    campaign.forEach((element) => {
      nocampdiv.style.display = "none";
      addnewcampplus.style.display = "block";

      let campinst = document.createElement("div");

      campinst.className = "campaigninstance";

      //add the campaign hyperlink
      let camplink = document.createElement("a");

      camplink.innerHTML = element.Cname;
      let data = element.Cname;
      camplink.href = "./campaign.html";

      camplink.addEventListener("click", () => {
        window.api.set_current_camp(element.Cname);
      });

      campinst.appendChild(camplink);
      document.body.appendChild(campinst);
    });
  }
};
