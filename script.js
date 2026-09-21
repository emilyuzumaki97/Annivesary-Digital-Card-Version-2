console.log("Script loaded");
const PASSWORD = "1208";

const memories = [

{
image:"1.jpg",
title:"The Day We Met ❤️",
caption:"The beginning of my favorite story.",
date:"12 August 2024"
},

{
image:".jpg",
title:"Our First Date ❤️",
caption:"I still remember how nervous and happy I was.",
date:"18 September 2024"
},

{
image:"3.jpg",
title:"Our Adventure ❤️",
caption:"Every adventure becomes beautiful because you're there.",
date:"02 December 2024"
},

{
image:"4.jpg",
title:"Our Favorite Moment ❤️",
caption:"One photo. A thousand emotions.",
date:"10 February 2025"
},

{
image:"5.jpg",
title:"Forever Us ❤️",
caption:"May our album never stop growing.",
date:"Today ❤️"
}

];


function startSlideshow() {

    currentPhoto = 0;

    const letterBtn = document.getElementById("letterBtn");

    // Reset Letter button
    letterBtn.style.display = "none";
    letterBtn.style.opacity = "0";

    // Show first photo
    loadPhoto();

    const slideshow = setInterval(() => {

        currentPhoto++;

        if (currentPhoto < memories.length) {

            loadPhoto();

        } else {

            // Stop slideshow
            clearInterval(slideshow);

            // Wait 2 seconds after final photo
            setTimeout(() => {

                letterBtn.style.display = "block";

                // Small delay so opacity animation works
                setTimeout(() => {

                    letterBtn.style.opacity = "1";

                }, 100);

            }, 2000);

        }

    }, 4000);

}



let currentPhoto = 0;

function unlockStory(){

const value=document.getElementById("password").value;

if(value===PASSWORD){

document.getElementById("page1").classList.remove("active");

document.getElementById("page2").classList.add("active");

}

else{

document.getElementById("error").innerHTML="Wrong Anniversary Date ❤️";

}

}

function goCakeCut(){

    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");

    // Hide Memories button
    const memoryBtn = document.getElementById("memoryBtn");
    memoryBtn.style.display = "none";
    memoryBtn.style.opacity = "0";

    // Show Cut Cake button
    document.getElementById("cutCakeBtn").style.display = "inline-block";

    // Clear message
    document.getElementById("celebrateMessage").innerHTML = "";

    // Reset video
    const video = document.getElementById("cakeVideo");
    video.pause();
    video.currentTime = 0;

}

function cutCake(){

    const video = document.getElementById("cakeVideo");

    // Hide the Cut Cake button
    document.getElementById("cutCakeBtn").style.display = "none";

    // Play the video
    video.play();

    // When the video finishes
    video.onended = function(){

        // Confetti
        confetti({
            particleCount:300,
            spread:180,
            origin:{y:.6}
        });

        // Show anniversary message
        document.getElementById("celebrateMessage").innerHTML =
        "🎉 Happy Anniversary My Love ❤️";

        // Wait 2 seconds, then show the Memories button
        setTimeout(() => {

            const btn = document.getElementById("memoryBtn");

            btn.style.display = "inline-block";

            setTimeout(() => {
                btn.style.opacity = "1";
            }, 100);

        }, 2000);

    };

}

function goMemories(){

document.getElementById("page3").classList.remove("active");

document.getElementById("page4").classList.add("active");

startSlideshow();

}

function loadPhoto(){

    const card = document.querySelector(".polaroid");

    const animations = [
        "fadeIn",
        "slideIn",
        "zoomIn",
        "rotateIn"
    ];

    // Reset animation
    card.className = "polaroid";

    // Add animation
    card.classList.add(
        animations[currentPhoto % animations.length]
    );

    // Change image
    document.getElementById("memoryImage").src =
        memories[currentPhoto].image;

    // Change title
    document.getElementById("memoryTitle").innerHTML =
        memories[currentPhoto].title;

    // Change caption
    document.getElementById("memoryCaption").innerHTML =
        memories[currentPhoto].caption;

    // Change date
    document.getElementById("memoryDate").innerHTML =
        memories[currentPhoto].date;
}



function goLetter(){

document.getElementById("page4").classList.remove("active");

document.getElementById("page5").classList.add("active");

}



function typeLetter(){

    const target = document.getElementById("typingText");

    target.innerHTML = "";

    index = 0;

    const typing = setInterval(()=>{

        target.innerHTML += letterMessage.charAt(index);

        index++;

        if(index >= letterMessage.length){

            clearInterval(typing);

        }

    },35);

}



const letterMessage = `Happy Anniversary, my love ❤️

From the day we met, my life became more beautiful.

Thank you for every smile, every laugh, every memory, and every moment we've shared together.

You are one of the most genuine people I've ever known.

Thank you for always being there for me.

I hope our story continues for many more years.

I love you ❤️`;

let index = 0;



function openLetter() {

    document.getElementById("envelope").style.display = "none";

    document.getElementById("letterPaper").style.display = "block";

    typeLetter();

}




setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},350);
