$(document).ready(function(){
  var vowels = ["a", "i", "o", "u", "e"];
  var speicial = "q";

  $("form").submit(function(event){
    event.preventDefault();
    var input = $("input").val().split(' ');
    console.log(input);
    for(var i = 0; i < input.length; i++) {
      for(var j = 0; j < vowels.length; j++) {
        if(input[i].charAt(0) === vowels[j]) {
          console.log(input[i] + 'way');
        } else {
            for (let letter of input[i]){
              if(letter === vowels[j]) {
                // index number of first vowel in input[i]
                var firstVowel = input[i].indexOf(letter);
                var beforeVowel = input[i].slice(0, firstVowel).toLowerCase();
                var restLetters = input[i].slice(firstVowel, input[i].length);
                console.log(restLetters + beforeVowel + 'ey');
                }
              }
            };
          }
        }
      });
    });
