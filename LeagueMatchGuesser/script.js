document.getElementById('button').addEventListener('click', function() {
  function shake(){
    var answers=[
    "Yes", 
    "No", 
    "Most likely not", 
    "Most likely yes!", 
    "100%...no", 
    "100%...yes", 
    "Dude, i really don't know", 
    "Perhaps", 
    "Victory is yours!",
    "The Baron blesses your endeavors!",
    "Your champion will reign supreme!",
    "The Nexus will shine bright for you!",
    "Your team will emerge victorious!",
    "The enemy Nexus will fall before you!",
    "Your strategy will lead to triumph!",
    "The power of the elements is with you!",
    "Your allies will stand strong by your side!",
    "The enemy will tremble before your might!",
    "Your ultimate will turn the tide of battle!",
    "The summoner's rift will be yours to command!",
    "Your champion's abilities will shine!",
    "The enemy's defenses will crumble!",
    "Your team's synergy will be unstoppable!",
    "The League of Legends will crown you champion!",
    "Your opponents will be outmaneuvered!",
    "The game will be yours to win!",
    "Your champion's strengths will prevail!",
    "The enemy's weaknesses will be exposed!",
    "Your team's communication will be flawless!",
    "The Baron Nashor will grant you victory!",
    "Your strategy will outsmart the enemy!",
    "The elements of nature will aid you!",
    "Your champion will be the MVP!",
    "The enemy's ambush will catch you off guard!",
    "Your champion's weaknesses will be exploited!",
    "The Nexus will remain out of reach!",
    "Your team's coordination will fail!",
    "The enemy's ultimate will destroy you!",
    "Your strategy will be outmaneuvered!",
    "The power of the elements will turn against you!",
    "Your allies will abandon you in battle!",
    "The enemy's defenses will be impenetrable!",
    "Your champion's abilities will be countered!",
    "The summoner's rift will be a battleground of despair!",
    "Your team's mistakes will be costly!",
    "The enemy's strengths will overwhelm you!",
    "Your ultimate will be interrupted!",
    "The League of Legends will deny you victory!",
    "Your opponents will outplay you!",
    "The game will slip through your fingers!",
    "Your champion's flaws will be exposed!",
    "The enemy's strategy will outsmart you!",
    "The elements of nature will hinder you!",
    "Your team's communication will be disrupted!",
    "The Baron Nashor will deny you his blessing!",
    "Your strategy will be predictable!",
    "The enemy's ambush will be deadly!",
    "Your champion will fall in battle!",
    ]
    var rand1 = Math.floor(Math.random() * answers.length);
    return answers[rand1];
  }
  var result = shake(); // Assign the result of shake() to result
  document.getElementById('result').innerText = result;
});
