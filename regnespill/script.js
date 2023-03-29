
let oppgaveEl = document.querySelector('#oppgave')
let svarEl = document.querySelector('#svar')
let bodyEl = document.querySelector('#body')

let sjekkBtn = document.querySelector('#sjekk')
let nyBtn = document.querySelector('#ny')
nyBtn.style.display = 'none'

let konklusjonEl = document.querySelector('#konklusjon')

let h2El = document.querySelector('main > h2')
console.log(h2El.innerHTML)

let regneart = h2El.innerHTML

let produkt
let fasit

nyOppgave()

function nyOppgave(){

    svarEl.value = ''
    svarEl.classList.remove('wrong')
    svarEl.classList.remove('correct')

    sjekkBtn.style.display = 'inline-block'
    nyBtn.style.display = 'none'

    konklusjonEl.innerHTML = ''

    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);

    if (regneart =='Multiplikasjon'){
        fasit = a*b
        oppgaveEl.innerHTML = `${a} x ${b} = ?`
        //eller oppgaveEl.innerHTML = a + "x" + b "= ?"
    }else if (regneart == 'Addisjon'){
        fasit = a+b
        oppgaveEl.innerHTML = `${a} + ${b} = ?`
    }else if (regneart == 'Subtraksjon'){
        fasit = a-b
        oppgaveEl.innerHTML = `${a} - ${b} = ?`
    }
    
    console.log(fasit)
}


function sjekkSvar(){
    console.log('Sjekker svaret')
    let svar = Number(svarEl.value)

    if (svar == fasit){
        konklusjonEl.innerHTML = 'Du har rett!'
        svarEl.classList.add('correct')
    } else {
        konklusjonEl.innerHTML = 'Du har dessverre feil...'
        svarEl.classList.add('wrong')
    }

    sjekkBtn.style.display = 'none'
    nyBtn.style.display = 'inline-block'

}


sjekkBtn.addEventListener('click', sjekkSvar)
nyBtn.addEventListener('click', nyOppgave)



