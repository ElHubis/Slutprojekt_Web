const tshirt = document.querySelectorAll('.tshirt')

window.addEventListener('scroll', moveTshirt)

function moveTshirt(){
    const moveTrigger = window.innerHeight / 1.25;

    tshirt.forEach(tshirt =>{
        const tshirtTop = tshirt.getBoundingClientRect().top;

        if(tshirtTop < moveTrigger){
            tshirt.classList.add('show');
        } 
    
        else{
            tshirt.classList.remove('show')
        }
    })
}

const vilka = document.querySelectorAll('.vilka_element')

window.addEventListener('scroll', moveVilka)

function moveVilka(){
    const vilkaTrigger = window.innerHeight/1.5;

    vilka.forEach(vilka =>{
        const vilkaTop = vilka.getBoundingClientRect().top;

        if(vilkaTop < vilkaTrigger){
            vilka.classList.add('move');
        } 
    
        else{
            vilka.classList.remove('move')
        }
    })
}

const varför = document.querySelectorAll('.varför_anim')

window.addEventListener('scroll', moveVarför)

function moveVarför(){
    const varförTrigger = window.innerHeight;

    varför.forEach(varför =>{
        const varförTop = varför.getBoundingClientRect().top;

        if(varförTop < varförTrigger){
            varför.classList.add('move_up');
        } 
    
        else{
            varför.classList.remove('move_up')
        }
    })
}

const carouselImage = document.querySelectorAll('')