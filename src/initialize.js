let buttonO;
let buttonX;
function intitalize() {
  buttonX = document.querySelector("#button-container > #x-active");
  buttonO = document.querySelector("#button-container > #o");
  console.log(buttonX, buttonO);
}

export { buttonO, buttonX, intitalize };
