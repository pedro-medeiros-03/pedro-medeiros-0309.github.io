'use strict'

const vc = document.querySelector('.btn');

vc.addEventListener('click',
function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme")
    {
        this.textContent = "Dark";
    }
    else
    {
        this.textContent = "Light";
    }
    console.log('Aeee mano - agora o tema é:' + className);
});