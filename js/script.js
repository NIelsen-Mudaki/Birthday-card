var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saurday'];
var akanNameMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var akanNameFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
var male = document.getElementById('male');
var female = document.getElementById('female');
var cc , yy, mm, dd;
function getDay(cc, yy, mm, dd){
    return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
}
dd = document.getElementById('DoB');

mm = document.getElementById('MoB');

cc, yy = document.getElementById('YoB');

getDay(19, 98, 09, 04)
if(male = dayOfWeek[0]) {
    alert('Your Akan name is ' + akanNameMale[0] );
} else if(male = dayOfWeek[1]){
    alert('Your Akan name is ' + akanNameMale[1]);
} else if(male = dayOfWeek[2]){
    alert('Your Akan name is ' + akanNameMale[2]);
} else if(male = dayOfWeek[3]){
    alert('Your Akan name is ' + akanNameMale[3]);
} else if(male = dayOfWeek[4]){
    alert('Your Akan name is ' + akanNameMale[4]);
} else if(male = dayOfWeek[5]){
    alert('Your Akan name is ' + akanNameMale[5]);
} else if(male = dayOfWeek[6]){
    alert('Your Akan name is ' + akanNameMale[6]);
} else{
    alert("We don't have one for you. Sorry.")
}
if(female = dayOfWeek[0]) {
    alert('Your Akan name is ' + akanNameFemale[0] );
} else if(female = dayOfWeek[1]){
    alert('Your Akan name is ' + akanNameFemale[1]);
} else if(female = dayOfWeek[2]){
    alert('Your Akan name is ' + akanNameFemale[2]);
} else if(female = dayOfWeek[3]){
    alert('Your Akan name is ' + akanNameFemale[3]);
} else if(female = dayOfWeek[4]){
    alert('Your Akan name is ' + akanNameFemale[4]);
} else if(female = dayOfWeek[5]){
    alert('Your Akan name is ' + akanNameFemale[5]);
} else if(female = dayOfWeek[6]){
    alert('Your Akan name is ' + akanNameFemale[6]);
} else{
    alert("We don't have one for you. Sorry.")
}