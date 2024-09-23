
let pageTitle = document.querySelector("#page-title");
let header = document.querySelector("header")
let body = document.querySelector("body");

//JavaScript Time out changes h1 title after 5 sec
setTimeout(function(){
    pageTitle.style.color = "red";
    //console.log("Time out worked!!");
}, 5000);

// Click Event on HEADER Changes BG 
header.onclick = function(){
    // console.log("clicked header");
    body.style.backgroundColor= "purple";
}

document.querySelector("#image-0").addEventListener("click", function(){
    document.querySelector("#image-01").style.visibility = "visible";
    alert("EXPLODE");
})

document.querySelector("#image-01").addEventListener("click", function(){
    document.querySelector("#image-02").style.visibility = "visible";
})

document.querySelector("#image-02").addEventListener("click", function(){
    document.querySelector("#image-03").style.visibility = "visible";
})

document.querySelector("#image-03").addEventListener("click", function(){
    document.querySelector("#image-04").style.visibility = "visible";
    s
})

document.querySelector("#image-04").addEventListener("click", function(){
    document.querySelector("#image-05").style.visibility = "visible";
})

document.querySelector("#image-05").addEventListener("click", function(){
    document.querySelector("#image-06").style.visibility = "visible";
})

document.querySelector("#image-06").addEventListener("click", function(){
    document.querySelector("#image-07").style.visibility = "visible";
})

document.querySelector("#image-07").addEventListener("click", function(){
    document.querySelector("#image-07").style.display = "none";
})
