$(document).ready(function(){
  var vowels = ["a", "i", "o", "u", "e"];
  var special = "q";

  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("input").val().split('.').join('').split(' ');

    for(var i = 0; i < input.length; i++) {
      if(vowels.includes(input[i].charAt(0))) {
          $(".results").append("<span>" + input[i] + "way </span> ");
      } else if (input[i].includes(special) === true) {
        for (let letter of input[i]) {
          if(letter === special) {
            // Find q index
            var qIndex = input[i].indexOf(letter);
            var qu = input[i].slice(qIndex, qIndex + 2);
            var restOfQu = input[i].slice(qIndex + 2, input[i].length);
            $(".results").append("<span>" + restOfQu + qu + "ay </span> ");
          }
        }
      } else {
        for (let letter of input[i]){
          if(vowels.includes(letter)) {
            // index number of first vowel in input[i]
            var firstVowelIndex = input[i].indexOf(letter);
            var beforeVowel = input[i].slice(0, firstVowelIndex).toLowerCase();
            var restLetters = input[i].slice(firstVowelIndex, input[i].length);
            $(".results").append("<span>" + restLetters + beforeVowel + "ay </span> ");
            break;
          }
        }
        $(".results").show();
      }
    }
  });
});
