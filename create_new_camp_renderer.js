let addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", () => {
  let input_field = document.getElementById("inputfield").value;
  console.log(input_field);

  window.api.senddata(input_field);

  window.api.closechildwindow();
});
