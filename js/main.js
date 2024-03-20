function tocaSom(id) {
  document.querySelector(id).play();
}
// document.querySelectorAll(".tecla").onclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll(".tecla");
for (let index = 0; index < listaDeTeclas.length; index++) {
  listaDeTeclas[index].onclick = function () {
    tocaSom("#som_" + listaDeTeclas[index].classList[1]);
  };
  listaDeTeclas[index].onkeydow = function () {
    listaDeTeclas[index].classList.add("ativa");
  };
  listaDeTeclas[index].onkeyup = function () {
    listaDeTeclas[index].classList.remove("ativa");
  };
}
