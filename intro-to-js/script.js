window.onload = function () {
    // start

    let starterDiv = document.getElementById('starter-div')
    let firstHeading = document.createElement('h2')
    firstHeading.innerText = 'This is an H2 created with javascript!'
    firstHeading.classList.add('js-header')


    starterDiv.appendChild(firstHeading)

    let secondHeading = document.createElement('h2')
    secondHeading.innerText = "This is another H2 heading with JS!"
    secondHeading.classList.add('js-header')
    secondHeading.id = 'second-h2'

    starterDiv.appendChild(secondHeading)

    // end
}


function showName() {
    console.log('showName');
    // start
    let name = document.getElementById('name').value
    document.getElementById('greeting-text').innerText = 'Hey! ' + name + 'you are cool'
    console.log("this is your name variable: ", name)
    // end
}

function changeColour(colour) {
    // start
    document.body.style.backgroundColor = colour
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
    let lightbulb = document.getElementById('light')
    lightbulb.classList.toggle('on')
    // end
}
