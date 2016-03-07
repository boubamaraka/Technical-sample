
//calculate age
function calculateAge(){
    //get the birth date from input field
    var birth_year=document.getElementById("birth_year").value;
    //generate the date
    var date = new Date();
    var message=" ";
    //get only the year
    var current_year = date.getFullYear();
    //check if input field not empty
    if(birth_year ==""){
      message="your input field is empty"
    }
    else if((birth_year>current_year)||(birth_year<1900)){
        message="Please enter a good format of year between 1900-"+current_year;
    }
    else {
      var age=current_year-birth_year;
      message="You are either " +age +" or "+(age-1);
    }
    //write to the DOM the message
    document.getElementById("yourAge").innerHTML =message;
    console.log(message);

}
//calculate life supply needed
function  calculateSupply(){
    //get age and dailyAmount from input field
    var age=document.getElementById("Age").value;
    var dailyAmount=document.getElementById("daily").value;
    var message=" ";
    var MaxAge=75;
    var AmountConsume;
    //check if inputs field not empty
    if((age=="")||(dailyAmount=="")){
        message="all your input or one of your input field is empty"
    }
    else if((age<=0)&&(dailyAmount<=0)){
      message="please enter positive value for both";
    }
    else{

        AmountConsume=(dailyAmount*(365*(MaxAge-age)));
        AmountConsume=Math.round(AmountConsume);
        message="You will need " + AmountConsume + " to last you until the ripe old age of " +MaxAge;
      }
    //write to the DOM the message
    document.getElementById("lifetime").innerHTML =message;
    console.log(message);
}

//calculate calcCircumfrence of a cercle
function calcCircumfrence(){
    var message;
    //get the radius from input field
    var radius=document.getElementById("radius").value;
    //check if input field not empty
    if(radius==""){
        message="your input field is empty"
    }
    else{
        Circumfrence=2*Math.PI*radius;
        message="The circumference is "+ Circumfrence;
  }
    //write to the DOM the message
    document.getElementById("circumference").innerHTML =message;
    console.log(message);
}
//calculate Area  of a cercle

function calcArea(){
    var message;
    //get the radius from input field
    var radius=document.getElementById("radius").value;
    //check if input field not empty
    if(radius==""){
        message="your input field is empty"
    }
    else{
      var area=Math.pow(radius,2)*Math.PI;
      message="The area is "+ area;
  }
    //write to the DOM the message
    document.getElementById("area").innerHTML =message;
    console.log(message);

}
//Convert celsius to fahrenheit
function celsiusToFahrenheit(){
  var message;
  //get the temperature from input field
  var celsius=document.getElementById("temp").value;
  //check if input field not empty
  if(celsius==""){
      message="your input field is empty"
  }
  else{
    var celsiusToF = (celsius*9)/5 + 32;
    message=celsius + '°C is ' + celsiusToF + '°F';
}
  //write to the DOM the message
  document.getElementById("celsius").innerHTML =message;
  console.log(message);
}
//Convert  fahrenheit to celsius
function fahrenheitToCelsius(){
  var message;
  //get the fahrenheit from input field
  var fahrenheit=document.getElementById("temp").value;
  //check if input field not empty
  if(fahrenheit==""){
      message="your input field is empty"
  }
  else{
    var fahrenheitToC = ((fahrenheit - 32)*5)/9;
    message=fahrenheit + '°F is ' + fahrenheitToC + '°C';
}
  //write to the DOM the message
  document.getElementById("fahrenheit").innerHTML =message;
  console.log(message);

}
