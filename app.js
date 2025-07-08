const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {
 
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })
    })

}

// Animation écriture

const txtAnim = document.querySelector(".text-animation");

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString("Moi c\'est Sébastien Gobbi")
.pauseFor(300)
.typeString("<strong>, Développeur et Concepteur d'application.</strong>")
.pauseFor(1000)
.deleteChars(28)
.typeString('<span style="color: #27ae60;"> HTML</span> ! ')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #EA39ff;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: midnightblue;"> React</span> !')
.pauseFor(1000)

.start()


// Animation contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];
    

    field.addEventListener('input', (e) =>{
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })

}

