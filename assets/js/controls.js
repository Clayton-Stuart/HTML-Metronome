function play() {
    context = new AudioContext(), oscillator;
    gainNode = new GainNode(context, {gain: 0.6});
    if (isNaN(tempo)) {
        return 0;
    }
    
    let newAudios = subdivision.split(',');
    allBeats = [];
    let beatsElement = document.getElementById('visual-beat-container');
    let beatTracker = -1;
    for (let i = 0; i < beatsElement.children.length; i++) {
        for (let j = 0; j < beatsElement.children[i].children.length; j++) {
            beatTracker++;
            allBeats.push(beatsElement.children[i].children[j]);

            if (subdivision != '') {
            for (let k = 0; k < newAudios.length; k++) {
                let audioElement = document.createElement('div');
                audioElement.setAttribute('accent', 1);
                audioElement.setAttribute('sound', newAudios[k]);
                audioElement.setAttribute('beat', beatTracker);
                allBeats.push(audioElement);
            }
            }
        }
    }


    currentBeat = allBeats.length - 1;
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("pausebutton").style.display = "block";
    
    if (subdivision != '') {
    intervals.push(setInterval(nextCell, 60/(tempo*beatUnit)*1000/(newAudios.length+1)));
    }
    else {
        intervals.push(setInterval(nextCell, 60/(tempo*beatUnit)*1000/(1)));
    }
    paused = false;
    
}

function pause() {
    let elements = document.getElementsByClassName('visual-cell');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colors[parseInt(elements[i].getAttribute('accent'))];
    }
    currentBeat = 0;
    document.getElementById("playbutton").style.display = "block";
    document.getElementById("pausebutton").style.display = "none";
    stopSounds();
    paused = true;
}


function nextCell() {

    allBeats[currentBeat].style.backgroundColor = colors[parseInt(allBeats[currentBeat].getAttribute('accent'))];
    
    if (currentBeat < allBeats.length - 1) {
        currentBeat++;
    }
    else {
        currentBeat = 0;
    }
    if (!(mutedBeats.includes(parseInt(allBeats[currentBeat].getAttribute('beat'))))){
        playOscillator(context.currentTime, context.currentTime + beatDuration, parseInt(allBeats[currentBeat].getAttribute('sound')) * octave);
    }
    allBeats[currentBeat].style.backgroundColor = '#40ff40';

}

function playSoundNormal() {
    // flashGreen(document.getElementById('visual-container'))
    let beepNormal = new Audio('assets/sounds/beep1.mp3');
    beepNormal.play()
}

// ♩ ♫ ♬

// when space is pressed run play()

document.addEventListener("keydown", function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 86) {
        if (paused) {
            play();
        } 
        else {
            pause();
        }
    }
});

function setupBeats() {
    let numBeats = beats[0][0];
    let beatDisplay = [];
    let rows;


    // specific cases
    if ([12, 9, 6, 3].includes(numBeats)) {
        rows = numBeats/3;
    }

    else if ([4, 8, 16].includes(numBeats)) {
        rows = numBeats/4;
    }

    else if ([1, 2, 5].includes(numBeats)) {
        rows = 1;
    }

    else if (numBeats == 7) {
        rows = 2
    }


    // cases between 9 and 24
    else if (numBeats > 9 && numBeats < 24) {
        if (numBeats % 4 == 0) {
            rows = numBeats/4;
        }
        else {
            rows = Math.trunc(numBeats/4) + 1;
        }
    }


    // all other cases
    else {
        if (numBeats % 8 == 0) {
            rows = numBeats/8;
        }
        else {
            rows = Math.trunc(numBeats/8) + 1;
        }
    }


    // fill rows into beatDisplay array
    for (let i = 0; i < rows; i++) {
        beatDisplay.push([]);
    }


    // fill rows with beats
    for (let i = 0; i < numBeats; i++) {
        beatDisplay[i%rows].push(1);
    }
    beatDisplay[0][0] = 3;

    setupVisualBeats(beatDisplay, rows);
}

function changeBeepLength(value) {
    beatDuration = parseFloat(value);
    if (isNaN(beatDuration)) {
        beatDuration = 0.05;
    }
    if (beatDuration > 0.5) {
        beatDuration = 0.05;
    }
}