// Your code goes here

// mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', function(e) {
    console.log("You clicked me!")
})

const mouseover = document.querySelector('.home .intro h2');
mouseover.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor = "red";
})

//got to work on this
const drag = document.querySelector('.home .intro img');
drag.addEventListener('drag', function(e){
    event.dataTransfer.setData("img", event.target.id);
})

//got to work on this
const dblclick = document.querySelectorAll('.container .content-section .img-content')[0];
dblclick.addEventListener('dbleclick', function(e){
    document.body.style.backgroundColor = "blue";
});


// const select = document.querySelector()