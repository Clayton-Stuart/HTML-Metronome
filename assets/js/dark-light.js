function toggleDarkMode() {
    if (dark) {
        document.body.style.backgroundColor = "#ffffff";
        dark = false;
        document.getElementById('light-dark').style.filter = "invert(0%)";
        document.body.style.color = "#000000";
        let elements = document.getElementsByClassName('dropdown');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "invert(0%)";
            elements[i].style.zIndex = '10';
        }
        document.getElementById('tempo-numpad').style.filter = "invert(0%)";
        document.getElementById('numpad-title').style.color = "#000000"; 
        document.getElementById('beep-length').style.filter = "invert(0%)";
        localStorage.setItem('dark', dark);

    }

    else {
        document.body.style.backgroundColor = "#000000";
        document.getElementById('light-dark').style.filter = "invert(100%)";
        document.body.style.color = "#ffffff";
        
        let elements = document.getElementsByClassName('dropdown');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "invert(100%)";
            elements[i].style.zIndex = '10';
        }
        document.getElementById('tempo-numpad').style.filter = "invert(100%)";
        document.getElementById('numpad-title').style.color = "#ffffff";
        document.getElementById('beep-length').style.filter = "invert(100%)";
        dark = true;
    localStorage.setItem('dark', dark);

    }
}


if (localStorage.getItem('dark') == 'true') {
    document.body.style.backgroundColor = "#000000";
        document.getElementById('light-dark').style.filter = "invert(100%)";
        document.body.style.color = "#ffffff";
        let elements = document.getElementsByClassName('dropdown');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "invert(100%)";
            elements[i].style.zIndex = '10';
        }
        document.getElementById('tempo-numpad').style.filter = "invert(100%)";
        document.getElementById('numpad-title').style.color = "#ffffff";
        document.getElementById('beep-length').style.filter = "invert(100%)";
        dark = true;
    }