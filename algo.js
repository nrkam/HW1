
// let A = 7
// let B = 12
// let C = 2

// let M = 7
// let K = 2

function solution (A, B, C, M, K) {

    const box = [A, B, C]
    const door = [M, K]

    const sortedBox = box.sort((x, y) => x - y)
    const sortedDoor = door.sort((x, y) => x - y)

    return sortedBox[0] < sortedDoor[0] && sortedBox[1] < sortedDoor[1]
}

function showResult() {
    const A = parseFloat(document.getElementById("A").innerHTML)
    const B = parseFloat(document.getElementById("B").innerHTML)
    const C = parseFloat(document.getElementById("C").innerHTML)

    const M = parseFloat(document.getElementById("M").innerHTML)
    const K = parseFloat(document.getElementById("K").innerHTML)

    const generatedResult = solution(A, B, C, M, K)

    let result = document.getElementById("result")

    if (generatedResult === true) {
        result.innerHTML = "пройдет"
    } else {
        result.innerHTML = "не пройдет"
    }
}

const button = document.getElementById("button")
button.addEventListener("click", showResult)
