
const p1score=document.querySelector('#p1score');
const p2score=document.querySelector('#p2score');

const limit=document.querySelector('#limit')

const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');
const reset=document.querySelector('#reset');

let currScoreP1=0;
let currScoreP2=0;

reset.addEventListener('click', function(){
    p1.disabled=false;
    p2.disabled=false;
    limit.value=0;
    currScoreP1=0;
    currScoreP2=0;
    p1score.innerText=`${currScoreP1}`
    p2score.innerText=`${currScoreP2}`
    p1score.style.color='black';
    p2score.style.color='rgb(0,0,0)';
    document.querySelector('h2').innerText='';
})

p1.addEventListener('click', function(){
    if(limit.value==0){
        alert('Please Select a Limit.');
        return;
    }
    currScoreP1+=1;
    p1score.innerText=`${currScoreP1}`
    if(currScoreP1==limit.value){
        p1.disabled=true;
        p2.disabled=true;
        p1score.style.color='green';
        p2score.style.color='red';
        document.querySelector('h2').innerText=`Player 1 is the Winner!`;  
    }
})
p2.addEventListener('click', function(){
    if(limit.value==0){
        alert('Please Select a Limit.');
        return;
    }
    currScoreP2+=1;
    p2score.innerText=`${currScoreP2}`;
    if(currScoreP2==limit.value){
        p1.disabled=true;
        p2.disabled=true;
        p1score.style.color='red';
        p2score.style.color='rgb(0,255,0)';  
        document.querySelector('h2').innerText=`Player 2 is the Winner!`;
    }
})