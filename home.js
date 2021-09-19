// let popped = 0;

// document.addEventListener('mouseover', function(e){
    
//     if (e.target.className === "balloon"){
        
//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }   
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){
        
//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };
// var color = document.getElementById('color').onmouseover.style.backgroundColor = "red";
// function onmouseover(){
//     this.style.backgroundColor = "red"

// };
// onmouseoer = document.getElementById('color').style.backgroundColor = "red"
// var change = onmouseover = document.getElementById("color").style.backgroundColor = "red"
function button(){
    window.location.href = "index.html"
}
let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
        

    
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 4){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = 'Congrats you are cleard in level 1';
        message.style.display = 'block';
    }
};