//       OBJECTS

const Ari = {
  name: 'Aries';
  image:
  sound:
  description: 
}

const Tau = {
  name: 'Taurus';
  image:
  sound:
  description: 
}

const Gem = {
  name: 'Gemini';
  image:
  sound:
  description: 
}

const Can = {
  name: 'Cancer';
  image:
  sound:
  description: 
}

const Leo = {
  name: 'Leo';
  image:
  sound:
  description: 
}

const Vir = {
  name: 'Virgo';
  image:
  sound:
  description: 
}

const Lib = {
  name: 'Libra';
  image:
  sound:
  description: 
}

const Sco = {
  name: 'Scorpio';
  image:
  sound:
  description: 
}

const Sag = {
  name: 'Sagittarius';
  image:
  sound:
  description: 
}

const Cap = {
  name: 'Capricorn';
  image:
  sound:
  description: 
}

const Aqu = {
  name: 'Aquarius';
  image:
  sound:
  description: 
}

const Pis = {
  name: 'Pisces';
  image:
  sound:
  description: 
}

//     ZODIAC DATES

if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

//    CAROUSEL

var carousel = document.querySelector('.carousel');
var cellCount = 12;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
