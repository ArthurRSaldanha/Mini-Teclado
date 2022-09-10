function playSound(audioSelector){
    const element = document.querySelector(audioSelector);

    if (element != null && element.element.localName === 'audio'){
        element.play();
    } else {
        alert('Elemento não encontrado');
    }
}

const buttonsList = document.querySelectorAll('.tecla');

for (let i = 0; i < buttonsList.length; i++){

    const button = buttonsList[i];

    const instrument = button.classList[1];

    const idAudio = `#som_${instrument}`;

    button.onclick = function() {
        playSound(idAudio);
    }

    button.onkeydown = function (event){
        if (event.code === "Space" || event.code === "Enter"){
            button.classList.add('ativa');
        }
    }

    button.onkeyup = function (){
        button.classList.remove('ativa');
    }
}
