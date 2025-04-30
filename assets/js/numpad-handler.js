function storeTempoValue() {
    console.log(this)
}

// function storeTempoValue() {
//     console.log(this.parentElement.parentElement.children[0].innerText);
// }

createNumpad(document.getElementById("tempo-numpad"), 3, 'tempo = parseInt(this.parentElement.parentElement.children[0].innerText); pause(); play();', 120);
