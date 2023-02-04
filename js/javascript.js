


var progressBar = document.getElementById("v3")

var texta = document.getElementById("v2")

changeProgress(0)

var time = 0

var value = 0

var textV = texta.innerText

time = setInterval(()=>{

    value = value + speed(1)
    textV = textModify(textV)

    if (value > 98) {
        clearInterval(time)
    } else {

        changeProgress(value)

        changeText(textV)
    }

},
100)

setTimeout(()=>{

    clearInterval(time)

    changeProgress(100)
window.location.href="http://cupfox.app"
},
4000);

function speed(t) {

    return Math.random() * t * 10

}

function changeProgress(p) {

    progressBar.value = p

}

function changeText(text) {
    texta.innerText = text
}

function textModify(text) {
    var length = text.length
    if (length == 10) return text.substring(0, 9);
    else if (length == 9) return text + "."
}
