let btn = document.getElementById("toggle");

let block = document.getElementById('menu');


btn.addEventListener('click',function(){
    if(block.style.display === 'none'){
        block.style.display = 'flex'
    }
    else{
        block.style.display = 'none'
    }
    
})