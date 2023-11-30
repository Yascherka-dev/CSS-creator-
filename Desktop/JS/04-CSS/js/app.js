// crée nos constantes : 
const Yasmina = document.querySelector(".Yasmina");
const btnColors = document.querySelectorAll(".color");
const btnFond = document.querySelectorAll(".fond")

const selectFont = document.getElementById("selectFont")

console.log(Yasmina);
console.log(btnColors)

// Ecouteur "multiple"

btnColors.forEach((button) => {
    console.log(button);
    console.log(button.dataset.color);
    button.onclick = function () {
        console.log(button.dataset.color);
        Yasmina.style.color = button.dataset.color;
    };
});

btnFond.forEach((button) => {
    console.log(button);
    // console.log(button.dataset.Fond);
    button.onclick = function () {
        // console.log(button.dataset.color);
        Yasmina.style.backgroundColor = button.dataset.color;
    };
});


selectFont.onchange = function () {
    console.log(selectFont.value)
    Yasmina.style.fontFamily = selectFont.value;
};






