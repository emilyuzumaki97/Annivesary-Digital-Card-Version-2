console.log("Script loaded");
const PASSWORD = "0710";

const memories = [

{
image:"1.jpg",
title:"The Day We Met ❤️",
caption:"The beginning of my favorite story.",
date:"03 September 2023"
},

{
image:"2.jpg",
title:"Our First Date ❤️",
caption:"I still remember how nervous and happy I was.",
date:"16 September 2023"
},

{
image:"3.jpg",
title:"Our Adventure ❤️",
caption:"Every adventure becomes beautiful because you're there.",
date:"08 February 2025"
},

{
image:"4.jpg",
title:"Our Favorite Moment ❤️",
caption:"One photo. A thousand emotions.",
date:"All The Time"
},

{
image:"5.jpg",
title:"Forever Us ❤️",
caption:"May our album never stop growing.",
date:"Today and Forever  ❤️"
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

I don't even know where to begin, because there are so many things I want to tell you.

First, I want you to know how deeply I love you. ❤️
You are not just someone I love today. You are the person I have chosen for my life, 
the person I want beside me through all the years that are still waiting for us.

We've had beautiful days, difficult days, silly arguments, misunderstandings, laughter, 
tears, and moments where things weren't always easy.

But through every up and down, you stayed.

And that means more to me than I could ever properly explain.

Thank you for choosing to stay with me even when I wasn't the easiest person to understand.
Thank you for being patient with me.
Thank you for listening to me, supporting me, caring about me, and loving me 
through all my different moods and moments.

There have been times when things weren't perfect, but somehow we still 
found our way back to each other.

And honestly, that is one of the things I treasure most about us.

I'm so incredibly grateful that you are part of my life.

Sometimes I look at you and wonder how I got so lucky to have someone like you beside me.

You have become such a special part of my life that I can't imagine my story without you in it.

I want to make so many more memories with you.
I want more adventures, more laughs, more late-night conversations, more silly moments, more celebrations, 
and even more difficult days that we can overcome together.

I don't expect our life together to always be perfect.

I just want it to be ours.

I want to keep choosing you.
Again and again.
Through every season, every change, every good day and every difficult one.

Thank you for staying.
Thank you for choosing me.
Thank you for being you.

And most importantly...

Thank you for giving me the chance to love you.

I love you more than these words can ever explain. ❤️

Happy Anniversary, my love.

Here's to us,
to everything we've already been through,
and to everything that is still waiting for us.

I choose you.
Today.
Tomorrow.
And for all the days after that.

Forever yours. ❤️`;

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
