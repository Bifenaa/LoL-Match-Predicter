document.getElementById('button').addEventListener('click', function() {
  function shake(){
    var answers=["Yes", "No", "Most likely not", "Most likely yes!", "100%...no", "100%...yes", "Dude, i really don't know", "Possibily", "ask Zack", "sure thing bud!", "Do you really want to know the answer?", "Classified", "What did tech line say?"]
    var rand1 = Math.floor(Math.random() * answers.length);
    return answers[rand1];
  }
  var result = shake(); // Assign the result of shake() to result
  document.getElementById('result').innerText = result;
});
