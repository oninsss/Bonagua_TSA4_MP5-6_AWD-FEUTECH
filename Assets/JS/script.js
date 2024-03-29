const hoverDesign = document.getElementById('_hoverDesign');
const foodBowlsImg = document.getElementById('_foodBowlsImg');
const foodName = document.getElementById('_foodName');
const foodName1 = document.getElementById('_persText')
const foodName2 = document.getElementById('_secondText')
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const prevBtn = document.getElementById('_prev');
const nextBtn = document.getElementById('_next');
const foodDescription = document.getElementsByClassName('foodDescription');
const foodDescription1 = document.getElementById('_foodDescription1');
const foodDescription2 = document.getElementById('_foodDescription2');
const foodDescription3 = document.getElementById('_foodDescription3');
const foodDescription4 = document.getElementById('_foodDescription4');
const mainMenu = document.getElementById('_mainMenu');

const card1BowlPos = -10;
const card2BowlPos = -100;
const card3BowlPos = -190;
const card4BowlPos = -280;

// if currBowl = 0, then the food bowl is at the first card
currBowl = 1;
gotoBowl = 1;
pastBowl = 4;
transiLength = 0;

const card1Pos = card1.getBoundingClientRect();
const card2Pos = card2.getBoundingClientRect();
const card3Pos = card3.getBoundingClientRect();
const card4Pos = card4.getBoundingClientRect();

function mainMenuCloser(){
    foodDescription1.style.opacity = 0;
    foodDescription1.style.zIndex = -1;
    foodDescription2.style.opacity = 0;
    foodDescription2.style.zIndex = -1;
    foodDescription3.style.opacity = 0;
    foodDescription3.style.zIndex = -1;
    foodDescription4.style.opacity = 0;
    foodDescription4.style.zIndex = -1;

}

function hoverRemove() {
    if (pastBowl == 1) {
        card1.style.backgroundColor = "transparent";
    } else if (pastBowl == 2) {
        card2.style.backgroundColor = "transparent";
    } else if (pastBowl == 3) {
        card3.style.backgroundColor = "transparent";
    } else if (pastBowl == 4) {
        card4.style.backgroundColor = "transparent";
    }
}

function fadeOut() {
    foodName.style.opacity = 0;
}

function fadeIn() {
    foodName.style.opacity = 1;
}

function prevCard() {
    if (currBowl == 1) {
        card4.dispatchEvent(new Event('mouseover'));
        card4.style.backgroundColor = "white";
        
    }
    else if (currBowl == 2) {
        card1.dispatchEvent(new Event('mouseover'));
        card1.style.backgroundColor = "white";
    }
    else if (currBowl == 3) {
        card2.dispatchEvent(new Event('mouseover'));
        card2.style.backgroundColor = "white";
    }
    else if (currBowl == 4) {
        card3.dispatchEvent(new Event('mouseover'));
        card3.style.backgroundColor = "white";
    }

    hoverRemove();
}

function nextCard(){
    

    if (currBowl == 1) {
        card2.dispatchEvent(new Event('mouseover'));
        card2.style.backgroundColor = "white";
        
    }
    else if (currBowl == 2) {
        card3.dispatchEvent(new Event('mouseover'));
        card3.style.backgroundColor = "white";
    }
    else if (currBowl == 3) {
        card4.dispatchEvent(new Event('mouseover'));
        card4.style.backgroundColor = "white";
    }
    else if (currBowl == 4) {
        card1.dispatchEvent(new Event('mouseover'));
        card1.style.backgroundColor = "white";
    }

    hoverRemove();
}

card1.addEventListener('mouseover', () => {
    gotoBowl = 1;
    transiLength = Math.abs(gotoBowl - currBowl);
    foodBowlsImg.style.transitionDuration = `${transiLength}s`;
    
    
    if (window.screen.width < 1025) {
        foodBowlsImg.style.transform = `rotate(${card1BowlPos + 10}deg)`;
    }
    else{
        foodBowlsImg.style.transform = `rotate(${card1BowlPos}deg)`;
    }

    foodName.querySelector('p').innerText = "#1 most loved dish";
    foodName1.style.fontWeight = "200";
    foodName1.innerText = "Spicy Soft Tofu";
    foodName2.innerText = "순두부찌개";        
    
    pastBowl = currBowl;
    currBowl = gotoBowl;
    
    hoverRemove();
    card1.style.backgroundColor = "white";
});

