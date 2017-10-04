var txt = document.querySelector('textarea');
var out = document.querySelector('p');

txt.onkeyup = txt.onkeydown = function music() {
    var textAreaInput = document.getElementById("text").value;
    var result = document.getElementById('text').value.match( /[^.!?]+[.!?]+/g );
        if (!result) {
        return;
    }
    // Result is an array of sentences. 
    // However result[0] needs a space at the start for this to work.
    // CODE TO ADD A SPACE IN result[0]
    // How many sentences? (length of result array)
    var i = result.length;
    //console.log(i);
    var x = -1;
    var body = document.body;
    var numofwords = 0;
    
    // Counts number of words.

    while (x <= i) {
        x++;
        numofwords = result[x].split(" ").length
        if (x != 0) {
            numofwords--; // Subtracts One.
        }
        // CHANGE FROM HERE
        console.log(numofwords);
        if (numofwords <= 2) {
            out.innerHTML = "<font class='tiny'>" + result[x] + "</font color>";
        } else if (numofwords <= 5) {
            out.innerHTML = "<font class='short'>" +  result[x] + "</font color>";
        } else if (numofwords <= 14) {
            out.innerHTML = "<font class='medium'>" +  result[x] + "</font color>";
        } else {
            out.innerHTML = "<font class='long'>" +  result[x] + "</font color>";
        }
    }
out.innerHTML = txt.value;
};

var input = document.querySelector('textarea')
var result = document.querySelector('p')

// When user types
input.oninput = function () {
  var sentences = input.value.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g)
  console.log(sentences)
 
  // Clear contents of result
  result.innerHTML = " "
 
     // Add colored sentences of input
  for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i]
    var length = sentence.split(' ').length
    
    var highlight = document.createElement('span')
    highlight.textContent = sentence.trim()
    
    // Change the color
        if (length >= 15) {
        highlight.style.background = '#76BAFF'
      } else if (length >= 5) {
        highlight.style.background = '#7EFF76'
      } else if (length >= 3) {
        highlight.style.background = '#FF7676'
    } else {
        highlight.style.background = '#FFF976'
    }
    
    result.appendChild(highlight)
  }
}
