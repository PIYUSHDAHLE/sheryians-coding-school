const btn = document.querySelector('button');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.close');
const content = document.querySelector('.content');

btn.addEventListener("click",()=>{
    popUp.style.display = 'flex';
})
close.addEventListener("click",()=>{
    popUp.style.display = 'none';
})
popUp.addEventListener("click",()=>{
    if (event.target !== content) {
        popUp.style.display = 'none';
   }
})