card2.addEventListener('mouseover', () => {
    gotoBowl = 2;
    transiLength = Math.abs(gotoBowl - currBowl);
    foodBowlsImg.style.transitionDuration = `${transiLength}s`;
    

    if (window.screen.width < 1025) {
        foodBowlsImg.style.transform = `rotate(${card2BowlPos + 10}deg)`;
    }
    else{
        foodBowlsImg.style.transform = `rotate(${card2BowlPos}deg)`;
    }

    foodName.querySelector('p').innerText = "Most popular dish of the month";
    foodName1.style.fontWeight = "200";
    foodName1.innerText = "Spicy Tteokbokki";
    foodName2.innerText = "떡볶이";

    pastBowl = currBowl;
    currBowl = gotoBowl;
    
    hoverRemove();
    card2.style.backgroundColor = "white";
});

card3.addEventListener('mouseover', () => {
    gotoBowl = 3;
    transiLength = Math.abs(gotoBowl - currBowl);
    foodBowlsImg.style.transitionDuration = `${transiLength}s`;
    

    if (window.screen.width < 1025) {
        foodBowlsImg.style.transform = `rotate(${card3BowlPos + 10}deg)`;
    }
    else{
        foodBowlsImg.style.transform = `rotate(${card3BowlPos}deg)`;
    }

    foodName.querySelector('p').innerText = "Chef's recommendation";
    foodName1.style.fontWeight = "200";
    foodName1.innerText = "Bibimbap";
    foodName2.innerText = "비빔밥";

    pastBowl = currBowl;
    currBowl = gotoBowl;
    
    hoverRemove();
    card3.style.backgroundColor = "white";
});

card4.addEventListener('mouseover', () => {
    gotoBowl = 4;
    transiLength = Math.abs(gotoBowl - currBowl);
    foodBowlsImg.style.transitionDuration = `${transiLength}s`;
    
    if (window.screen.width < 1025) {
        foodBowlsImg.style.transform = `rotate(${card4BowlPos + 10}deg)`;
    }
    else{
        foodBowlsImg.style.transform = `rotate(${card4BowlPos}deg)`;
    } 


    foodName.querySelector('p').innerText = "Noodle lover's favorite dish";
    foodName1.style.fontWeight = "200";
    foodName1.innerText = "Jajangmyeon";
    foodName2.innerText = "자장면";
    
    pastBowl = currBowl;
    currBowl = gotoBowl;
    

    hoverRemove();
    card4.style.backgroundColor = "white";
});

prevBtn.addEventListener('click', () => {
    prevCard();
});

nextBtn.addEventListener('click', () => {
    nextCard();
});

card1.addEventListener('click', () => {
    mainMenuCloser();
    foodDescription1.style.zIndex = 3;
    foodDescription1.style.opacity = 1;
    mainMenu.addEventListener('click', () => {
        
        foodDescription1.style.opacity = 0;
        foodDescription1.style.zIndex = -1;
    });
});

card2.addEventListener('click', () => {
    mainMenuCloser();
    foodDescription2.style.zIndex = 3;
    foodDescription2.style.opacity = 1;
    mainMenu.addEventListener('click', () => {
        foodDescription2.style.opacity = 0;
        foodDescription2.style.zIndex = -1;
    });
});

card3.addEventListener('click', () => {
    mainMenuCloser();
    foodDescription3.style.zIndex = 3;
    foodDescription3.style.opacity = 1;
    mainMenu.addEventListener('click', () => {
        foodDescription3.style.opacity = 0;
        foodDescription3.style.zIndex = -1;
    });
});

card4.addEventListener('click', () => {
    mainMenuCloser();
    foodDescription4.style.zIndex = 3;
    foodDescription4.style.opacity = 1;
    mainMenu.addEventListener('click', () => {
        foodDescription4.style.opacity = 0;
        foodDescription4.style.zIndex = -1;
    });
});
