var intervals = [];

function stopSounds() {
    for (var i = 0; i < intervals.length; i++) {
        clearInterval(intervals[i]);
    }
}

function flashGreen(element) {
    element.style.backgroundColor = "lime";
    delay(60/tempo*1000/2).then(() => element.style.backgroundColor = "red");
}

function flashYellow(element) {
    element.style.backgroundColor = "lime";
    delay(60/tempo*1000/2).then(() => element.style.backgroundColor = "yellow");
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function playOscillator(startTime, endTime, frequency) {
    oscillator = context.createOscillator();
    oscillator.connect(gainNode).connect(context.destination);
    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    oscillator.start(startTime);
    oscillator.stop(endTime);
}