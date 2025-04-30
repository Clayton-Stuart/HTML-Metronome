function setupVisualBeats(beatDisplay, rows) {
    let container = document.getElementById('visual-beat-container');
    container.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('visual-row');
        container.appendChild(newDiv);
    }

    for (let i = 0; i < container.children.length; i++) {
        for (let j = 0; j < beatDisplay[i].length; j++) {
            let currentElement = container.children[i];
            let newCell = document.createElement('div');
            newCell.classList.add('visual-cell');
            newCell.setAttribute('accent', beatDisplay[i][j]);
            newCell.setAttribute('sound', beatSounds[beatDisplay[i][j]]);
            newCell.setAttribute('color', colors[beatDisplay[i][j]]);
            newCell.style.backgroundColor = colors[beatDisplay[i][j]];
            currentElement.appendChild(newCell);
            newCell.setAttribute('onclick', 'changeCellColor(this)');
        }
    }

}

function changeCellColor(element) {
    let currentValue = parseInt(element.getAttribute('accent'));
    if (currentValue == 3) {
        currentValue = 0;
        let beatsElement = document.getElementById('visual-beat-container');
        let allBeatsLocal =  [];
        for (let i = 0; i < beatsElement.children.length; i++) {
            for (let j = 0; j < beatsElement.children[i].children.length; j++) {
                allBeatsLocal.push(beatsElement.children[i].children[j]);
            }
        }
        mutedBeats.push(allBeatsLocal.indexOf(element));
    
    }


    else {
        currentValue++;
        let beatsElement = document.getElementById('visual-beat-container');
        let allBeatsLocal =  [];
        for (let i = 0; i < beatsElement.children.length; i++) {
            for (let j = 0; j < beatsElement.children[i].children.length; j++) {
                allBeatsLocal.push(beatsElement.children[i].children[j]);
            }
        }

        let index = allBeatsLocal.indexOf(element);
        if (mutedBeats.includes(index)){
        mutedBeats.splice(mutedBeats.indexOf(index), 1);
        }
        
    }

    element.setAttribute('accent', currentValue);
    element.style.backgroundColor = colors[currentValue];
    element.setAttribute('sound', beatSounds[currentValue]);
}