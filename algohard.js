function solution (A, B, C, M, K) {

    const box = [A, B, C]
    const door = [M, K]

    const sortedBox = box.sort((x, y) => x - y)
    const sortedDoor = door.sort((x, y) => x - y)

    return sortedBox[0] < sortedDoor[0] && sortedBox[1] < sortedDoor[1]
}

function showResult() {

    const A = parseFloat(document.getElementById("A").value)
    const B = parseFloat(document.getElementById("B").value)
    const C = parseFloat(document.getElementById("C").value)
    const M = parseFloat(document.getElementById("M").value)
    const K = parseFloat(document.getElementById("K").value)

    if (A <= 0 || B <= 0 || C <= 0 || M <= 0 || K <= 0 || 
        Number.isNaN(A) || Number.isNaN(B) || Number.isNaN(C) || Number.isNaN(M) || Number.isNaN(K)) {
        alert("Заполните все поля ввода неотрицательными числами")
    }

    const generatedResult = solution(A, B, C, M, K)

    let result = document.getElementById("result")

    if (generatedResult === true) {
        result.value = "пройдет"
    } else {
        result.value = "не пройдет"
    }
}

const button = document.getElementById("button")
button.addEventListener("click", showResult)

function sendToServer() {
    document.getElementById("form").submit()
}

const send = document.getElementById("send")
send.addEventListener("click", sendToServer)
