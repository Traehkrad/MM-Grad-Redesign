$(document).foundation()

var today = new Date();

var hourNow = today.getHours();
var greeting;

if ((hourNow >=0)&& (hourNow <=4)){
  greeting = 'Late night, take rest!';
}else if ((hourNow >=4)&& (hourNow <=12)){
  greeting = 'Good Morning!';
}else if ((hourNow >=12)&& (hourNow <=13)){
  greeting = 'Lunch time, take a break!';
}else if ((hourNow >=13)&& (hourNow <=17)){
  greeting = 'Good Afternoon!';
}else if ((hourNow >=17)&& (hourNow <=18)){
  greeting = 'Good Evening!';
}else if ((hourNow >=18)&& (hourNow <=20)){
  greeting = 'Time to enjoy the dinner!';
}else if ((hourNow >=20)&& (hourNow <=22)){
  greeting = 'Good Evening!';
}else {
  greeting = 'Time to go bed!';
}
// if (hourNow >18){
//   greeting = 'Good Evening!';
// }else if (hourNow >12){
//   greeting = 'Good Afternoon!';
// }else if (hourNow >0){
//   greeting = 'Good Morning!';
// }else {
//   greeting ='Welcome!';
// }
document.write(greeting).style.color = "blue";
