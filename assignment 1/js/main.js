
const priceInSeason = "Price in Season - ";
const priceOutOfSeason = "Price Out Of Season - ";
const fruitFact = "Fruit Fact! - ";
const growthPeriod = "Growth Period - ";




const banana = {name:"Banana", priceInSeason:6.1, priceOutOfSeason:7, fact:"Bananas can float on water!", season:"Novemer-March"};
const apple = {name:"Apple", priceInSeason:4.7, priceOutOfSeason:6.2, fact:"Apple Trees take 4-5 years to fruit", season:"February-June"};
const orange = {name:"Orange", priceInSeason:7.6, priceOutOfSeason:8.9, fact:"There are over 600 varieties of Orange", season:"May-Novemer"};
const watermelon = {name:"Watermelon", priceInSeason:9.5, priceOutOfSeason:11.9, fact:"Watermelons are both a fruit and a vegetable", season:"December-May"};
const grapes = {name:"Grapes", priceInSeason:10, priceOutOfSeason:16.4, fact:"Grapes have been around for 65 million years!", season:"Novemer-May"};
const strawberry = {name:"Strawberry", priceInSeason:3.5, priceOutOfSeason:5, fact:"Strawberries are the first fruit to ripen each spring", season:"October-June"};


function handleBanana()
{
  document.getElementById('in-season').innerHTML = priceInSeason + banana.priceInSeason;
  document.getElementById('out-of-season').innerHTML = priceOutOfSeason + banana.priceOutOfSeason;
  document.getElementById('panel-fact').innerHTML = fruitFact + banana.fact;
  document.getElementById('growth-season').innerHTML = growthPeriod + banana.season;
  document.getElementById('fruit-panel-name').innerHTML = banana.name;
}

function handleApple()
{
  document.getElementById('in-season').innerHTML = priceInSeason + apple.priceInSeason;
  document.getElementById('out-of-season').innerHTML = priceOutOfSeason + apple.priceOutOfSeason;
  document.getElementById('panel-fact').innerHTML = fruitFact + apple.fact;
  document.getElementById('growth-season').innerHTML = growthPeriod + apple.season;
  document.getElementById('fruit-panel-name').innerHTML = apple.name;
}

function handleGrapes()
{
  document.getElementById('in-season').innerHTML = priceInSeason + grapes.priceInSeason;
  document.getElementById('out-of-season').innerHTML = priceOutOfSeason + grapes.priceOutOfSeason;
  document.getElementById('panel-fact').innerHTML = fruitFact + grapes.fact;
  document.getElementById('growth-season').innerHTML = growthPeriod + grapes.season;
  document.getElementById('fruit-panel-name').innerHTML = grapes.name;
}

function handleOrange()
{
  document.getElementById('in-season').innerHTML = priceInSeason + orange.priceInSeason;
  document.getElementById('out-of-season').innerHTML = priceOutOfSeason + orange.priceOutOfSeason;
  document.getElementById('panel-fact').innerHTML = fruitFact + orange.fact;
  document.getElementById('growth-season').innerHTML = growthPeriod + orange.season;
  document.getElementById('fruit-panel-name').innerHTML = orange.name;
}

function handleWatermelon()
{
  document.getElementById('in-season').innerHTML = priceInSeason + watermelon.priceInSeason;
  document.getElementById('out-of-season').innerHTML = priceOutOfSeason + watermelon.priceOutOfSeason;
  document.getElementById('panel-fact').innerHTML = fruitFact + watermelon.fact;
  document.getElementById('growth-season').innerHTML = growthPeriod + watermelon.season;
  document.getElementById('fruit-panel-name').innerHTML = watermelon.name;
}

function handleStrawberry()
{
  document.getElementById('in-season').innerHTML = priceInSeason + strawberry.priceInSeason;
  document.getElementById('out-of-season').innerHTML = priceOutOfSeason + strawberry.priceOutOfSeason;
  document.getElementById('panel-fact').innerHTML = fruitFact + strawberry.fact;
  document.getElementById('growth-season').innerHTML = growthPeriod + strawberry.season;
  document.getElementById('fruit-panel-name').innerHTML = strawberry.name;
}
