
let GamesBox= document.querySelector('.Game-items-wrapper')
let backBtn= document.querySelector('.fa-circle-chevron-left');
let nextBtn= document.querySelector('.fa-circle-chevron-right');

nextBtn.addEventListener("click", ()=>{
    GamesBox.scrollLeft += 40;
})

nextBtn.addEventListener("click", ()=>{
    GamesBox.scrollLeft -= 40;
})