const img=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');
let n=0;
function changeSlide(){
    for(let i=0;i<img.length;i++){
        img[i].style.display='none';
    }
    img[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=img.length-1;
    }
    changeSlide();
});
next_btn.addEventListener('click',(e)=>{
    if(n<img.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
});
const scroll=document.querySelectorAll('product');
for(const i of scroll) {
    i.addEventListener('wheel',(event)=>{
        event.preventDefault();
        i.scrollLeft+=event.deltaY;
    });
}