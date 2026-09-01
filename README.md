# probable-steak-alfa-throwback
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basketball - Home</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body bgcolor="blue">

  <center>
    <h1>G</h1>
    <p>The #1 streaming site for one lazy orange cat.</p>
  </center>

  <hr>

  <!-- LAYOUT TABLE: puts the 3 sections side-by-side, 90's style -->
  <table border="0" cellpadding="10" cellspacing="0" align="center" width="100%">
    <tr valign="top">

      <!-- SECTION 1: HTML table with info + link -->
      <td align="center">
        <table border="1" cellpadding="5" cellspacing="0" align="center">
          <tr>
            <th colspan="2">Boston Celtics and Golden State Warriors Facts</th>
          </tr>
          <tr>
            <td>Species</td>
            <td>Cat</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>Jon Arbuckle</td>
          </tr>
          <tr>
            <td>Favorite Food</td>
            <td>Lasagna</td>
          </tr>
          <tr>
            <td>Hates</td>
            <td>Mondays</td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <a href="https://www.basketball-reference.com/boxscores/199002230GSW.html" target="_blank">Read more on Wikipedia</a>
            </td>
          </tr>
        </table>
      </td>

      <!-- SECTION 2: image, relative path -->
      <td align="center">
        <h2>Boston Celtics (relative path image)</h2>
        <img src="https://www.google.com/imgres?q=larry%20bird%201990s&imgurl=https%3A%2F%2Fi.redd.it%2Fxi339su72hya1.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FOldSchoolCool%2Fcomments%2F13au9t7%2Flarry_bird_with_the_boston_celtics_1990%2F&docid=PZpbP5yQtMhP_M&tbnid=X1OXuE25TATIVM&vet=12ahUKEwiTwpaGsM2WAxVkIjQIHdFDPf0QnPAOegQIfRAA..i&w=408&h=348&hcb=2&ved=2ahUKEwiTwpaGsM2WAxVkIjQIHdFDPf0QnPAOegQIfRAA">
      </td>

      <!-- SECTION 3: image, absolute path -->
      <td align="center">
        <h2>Golden State Warriors (absolute path image)</h2>
        <img src="https://www.google.com/imgres?q=tim%20hardaway%201990s%20golen%20state%20warriors&imgurl=https%3A%2F%2Fimg.beckett.com%2Fimages%2Fitems%2F3029938%2Fmarketplace%2F57245482%2Ffront.jpg&imgrefurl=https%3A%2F%2Fmarketplace.beckett.com%2Fitem%2F1082%2F1990-star-tim-hardaway-11-tim-hardaway%2Fgolden-state-warriors_57245482&docid=PJ1HZ2XfZxx4OM&tbnid=lTirmyFxO_klKM&vet=12ahUKEwiX_cGpsM2WAxVTDDQIHTFTLaQQnPAOegUIgQEQAA..i&w=756&h=1044&hcb=2&ved=2ahUKEwiX_cGpsM2WAxVTDDQIHTFTLaQQnPAOegUIgQEQAA="300">
      </td>

    </tr>
  </table>

  <hr>

  <footer>
    <center>
      <p>
        <a href="https://github.com/jajuansteward" target="_blank">My GitHub Profile</a>
        |
        <a href="https://github.com/https://github.com/jajuansteward/probable-fishstick-alfa-throwback" target="_blank">Source Code</a>
      </p>
    </center>
  </footer>

  <script src="assets/js/script.js"></script>
</body>
</html>










body {
  background-color: green;
  font-family: Comic Sans MS, cursive, sans-serif;
}

h1 {
  font-size: 48px;
}

table {
  background-color: blue;
}










// old school reminder that JS is hooked up
alert('90's basketball players are here'); 

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
