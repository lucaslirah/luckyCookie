const cookieImg = document.querySelector('.imgCookie img')
const openAntCookie = document.querySelector('#openAntCookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let phraseCookie = document.querySelector('#phraseCookie p')
let randomNumber = Math.round(Math.random() * 19)

let luckyPhrases = ["Alague seu coração de esperanças, mas não deixe que ele se afogue nelas.\nFernando Pessoa", "Não deixe de fazer algo que gosta devido à falta de tempo; a única falta que terá, será desse tempo que infelizmente não voltará jamais.\nDesconhecido", "Não deixe que o ruído da opinião alheia impeça que você escute a sua voz interior.\nSteve Jobs", "Se você pode dizer e alguém pode ouvir, não deixe de falar.\n Amanhã pode ser tarde demais.\nÉrica Caroline", "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.\nJoseph Addison", "Há sempre alguma loucura no amor.\n Mas há sempre um pouco de razão na loucura.\nFriedrich Nietzsche", "O passado não reconhece o seu lugar: está sempre presente... \nMario Quintana", "Quem comete uma injustiça é sempre mais infeliz que o injustiçado. \nPlatão", "Quem quiser vencer na vida deve fazer como os seus sábios: mesmo com a alma partida, ter um sorriso nos lábios. \nDinamor", "Creia em si, mas não duvide sempre dos outros. \nMachado de Assis", "Aqueles que não fazem nada estão sempre dispostos a criticar os que fazem algo. \nOscar Wilde", "O orgulho dos pequenos consiste em falar sempre de si próprios; o dos grandes em nunca falar de si. \nVoltaire", "Foge por um instante do homem irado, mas foge sempre do hipócrita. \nConfúcio", "Deve-se aprender sempre, até mesmo com um inimigo. \nIsaac Newton", "A vida real do ser humano consiste em ser feliz, principalmente por estar sempre na esperança de sê-lo muito em breve. \nEdgar Allan Poe", "Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre. \nPaulo Freire", "A gente só morre uma vez. Mas é para sempre. \nMillôr Fernandes", "Assuma o comando da sua atitude. Não deixe que outra pessoa a escolha por você. \nPaul Koch", "Saudade é amar um passado que ainda não passou, É recusar um presente que nos machuca, É não ver o futuro que nos convida... \nAguinaldo Silva", "Se você quiser alguém em quem confiar, confie em si mesmo. \nRenato Russo"]

//events
cookieImg.addEventListener('click', luckyPhrase)
openAntCookie.addEventListener('click', resetCookie)
document.addEventListener('keydown', keyEnter)

//functions
function alternateScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function resetCookie(){
  alternateScreen()
  randomNumber = Math.round(Math.random() * 19)
  phraseCookie.innerText = `${luckyPhrases[randomNumber]}`
}

function luckyPhrase(){
  alternateScreen()
  phraseCookie.innerText = `${luckyPhrases[randomNumber]}`
}

function keyEnter(e){  
  if(e.key === 'Enter' && screen1.classList.contains('hide')){
    resetCookie()
  }else if(e.key === 'Enter' && screen2.classList.contains('hide')){
      luckyPhrase()
    }
}



