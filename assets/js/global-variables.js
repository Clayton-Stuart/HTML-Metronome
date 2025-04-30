var numerator = 4;
var denominator = 4;
var tempo = 120;
var paused = true;
var nan = NaN;
var beats = [[4, 4], [3, 1, 1, 1]]
var colors = ['#666666', '#364196', '#792a82', '#016b2b']
// var beatSounds = [new Audio('./assets/sounds/blank.mp3'), new Audio('./assets/sounds/beep1.mp3'), new Audio('./assets/sounds/beep2.mp3'), new Audio('./assets/sounds/beep3.mp3')];
var beatSounds = [0, 440, 587.33, 783.99];
var currentBeat = 0;
var allBeats = [];
var context, oscillator, gainNode;
var beatDuration = 0.05;
var subdivision = '';
var beatUnit = 1;
var mutedBeats = []
var dark = false;
var octave = 1;