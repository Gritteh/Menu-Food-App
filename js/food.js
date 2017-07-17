$(document).ready(function() {
  var coffee = $(".coffee-yellow");
  var sweet = $(".sweet-orange");
  var food = $(".food-red");
  var drink = $(".drink-purple");
  var hidden = $(".hidden");
  var espressoLine = $(".espresso-line");
  var done = $(".done");

  var bigos = 0;
  var bigo = 0;


  coffee.click(function() {
    var yn = 0;
    if (bigo === 0) {


      coffee.animate({
        height: "40vh",
      }, 500);
      sweet.animate({
        height: "15vh",
        top: "55vh",
        paddingTop: "5vh"
      }, 500);
      food.animate({
        height: "15vh",
        top: "69vh",
        paddingTop: "5vh"
      }, 500);
      drink.animate({
        height: "15vh",
        top: "83vh",
        paddingTop: "5vh"
      }, 500);

      hidden.css("display", "inline");
      espressoLine.css("display", "block");
      bigo = 1;
    } else if (bigo === 1) {
      bigo = 0;
    }
  });




  done.click(function () {
      coffee.animate({
        height: "20vh",
        top: "16vh",
        paddingTop: "8vh"
      }, 500);
      sweet.animate({
        height: "20vh",
        top: "35vh",
        paddingTop: "8vh"
      }, 500);
      food.animate({
        height: "20vh",
        top: "54vh",
        paddingTop: "8vh"
      }, 500);
      drink.animate({
        height: "20vh",
        top: "73vh",
        paddingTop: "8vh"
      }, 500);
      hidden.css("display", "none");
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
  if (sweetCount === 0) {
    sweet.animate({
      height: "40vh",
      top: "30vh"

    }, 500);
    coffee.animate({
      height: "15vh",
      paddingTop: "6vh"
    }, 500);
    sweetCount = 1;
    food.animate({
      height: "15vh",
      top: "69vh",
      paddingTop: "6vh"
    }, 500);
    drink.animate({
      height: "15vh",
      top: "83vh",
      paddingTop: "6vh"
    }, 500);
    hidden.css("display", "none");
    sweetDone.css("display", "inline");

  }

});

// food expand:
var foodDone = $(".food-hidden");
food.click(function() {
  food.animate({
    height: "40vh",
    top: "44vh"
  }, 500);
  coffee.animate({
    height: "15vh",
    paddingTop: "6vh"
  }, 500);

  sweet.animate({
    height: "15vh",
    top: "30vh",
    paddingTop: "6vh"
  }, 500);
  drink.animate({
    height: "15vh",
    top: "83vh",
    paddingTop: "6vh"
  }, 500);
  hidden.css("display", "none");
  foodDone.css("display", "inline");



});
// Drink expand:
var drinkDone = $(".drink-hidden");
drink.click(function() {
  coffee.animate({
    height: "15vh",
    paddingTop: "6vh"
  }, 500);

  sweet.animate({
    height: "15vh",
    top: "30vh",
    paddingTop: "6vh"
  }, 500);
  food.animate({
    height: "15vh",
    top: "44vh",
    paddingTop: "6vh"
  }, 500);
  drink.animate({
    height: "40vh",
    top: "58vh"
  }, 500);
  hidden.css("display", "none");
  drinkDone.css("display", "inline");
});

// doc ready end below
});
