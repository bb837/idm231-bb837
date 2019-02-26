//       OBJECTS

const Ari = {
  name: 'Aries',
  date: 'March 21 - April 19',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Fiery, Cardinal, Active',
  description: 'some vague fru fru text',
}

const Tau = {
  name: 'Taurus',
  date: 'April 20 - May 20',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Driven, Fixed, Trustworthy',
  description: 'some vague fru fru text',
}

const Gem = {
  name: 'Gemini',
  date: 'May 21 - June 21',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Adaptable, Active, Communicative',
  description: 'some vague fru fru text',
}

const Can = {
  name: 'Cancer',
  date: 'June 22 - July 22',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Nuturing, Receptive, Supportive',
  description: 'some vague fru fru text',
}

const Leo = {
  name: 'Leo',
  date: 'July 23 - August 22',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Active, Playful, Warm',
  description: 'some vague fru fru text',
}

const Vir = {
  name: 'Virgo',
  date: 'August 23 - September 22',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Humble, Logical, Organized',
  description: 'some vague fru fru text',
}

const Lib = {
  name: 'Libra',
  date: 'September 23 - October 23',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Charming, Easy-going',
  description: 'some vague fru fru text',
}

const Sco = {
  name: 'Scorpio',
  date: 'October 24 - November 21',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Passionate, Driven, Emotional',
  description: 'some vague fru fru text', 
}

const Sag = {
  name: 'Sagittarius',
  date: 'November 22 - December 21',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Optimistic: Ambitious, Versatile',
  description: 'some vague fru fru text',
}

const Cap = {
  name: 'Capricorn',
  date: 'December 22 - January 19',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Patient, Responsible, Determined',
  description: 'some vague fru fru text',
}

const Aqu = {
  name: 'Aquarius',
  date: 'January 20 - February 18',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Intelligent, Humanistic, Inventive',
  description: 'some vague fru fru text',
}

const Pis = {
  name: 'Pisces',
  date: 'February 19 - March 20',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Romantic, Creative, Sensitive',
  description: 'some vague fru fru text',
}

//     FORMS

var whichMonth = document.getElementsByTagName('option').value; // get the value attribute 

console.log(whichMonth);

var whichDayOfMonth = document.getElementById('birth_day'); // get number value from 1-31

console.log(whichDayOfMonth);

var submitBtn = document.getElementById('submit');
console.log(submitBtn);
submitBtn.addEventListener('click', function() {
  getSignData(whichMonth, whichDayOfMonth);
  // console.log('click');
})

// function Submit () {
//   getSignData(whichMonth, whichDayOfMonth);
//  document.getElementById('submit').addEventListener('click', function() {
//   console.log('shit works');
//  })
//   console.log(whichMonth, whichDayOfMonth);

//   return AstroSign
// }

//     ZODIAC DATES

function getSignData (whichMonth, whichDayOfMonth) {

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

if ((whichMonth == 1|| whichMonth == 3|| whichMonth == 5|| whichMonth == 7|| whichMonth == 8||
  whichMonth == 10|| whichMonth == 12) && whichDayOfMonth > 31) {
  
 } else if ((whichMonth == 9|| whichMonth == 4|| whichMonth == 6|| whichMonth == 11)
      && whichDayOfMonth > 30) {
      
 } else if  ((whichMonth == 2)
      && whichDayOfMonth > 29) {
      
        AstroSign = 'error';
  }

  return AstroSign;
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
  console.log(selectedIndex);
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
  // console.log(selectedIndex);
});

// if selectedIndex = 1-12 then apply this code
// add elements   call from object name and date