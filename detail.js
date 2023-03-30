const butnAll = document.querySelectorAll('.tab-button');
const contentAll = document.querySelectorAll('.tab-content');
const butn1 = document.querySelectorAll('.tab-button')[0];
const content1 = document.querySelectorAll('.tab-content')[0];
const butn2 = document.querySelectorAll('.tab-button')[1];
const content2 = document.querySelectorAll('.tab-content')[1];
const butn3 = document.querySelectorAll('.tab-button')[2];
const content3 = document.querySelectorAll('.tab-content')[2];
 
butn1.addEventListener('click',()=>{ // 1번째 버튼
    //모든 orange 제거 후  
    //해당 버튼에 orange 추가 
    butnAll.forEach(el=>{el.classList.remove('orange')});
    butn1.classList.add('orange');
    console.log(butnAll.length)
    // 모든 div 박스에 붙은 show 제거 
    // 해당 버튼에 show 붙이기
    contentAll.forEach(el=>{el.classList.remove('show')});
    content1.classList.add('show');
})

butn2.addEventListener('click',()=>{ // 2번쨰 버튼
    butnAll.forEach(el=>{el.classList.remove('orange')});
    butn2.classList.add('orange');
    contentAll.forEach(el=>{el.classList.remove('show')});
    content2.classList.add('show');
})

butn3.addEventListener('click',()=>{ // 3번째 버튼
    butnAll.forEach(el=>{el.classList.remove('orange')});
    butn3.classList.add('orange');
    contentAll.forEach(el=>{el.classList.remove('show')});
    content3.classList.add('show');
})