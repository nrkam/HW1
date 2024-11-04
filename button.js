function find_edit() {
    const surname = document.getElementById("surnameText")
    console.log(surname.innerText)
    surname.innerHTML = "ALEKSADROVA"

    const name = document.getElementById("nameText")
    console.log(name.innerText)
    name.innerHTML = "ALEKSANDRA"

    const fathername = document.getElementById("fatherNameText")
    console.log(fathername.innerText)
    fathername.innerHTML = "ALEKSANDROVNA"
}

const button = document.getElementById("button")
button.addEventListener("click", find_edit)
