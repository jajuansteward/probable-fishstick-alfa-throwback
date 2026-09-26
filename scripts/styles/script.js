// document.addEventListener("DOMContentLoaded", () => {

//   console.log('doc loaded');
// });



// old school reminder that JS is hooked up
// alert('90's basketball players are here'); 
alert("90's basketball players are here"); 
alert('90\'s basketball players are here'); 
alert(`90's basketball players are here`); 



var characters = [
  'Robert Parish',
  'Tim Hardaway',
  'Chris Webber',
  'Chris Mullin',
  'Larry Bird'
];

// picks a random character line from the array and logs it
function greetRandomCharacter() {
  var pick = characters[Math.floor(Math.random() * characters.length)];
  console.log('Your favorite basketball character is ' + pick);
  return pick;
}

// defensive: only run once the DOM is actually ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('Garflix loaded! Try calling greetRandomCharacter() in the console.');
  greetRandomCharacter();
});
