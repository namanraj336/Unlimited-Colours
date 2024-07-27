function randomcolour(){
    const hex='0123456789ABCDEF'
    let colour ='#'
    for(i=0;i<6;i++){
        colour += hex[Math.floor(Math.random()*16)]
    }
    return colour;
}
let intervalid

function startchanging(){
    intervalid = setInterval(changebg,1000)
    function changebg(){
    document.body.style.backgroundColor=randomcolour()
    }    
}


function stopchanging(){
    clearInterval(intervalid)
    console.log('stop clicked')
}

document.querySelector('#start').addEventListener('click',startchanging)
document.querySelector('#stop').addEventListener('click',stopchanging)

