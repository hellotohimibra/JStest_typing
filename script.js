const randomQ = 'https://api.quotable.io/random';
const qoutedisplay=document.getElementById('qouteDisplay')
function getRandomQ(){
    return fetch(randomQ)
    .then(response => response.json())
    .then(data => data.content)
}

 async function getnextQ(){
    const qoute = await getRandomQ() 
    qoutedisplay.innerHTML=qoute
}

getnextQ()