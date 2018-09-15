$(document).ready(function(){
  $('form#userInput').submit(function(event){
    event.preventDefault();
    var side1 = parseInt($('input#side1').val());
    var side2= parseInt($('input#side2').val());
    var side3= parseInt($('input#side3').val());

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $('div.noshow').slideUp();
      $('div#NaT').slideDown();
    } else if (side1 != side2 && side2 != side3 && side3 != side1){
      $('div.noshow').slideUp();
      $('div#scalene').slideDown();
    } else if ((side1 === side2 && side1 != side3) || (side1 === side3 && side2 != side1) || (side2 === side3 && side1 != side3)) {
      $('div.noshow').slideUp();
      $('div#isosceles').slideDown();
    } else if (side1 === side2 && side2 === side3 && side3 === side1) {
      $('div.noshow').slideUp();
      $('div#equilateral').slideDown();
    } else {
      $('div.noshow').slideUp();
      $('div#NaT').slideDown();
    }
  });
});
