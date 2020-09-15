//let count = 0;
//function troll(){
//    if(count > 3){ document.getElementById('answer').remove();
//}
  //  document.getElementById('answer').classList.toggle('reverse');
//}

//function show(){
 //   alert("cc");
//}



let opacity = 1;
function troll(){
    let $no = document.getElementById('no');
let maxTop = window.innerHeight-100;
let maxLeft = window.innerWidth -200;
let randomTop = Math.floor(Math.random() * maxTop);
let randomLeft = Math.floor(Math.random() * maxLeft);
opacity-= 0.2;
$no.style.position = ' absolute';
$no.style.top = randomTop+ 'px';
$no.style.left = randomLeft ='px';
$no.style.opacity = opacity ;
}
