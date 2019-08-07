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

const keyup = document.querySelector('body');
keyup.addEventListener('keyup', function(e){
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


// const resize = document.querySelector('.home .intro img');
// window.addEventListener('resize', function(e){
//     TweenMax.to(e.target, 1, {scale: 1.5})
// });


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



// function logSelection(event) {
//     const log = document.getElementById('log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
//   }

// const input = document.querySelector('input');
// input.addEventListener('select', logSelection);


function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`You selected: ${selection}`);
  }
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);


// const select = document.querySelector('#log');
// select.addEventListener('select', function(e){
//     console.log(`${e.target} has been selected`);
// });

const contextMenu = document.querySelector('.footer');
contextMenu.addEventListener('contextmenu', function(e){
    e.target.style.backgroundColor = "green";
});

const focus = document.querySelector('.nav .nav-link');
focus.addEventListener('focus', function(e){
    e.target.style.color = "red";
});


// const scroll = document.querySelector('body');
// scroll.addEventListener('scroll', function(e){
//     document.body.style.backgroundColor = "green";
// });



const signupBtns = document.querySelector('.btn')
signupBtns.addEventListener('click', function(e){
    console.log("Button has been clicked")
    event.preventDefault();
});




// const resize = document.querySelector('body')
// window.addEventListener('resize', function(e){
//     window.innerHeight
// })



const destH4 = document.querySelectorAll('.destination')[0];
destH4.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "blue";
});

const destButton = document.querySelector('.destination p');
destButton.addEventListener('mouseover', function(e) {
    e.stopPropagation();
    e.target.style.backgroundColor = "red";
});

//click event on button, click event on h4, propogate the h4





 