const randomQ = 'https://api.quotable.io/random';

const qoutedisplay=document.getElementById('qouteDisplay')
const qouteInput=document.getElementById('qouteInput')
const timer=document.getElementById('timer')

qouteInput.addEventListener('input', ()=> {
   const arrayqoute = qoutedisplay.querySelectorAll('span')
   const arrayvalue = qouteInput.value.split('')

    let correct = true;
    arrayqoute.forEach((characterSpan, index) => {
    const character  = arrayvalue[index]

       if(character == null){
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false 
       }else if (character === characterSpan.innerText){
           characterSpan.classList.add('correct')
           characterSpan.classList.remove('incorrect')
       }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
       }
   })
   if(correct) getnextQ()
})

function getRandomQ(){
    return fetch(randomQ)
    .then(response => response.json())
    .then(data => data.content)
}

 async function getnextQ(){
    const qoute = await getRandomQ() 
    qoutedisplay.innerHTML="";

    qoute.split('').forEach(character => {
        const charSpan  = document.createElement('span')
        // charSpan.classList.add('correct')
        charSpan.innerHTML =character
        qoutedisplay.appendChild(charSpan)

    })
        

    qouteInput.value = null;
}

// function startTimer(){
//     timer.innerText = 0
// }

getnextQ()