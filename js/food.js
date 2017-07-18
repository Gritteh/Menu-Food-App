$(document).ready(function() {
  var coffee = $(".coffee-yellow");
  var sweet = $(".sweet-orange");
  var food = $(".food-red");
  var drink = $(".drink-purple");
  var hidden = $(".hidden");
  var espressoLine = $(".espresso-line");
  var done = $(".done");

  var sweetLine = $(".sweet-line");
  var sweetHidden = $(".sweet-hidden");

  var foodDone = $(".food-hidden");
  var foodHidden = $(".food-hidden");
  var foodLine = $(".food-line");

  var drinkDone = $(".food-hidden");

  var drinkHidden = $(".drink-hidden");
  var drinkLine = $(".drink-line");

  var bigos = 0;
  var bigo = 0;


  coffee.click(function() {
    var yn = 0;



    coffee.animate({
      height: "40vh",
    }, 250);
    sweet.animate({
      height: "15vh",
      top: "55vh",
      paddingTop: "5vh"
    }, 250);
    food.animate({
      height: "15vh",
      top: "69vh",
      paddingTop: "5vh"
    }, 250);
    drink.animate({
      height: "15vh",
      top: "83vh",
      paddingTop: "5vh"
    }, 250);

    sweetHidden.css("display", "none");
    foodHidden.css("display", "none");
    drinkHidden.css("display", "none");


    hidden.css("display", "inline");
    espressoLine.css("display", "block");
    bigo = 1;

  });




  done.click(function () {
    coffee.animate({
      height: "20vh",
      top: "16vh",
      paddingTop: "8vh"
    }, 250);
    sweet.animate({
      height: "20vh",
      top: "35vh",
      paddingTop: "8vh"
    }, 250);
    food.animate({
      height: "20vh",
      top: "54vh",
      paddingTop: "8vh"
    }, 250);
    drink.animate({
      height: "20vh",
      top: "73vh",
      paddingTop: "8vh"
    }, 250);

    hidden.css("display", "none");
    sweetHidden.css("display", "none");
    foodHidden.css("display", "none");
    drinkHidden.css("display", "none");
  });

  // + and - function for COFFEE
  var espressoCount = 0;
  var espressoPlus = $(".espresso-plus");
  var espressoMinus = $(".espresso-minus");
  var espressoNum = $(".espresso-count");
  espressoPlus.click(function() {
    espressoCount++;
    espressoNum.html(espressoCount);
  });
  espressoMinus.click(function() {
    espressoCount--;
    espressoNum.html(espressoCount);
  });
  var cappuccinoCount = 0;
  var cappuccinoPlus = $(".cappuccino-plus");
  var cappuccinoMinus = $(".cappuccino-minus");
  var cappuccinoNum = $(".cappuccino-count");
cappuccinoPlus.click(function() {
  cappuccinoCount++;
  // console.log(cappuccinoCount);
  cappuccinoNum.html(cappuccinoCount);
});
cappuccinoMinus.click(function() {
  cappuccinoCount--;
  cappuccinoNum.html(cappuccinoCount);
});

var latteCount = 0;
var lattePlus = $(".latte-plus");
var latteMinus = $(".latte-minus");
var latteNum = $(".latte-count");
lattePlus.click(function() {
  latteCount++;
  latteNum.html(latteCount);
});
latteMinus.click(function() {
  latteCount--;
  latteNum.html(latteCount);
});
// END
// sweet expand:
var sweetDone = $(".sweet-hidden");
sweet.click(function() {
  sweetCount = 0;

  sweet.animate({
    height: "40vh",
    top: "30vh"

  }, 250);
  coffee.animate({
    height: "15vh",
    paddingTop: "6vh"
  }, 250);
  sweetCount = 1;
  food.animate({
    height: "15vh",
    top: "69vh",
    paddingTop: "6vh"
  }, 250);
  drink.animate({
    height: "15vh",
    top: "83vh",
    paddingTop: "6vh"
  }, 250);
  hidden.css("display", "none");
  sweetDone.css("display", "inline");
  foodHidden.css("display", "none");
  drinkHidden.css("display", "none");


  // var sweetLine = $(".sweet-line");
  // var sweetHidden = $(".sweet-hidden");
  sweetHidden.css("display", "inline");
  sweetLine.css("display", "block");


});
// SWEET - and + function
var chocolateCount = 0;
var chocolatePlus = $(".chocolate-plus");
var chocolateMinus = $(".chocolate-minus");
var chocolateNum = $(".chocolate-count");
chocolatePlus.click(function() {
  chocolateCount++;
  chocolateNum.html(chocolateCount);
});
chocolateMinus.click(function() {
  chocolateCount--;
  chocolateNum.html(chocolateCount);
});

var hariboCount = 0;
var hariboPlus = $(".haribo-plus");
var hariboMinus = $(".haribo-minus");
var hariboNum = $(".haribo-count");
hariboPlus.click(function() {
hariboCount++;
// console.log(cappuccinoCount);
hariboNum.html(hariboCount);
});
hariboMinus.click(function() {
hariboCount--;
hariboNum.html(hariboCount);
});

var marsCount = 0;
var marsPlus = $(".mars-plus");
var marsMinus = $(".mars-minus");
var marsNum = $(".mars-count");
marsPlus.click(function() {
marsCount++;
marsNum.html(marsCount);
});
marsMinus.click(function() {
marsCount--;
marsNum.html(marsCount);
});
// END

// food expand:
food.click(function() {
  food.animate({
    height: "40vh",
    top: "44vh"
  }, 250);
  coffee.animate({
    height: "15vh",
    paddingTop: "6vh"
  }, 250);

  sweet.animate({
    height: "15vh",
    top: "30vh",
    paddingTop: "6vh"
  }, 250);
  drink.animate({
    height: "15vh",
    top: "83vh",
    paddingTop: "6vh"
  }, 250);
  // var foodDone = $(".food-hidden");
  // var foodLine = $(".food-line");
  hidden.css("display", "none");
  sweetHidden.css("display", "none");
  drinkHidden.css("display", "none");


  foodHidden.css("display", "inline");
  foodLine.css("display", "block");
});

// food + and - function
var soupCount = 0;
var soupPlus = $(".soup-plus");
var soupMinus = $(".soup-minus");
var soupNum = $(".soup-count");
soupPlus.click(function() {
  soupCount++;
  soupNum.html(soupCount);
});
soupMinus.click(function() {
  soupCount--;
  soupNum.html(soupCount);
});
var englishCount = 0;
var englishPlus = $(".english-plus");
var englishMinus = $(".english-minus");
var englishNum = $(".english-count");
englishPlus.click(function() {
englishCount++;
// console.log(cappuccinoCount);
englishNum.html(englishCount);
});
englishMinus.click(function() {
englishCount--;
englishNum.html(englishCount);
});

var spaghettiCount = 0;
var spaghettiPlus = $(".spaghetti-plus");
var spaghettiMinus = $(".spaghetti-minus");
var spaghettiNum = $(".spaghetti-count");
spaghettiPlus.click(function() {
spaghettiCount++;
spaghettiNum.html(spaghettiCount);
});
spaghettiMinus.click(function() {
spaghettiCount--;
spaghettiNum.html(spaghettiCount);
});
// END

// Drink expand:
var drinkDone = $(".drink-hidden");
drink.click(function() {
  coffee.animate({
    height: "15vh",
    paddingTop: "6vh"
  }, 250);

  sweet.animate({
    height: "15vh",
    top: "30vh",
    paddingTop: "6vh"
  }, 250);
  food.animate({
    height: "15vh",
    top: "44vh",
    paddingTop: "6vh"
  }, 250);
  drink.animate({
    height: "40vh",
    top: "58vh"
  }, 250);
  hidden.css("display", "none");
  sweetHidden.css("display", "none");
  foodHidden.css("display", "none");

  drinkHidden.css("display", "inline");
  drinkLine.css("display", "block");

});

// Drink + and - function
var lemonadeCount = 0;
var lemonadePlus = $(".lemonade-plus");
var lemonadeMinus = $(".lemonade-minus");
var lemonadeNum = $(".lemonade-count");
lemonadePlus.click(function() {
  lemonadeCount++;
  lemonadeNum.html(lemonadeCount);
});
lemonadeMinus.click(function() {
  lemonadeCount--;
  lemonadeNum.html(lemonadeCount);
});
var juiceCount = 0;
var juicePlus = $(".juice-plus");
var juiceMinus = $(".juice-minus");
var juiceNum = $(".juice-count");
juicePlus.click(function() {
juiceCount++;
// console.log(cappuccinoCount);
juiceNum.html(juiceCount);
});
juiceMinus.click(function() {
juiceCount--;
juiceNum.html(juiceCount);
});

var wineCount = 0;
var winePlus = $(".wine-plus");
var wineMinus = $(".wine-minus");
var wineNum = $(".wine-count");
winePlus.click(function() {
wineCount++;
wineNum.html(wineCount);
});
wineMinus.click(function() {
wineCount--;
wineNum.html(wineCount);
});
// END

// items counter total :
var counter = $(".items");
// cappuccinoNum
// latteNum
// espressoNum
var totalNum;

var button = $("button");
button.click(function() {
  totalNum = cappuccinoCount + latteCount + espressoCount + chocolateCount + hariboCount + marsCount + soupCount + englishCount + spaghettiCount + lemonadeCount + juiceCount + wineCount;
  counter.html(totalNum + " Items");
});






// doc ready end below
});
