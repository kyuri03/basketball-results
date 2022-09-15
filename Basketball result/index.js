let resultEl = document.getElementById("result-el")
let resultEl2 = document.getElementById("result-el2")
let result = 0
let result2 = 0

function plus1() {
    result += 1
    resultEl.textContent = result
}

function plus2() {
    result += 2
    resultEl.textContent = result
}

function plus3() {
    result += 3
    resultEl.textContent = result
}

function plus11() {
    result2 += 1
    resultEl2.textContent = result2
}

function plus22() {
    result2 += 2
    resultEl2.textContent = result2
}

function plus33() {
    result2 += 3
    resultEl2.textContent = result2
}

function newgame() {
    resultEl.textContent = 0
    resultEl2.textContent = 0
}