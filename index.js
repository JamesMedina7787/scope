const express = require('express')
const ejs = require('ejs')
const $ = require('jquery')
var async = require('async')
const drinkMath = require('./drinkMath.js')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const Hangman = require('./Hangman.js')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
var parser = bodyParser.urlencoded({extended:false})
app.use(express.static('public'))

app.get("/", (req, res)=>{
  res.render('page9')
})
app.get("/page1", (req, res)=>{
  res.render('page1')
})

app.post("/page1", parser, (req,res)=>{
  console.log(req.body)
  res.render('page1')
})
app.get("/page3", (req, res)=>{

  var randomNumber = Math.random();
  var len = 10;
  var wordPick = (randomNumber * len) + 1;
  var finishedNumb = Math.floor(wordPick);
  var randomCat = Math.random();
  var catCount = 4;
  var catPick = (randomCat * catCount);
  var finishedCat = Math.floor(catPick);
let part = Hangman.Hangman.words()[finishedCat][finishedNumb]
   var packagee = Hangman.Hangman.words()[finishedCat][0]
  res.render('page3',{packagee, part})
})


app.get("/page5", (req, res)=>{
  res.render('page5')
})

app.post('/page5', parser, function(req, res){
var pizza = {
username:req.body.username,
size:req.body.options,
quantity: req.body.number,
word:"",
mushrooms:"",
onions: "",
pineapples:"",
pepperoni:"",
anchovies:""}
if(req.body.pineapples){
  pizza.pineapples = "visibility:visible"
}
if(req.body.mushrooms){
  pizza.mushrooms="visibility:visible"
}
if(req.body.onions){
  pizza.onions = "visibility:visible"
}
if(req.body.pepperoni){
  pizza.pepperoni = "visibility:visible"
}
if(req.body.anchovies){
  pizza.anchovies="visibility:visible"
}
if (pizza.quantity > 1){
  pizza.word = "pizza's"
}else{pizza.word = "pizza"}
console.log(req.body)
res.render('pizza', {pizza})
});

app.get("/pizza", (req,res)=>{
  res.render("pizza")
})
// app.get("/page6", (req, res)=>{
//   // async.series([
//     // $.go($("#btn").click('https://code.jquery.com/jquery-1.10.2.js',function(){
//     // let name = $("#name").val();
//     // let deathAge = $("#deathAge").val();
//     // let drinks = $("#drinks").val();
//     // let drink = $("#text").val();
//     // let drinkNumb = parseInt(drink) * parseInt(deathAge);
//     // $("#texxt").append("Hi" + name + ". You will have " + drinkNumb + drinks + "in your lifetime.")
// // )
//   res.render('page6')
// })

app.get("/page7", (req, res)=>{
  res.render('page7')
})
app.get("/page9", (req, res)=>{
  res.render('page9')
})

const port = process.env.PORT || 3000
app.listen(port, ()=>
console.log("okay works"))
