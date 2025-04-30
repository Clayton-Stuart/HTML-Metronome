for (let i = 0; i < 3000; i++) {
    let newAnchor = document.createElement("a");
    newAnchor.setAttribute('onclick', 'changeNumerator(this.innerText)');
    newAnchor.innerText = i+1;
    document.getElementById("dropdown-content-1").appendChild(newAnchor);
}

function changeNumerator(number) {
    mutedBeats = [];
    pause();
    document.getElementById('numerator').innerText = number;
    numerator = parseInt(number);
    beats = [];
    beats.push([numerator, denominator]);
    beats.push([]);
    for (let i = 0; i < numerator; i++) {
        beats[1].push(1);
    }
    beats[1][0] = 3;
    setupBeats();
    resetBeatUnit();
}

function changeDenominator(number) {
    mutedBeats = [];
    pause();
    document.getElementById('denominator').innerText = number;
    denominator = parseInt(number);
    beats = [];
    beats.push([numerator, denominator]);
    beats.push([]);
    for (let i = 0; i < numerator; i++) {
        beats[1].push(1);
    }
    beats[1][0] = 3; 
    setupBeats();

    if (number == 2) {
        document.getElementById('beat-unit-2').style.display = 'block';
        document.getElementById('beat-unit-4').style.display = 'none';
        document.getElementById('beat-unit-8').style.display = 'none';
        document.getElementById('beat-unit-16').style.display = 'none';
        document.getElementById('beat-unit-32').style.display = 'none';
    }

    if (number == 4) {
        document.getElementById('beat-unit-2').style.display = 'none';
        document.getElementById('beat-unit-4').style.display = 'block';
        document.getElementById('beat-unit-8').style.display = 'none';
        document.getElementById('beat-unit-16').style.display = 'none';
        document.getElementById('beat-unit-32').style.display = 'none';
    }

    if (number == 8) {
        document.getElementById('beat-unit-2').style.display = 'none';
        document.getElementById('beat-unit-4').style.display = 'none';
        document.getElementById('beat-unit-8').style.display = 'block';
        document.getElementById('beat-unit-16').style.display = 'none';
        document.getElementById('beat-unit-32').style.display = 'none';
    }

    if (number == 16) {
        document.getElementById('beat-unit-2').style.display = 'none';
        document.getElementById('beat-unit-4').style.display = 'none';
        document.getElementById('beat-unit-8').style.display = 'none';
        document.getElementById('beat-unit-16').style.display = 'block';
        document.getElementById('beat-unit-32').style.display = 'none';
    }
    
    if (number == 32) {
        document.getElementById('beat-unit-2').style.display = 'none';
        document.getElementById('beat-unit-4').style.display = 'none';
        document.getElementById('beat-unit-8').style.display = 'none';
        document.getElementById('beat-unit-16').style.display = 'none';
        document.getElementById('beat-unit-32').style.display = 'block';
    }
    resetBeatUnit();
}

function changeSubdivision(number) {
    pause();
    document.getElementById('subdivision').innerHTML = number;
    subdivision = document.getElementById('subdivision').children[0].getAttribute('value');
}

function changeBeatUnit(element) {
    pause();
    let image = element.innerHTML;
    element.parentElement.parentElement.children[0].innerHTML = image;
    beatUnit = parseFloat(element.children[0].getAttribute('value'));
}

function resetBeatUnit() {
    beatUnit = parseFloat(document.getElementById('beat-unit-' + denominator).children[1].children[0].children[0].children[0].getAttribute('value'));
}