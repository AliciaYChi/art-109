let colorIndex = 0;
let img_00 = document.querySelector("#img_00");
let img_01 = document.querySelector("#img_01");
let img_02 = document.querySelector("#img_02");
let img_03 = document.querySelector("#img_03");
let img_04 = document.querySelector("#img_04");
let img_05 = document.querySelector("#img_05");
let img_06 = document.querySelector("#img_06");

//JavaScript Time out changes <pre> title after 3 sec ===============
       
//let art = document.getElementById('art');

    //setInterval(changeColor, 1000);
    
        //function changeColor(){

           // var r = Math.floor(Math.random()*255);
           // var g = Math.floor(Math.random()*255);
            //var b = Math.floor(Math.random()*255);

            //art.style.color = "RGB("+r+","+g+","+b+")");

        //}
    //changeColor();

//===================================================================

// Image Pop-ups ===============


img_00.addEventListener("click", function(){
    img_01.style.visibility = "visible"; 
})

img_01.addEventListener("click", function(){
    img_03.style.visibility = "visible";
})

img_02.addEventListener("click", function(){
    img_00.style.visibility = "visible";
    alert("HE SHAMELESSLY HE SHAMELESSLY HE SHAMELESSLY HE SHAMELESSLY");
})

img_03.addEventListener("click", function(){
    img_04.style.visibility = "visible";
})

img_04.addEventListener("click", function(){
    img_05.style.visibility = "visible";
})

img_05.addEventListener("click", function(){
    img_06.style.visibility = "visible";
})

img_06.addEventListener("click", function(){
    img_06.style.visibility = "visible";
})

