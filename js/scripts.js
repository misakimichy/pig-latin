$(document).ready(function(){
  var vowels = ["a", "i", "o", "u", "e"];
  var special = "q";

  $("form").submit(function(event){
    event.preventDefault();
    var input = $("input").val().split(' ');
    
    console.log(input);
    for(var i = 0; i < input.length; i++) {
      for(var j = 0; j < vowels.length; j++) {
        if(input[i].charAt(0) === vowels[j]) {
          // console.log(input[i] + 'way');
        } else if (input[i].includes(special) === true){
          for (let letter of input[i]) {
            if(letter === special) {
              // Find q index
              var qIndex = input[i].indexOf(letter);
              var qu = input[i].slice(qIndex, qIndex + 2);
              var restOfQu = input[i].slice(qIndex + 2, input[i].length);
              console.log(restOfQu + qu + 'ay');
            }
          }
        } else {
            for (let letter of input[i]){
              if(letter === vowels[j]) {
                // index number of first vowel in input[i]
                var firstVowelIndex = input[i].indexOf(letter);
                var beforeVowel = input[i].slice(0, firstVowelIndex).toLowerCase();
                var restLetters = input[i].slice(firstVowelIndex, input[i].length);
                // console.log(restLetters + beforeVowel + 'ay');
                }
              }
            };
          }
        }
      });
    });
