let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const changeColor = (e) => {
    // console.log(e.keyCode, e.which);

    // if
    // if (e.keyCode === 38) {
    //     if (red < 255) {
    //         document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
    //     }
    //     console.log(red, green, blue)
    // } else if (e.keyCode === 40) {
    //     if (red >= 0) {
    //         document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
    //     }
    //     console.log(red, green, blue)
    // }

    // switch
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red<=255 ? red++ : red}, ${green <= 255 ?  green++ : green}, ${blue <= 255 ? blue++ : blue})`;
            console.log(red);
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green > 0 ?  --green : green}, ${blue > 0 ? --blue : blue})`;
            console.log(red);
            break;

    }

}

window.addEventListener('keydown', changeColor)