

let showModel = () => {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    modal.classList.add("show");
}
function closeModel() {
    let modal = document.getElementById("myModal");
    modal.classList.remove("show");
}

window.onclick = function (event) {
    let modal = document.getElementById("myModal");

    if (event.target == modal) {
        modal.classList.remove("show");
    }
}

const showPassword = () => {
    let x = document.getElementById("password");
    console.log(x);
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("id_showPassword").innerHTML = '&#x1f633;';

    } else {
        x.type = "password";
        document.getElementById("id_showPassword").innerHTML = '&#x1f614;'
    }
}





