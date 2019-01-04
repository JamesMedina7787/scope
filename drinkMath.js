const jquery = require('jquery')

let btnClick = function(){
jquery($("#btn").click('https://code.jquery.com/jquery-1.10.2.js',function(){
  let name = $("#name").val();
  let deathAge = $("#deathAge").val();
  let drinks = $("#drinks").val();
  let drink = $("#text").val();
  let drinkNumb = parseInt(drink) * parseInt(deathAge);
  $("#texxt").append("Hi" + name + ". You will have " + drinkNumb + drinks + "in your lifetime.");
}))
}
module.exports = btnClick
