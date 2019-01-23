    var i=0;//start point
var images=[];
var time=4000;
//Image List
images [0]='q0.jpg';
images [1]='q1.jpg';
images [2]='q2.jpg';
images [3]='q10.jpg';
images [4]='q4.jpg';
images [5]='q5.jpg';
images [6]='q6.jpg';
images [7]='q7.jpg';
images [8]='q8.jpg';
images [9]='q9.png';
images [10]='q3.jpg';
images [11]='q11.jpg';
images [12]='q12.jpg';
images [13]='q13.jpg';
images [14]='q14.jpg';


//Change Image
function changeImg(){
    document.slide.src=images[i];

    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload=changeImg;

$(document).ready(function(){
    $('button').click(function(){
        $('ol').toggleclass('active')
    })
})
