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
});

const keydown = document.querySelector('body');
keydown.addEventListener('keydown', function(e){
    console.log(`${e.code} was pressed `)
});


const mousehover = document.querySelector('.home .intro p');
mousehover.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor = "red";
})

mousehover.addEventListener('mouseleave', function(e){
    document.body.style.backgroundColor = "white";
});


const wheel = document.querySelector('.home .intro h2');
wheel.addEventListener('wheel', function(e){
    e.target.fontSize="50px";
});


const resize = document.querySelector('.home .intro img');
window.addEventListener('resize', function(e){
    TweenMax.to(e.target, 1, {scale: 1.5})
});


//got to work on this
// const drag = document.querySelector('.home .intro img');
// drag.addEventListener('drag', function(e){
//     event.dataTransfer.setData("img", event.target.id);
//     document.querySelector('.home .intro img').innerHTML = "dragging the image";
// })

//got to work on this

const navbar = document.querySelectorAll('.nav .nav-link');
navbar.forEach(anchor => {
    anchor.addEventListener('dblclick', function(e) {
    anchor.style.color = "blue";
})
});




// const select = document.querySelectorAll('.home .content-pick .destination p')[0];
// select.addEventListener('select', function(e){
//     console.log("p tag has been selected")
// })

 