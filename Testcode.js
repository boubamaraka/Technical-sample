function calculateAge(birth_year,current_year){
    var age=current_year-birth_year;
    console.log("You are either " +age +" or "+(age-1));

}
calculateAge(2001,2018);
calculateAge(1988,2018);
calculateAge(1988,2016);
function  calculateSupply(age,dailyAmount){
    var MaxAge=75;
    var AmountConsume=(dailyAmount*(365*(MaxAge-age)));
    console.log("You will need " + AmountConsume + " to last you until the ripe old age of " +MaxAge);
}
 calculateSupply(28,1.5);
 calculateSupply(28,2.5);
 calculateSupply(28,3);
function calcCircumfrence(radius){
    Circumfrence=2*Math.PI*radius;
    console.log("The circumference is "+ Circumfrence);

}
calcCircumfrence(2);
calcCircumfrence(7);
function calcArea(radius){
    var area=Math.pow(radius,2)*Math.PI;
    console.log("The area is "+ area);

}
calcArea(4);
function celsiusToFahrenheit(celsius){
  var celsiusToF = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusToF + '°F');
}
celsiusToFahrenheit(3);
function fahrenheitToCelsius(fahrenheit){
  var fahrenheitToC = ((fahrenheit - 32)*5)/9;
   console.log(fahrenheit + '°F is ' + fahrenheitToC + '°C');
}
fahrenheitToCelsius(37.4);
