const buttons = document.getElementsByClassName("btn");
const data = document.getElementById("data");



for (let i = 0; i <= buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        if (data.value == 0) {
            data.value = this.value;
        } else {

            data.value += this.value;
        }

    });

}


function sum() {
    const clear = document.getElementById("data")
    clear.value = 0;


}

function equal() {
    const equal = document.getElementById("equal");

    switch (equal.value) {
        case "=":
            data.value = eval(data.value);
            break;

        default:
            break;
    }
}

function del() {

    document.getElementById("data").value = data.value.substr(0, data.value.length - 1);

}