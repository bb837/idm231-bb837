//       OBJECTS

const Ari = {
  value: 0,
  name: 'Aries',
  date: 'March 21 - April 19',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Fiery, Cardinal, Active',
  description: "The traits of an Aries include the fierce need for individuality. Aries have strong opinions and personalities and they need to be number-one. They are competitive and love a challenge, but are often better at starting than finishing. It takes a lot to hold an Aries’ attention span—though when they find their obsessions they go in all the way! Aries is the sign of the trendsetter and trailblazer. As the zodiac’s first sign, Aries loves anything new.",
}

const Tau = {
  value: 1,
  name: 'Taurus',
  date: 'April 20 - May 20',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Driven, Fixed, Trustworthy',
  description: 'some vague fru fru text 1',
}

const Gem = {
  value: 2,
  name: 'Gemini',
  date: 'May 21 - June 21',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Adaptable, Active, Communicative',
  description: 'some vague fru fru text 2',
}

const Can = {
  value: 3,
  name: 'Cancer',
  date: 'June 22 - July 22',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Nuturing, Receptive, Supportive',
  description: 'some vague fru fru text 3',
}

const Leo = {
  value: 4,
  name: 'Leo',
  date: 'July 23 - August 22',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Active, Playful, Warm',
  description: 'some vague fru fru text 4',
}

const Vir = {
  value: 5,
  name: 'Virgo',
  date: 'August 23 - September 22',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Humble, Logical, Organized',
  description: 'some vague fru fru text 5',
}

const Lib = {
  value: 6,
  name: 'Libra',
  date: 'September 23 - October 23',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Charming, Easy-going',
  description: 'some vague fru fru text 6',
}

const Sco = {
  value: 7,
  name: 'Scorpio',
  date: 'October 24 - November 21',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Passionate, Driven, Emotional',
  description: 'some vague fru fru text 7', 
}

const Sag = {
  value: 8,
  name: 'Sagittarius',
  date: 'November 22 - December 21',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Optimistic: Ambitious, Versatile',
  description: 'some vague fru fru text 8',
}

const Cap = {
  value: 9,
  name: 'Capricorn',
  date: 'December 22 - January 19',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Patient, Responsible, Determined',
  description: 'some vague fru fru text 9',
}

const Aqu = {
  value: 10,
  name: 'Aquarius',
  date: 'January 20 - February 18',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Intelligent, Humanistic, Inventive',
  description: 'some vague fru fru text 10',
}

const Pis = {
  value: 11,
  name: 'Pisces',
  date: 'February 19 - March 20',
  image: 'TEMP',
  sound: 'TEMP',
  trait: 'Romantic, Creative, Sensitive',
  description: 'some vague fru fru text 11',
}

const getSign = [Ari,Tau,Gem,Can,Leo,Vir,Lib,Sco,Sag,Cap,Aqu,Pis];

//     INFO

// have the doc create the text on selected index

//     CAROUSEL BOI

function OpenNav() {
  document.getElementById('selected_info').style.height = '30vh';
  selectedIndexNormal
}

document.getElementById('submit_car').addEventListener("click",OpenNav, false);



//     FORM BOI

// var whichMonth = document.getElementById('sel_month').value; // get the value attribute 

// // console.log(whichMonth);

// var whichDayOfMonth = document.getElementById('birth_day').value; // get number value from 1-31

// console.log(whichDayOfMonth);

var submitBtn = document.getElementById('submit');
// console.log(submitBtn);



submitBtn.addEventListener('click', function() {
  var whichMonth = document.getElementById('sel_month').value; // get the value attribute 

// console.log(whichMonth);

var whichDayOfMonth = document.getElementById('birth_day').value; // get number value from 1-31

  getSignData(whichMonth, whichDayOfMonth);

selectedIndexNormal = eval(getSignData(whichMonth, whichDayOfMonth)).value;

  // console.log('click');
  OpenNav();

  document.getElementById('zodiac_name').innerText = getSign[selectedIndexNormal].name;
  document.getElementById('zodiac_date').innerText = getSign[selectedIndexNormal].date;
  document.getElementById('vague_fru_text').innerText = getSign[selectedIndexNormal].description;
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

  var AstroSign = '';
  console.log(whichMonth);
  console.log(whichDayOfMonth);

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

    AstroSign = 'error';
  
 } else if ((whichMonth == 9|| whichMonth == 4|| whichMonth == 6|| whichMonth == 11)
      && whichDayOfMonth > 30) {

   AstroSign = 'error';
      
 } else if  ((whichMonth == 2)
      && whichDayOfMonth > 29) {
      
        AstroSign = 'error';
  }

  //    NEGATIVES AND 0 ARE WORKING.   ITS A NO NO

  console.log(AstroSign);

  return AstroSign;
}

//    CAROUSEL
var carousel = document.querySelector('.carousel');
var cellCount = 12;
var selectedIndex = 0;
var selectedIndexNormal = 0; 

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';

  console.log(angle);
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  selectedIndexNormal = selectedIndex%12;
  if(selectedIndexNormal < 0) {
    selectedIndexNormal += 12; 
  }
  rotateCarousel();
  // console.log(selectedIndex);
  // console.log(selectedIndexNormal);
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  selectedIndexNormal = selectedIndex%12;
  if(selectedIndexNormal < 0) {
    selectedIndexNormal += 12; 
  }
  rotateCarousel();
  // console.log(selectedIndex);
  // console.log(selectedIndexNormal);
});

// if selectedIndex = 1-12 then apply this code
// add elements   call from object name and date