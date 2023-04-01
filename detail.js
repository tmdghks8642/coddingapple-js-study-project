const butnAll = document.querySelectorAll('.tab-button');
const contentAll = document.querySelectorAll('.tab-content');
const butn1 = document.querySelectorAll('.tab-button')[0];
const content1 = document.querySelectorAll('.tab-content')[0];
const butn2 = document.querySelectorAll('.tab-button')[1];
const content2 = document.querySelectorAll('.tab-content')[1];
const butn3 = document.querySelectorAll('.tab-button')[2];
const content3 = document.querySelectorAll('.tab-content')[2];
 
const allButton = document.querySelector('.list')

function butClick(i){
    butnAll.forEach(el=>{el.classList.remove('orange')});
    document.querySelectorAll('.tab-button')[i].classList.add('orange');
    contentAll.forEach(el=>{el.classList.remove('show')});
    document.querySelectorAll('.tab-content')[i].classList.add('show');

}

allButton.addEventListener('click',(e)=>{
        butClick(e.target.dataset.id)
})
