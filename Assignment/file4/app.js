var yourName = prompt("Enter Your Full Name");
alert("Welcome, "+yourName);
var number = prompt("Enter Number To Show Multiplication Table which will be showed to you at the end.");
if(number === null){
    document.write("5 X 1 = "+5*1);
    document.write("<br/>");
    document.write("5 X 2 = "+5*2);
    document.write("<br/>");
    document.write("5 X 3 = "+5*3);
    document.write("<br/>");
    document.write("5 X 4 = "+5*4);
    document.write("<br/>");
    document.write("5 X 5 = "+5*5);
    document.write("<br/>");
    document.write("5 X 6 = "+5*6);
    document.write("<br/>");
    document.write("5 X 7 = "+5*7);
    document.write("<br/>");
    document.write("5 X 8 = "+5*8);
    document.write("<br/>");
    document.write("5 X 9 = "+5*9);
    document.write("<br/>");
    document.write("5 X 10 = "+5*10);
    document.write("<br/>");
}
else{
    document.write(number+" X 1 = "+number*1);
    document.write("<br/>");
    document.write(number+" X 2 = "+number*2);
    document.write("<br/>");
    document.write(number+" X 3 = "+number*3);
    document.write("<br/>");
    document.write(number+" X 4 = "+number*4);
    document.write("<br/>");
    document.write(number+" X 5 = "+number*5);
    document.write("<br/>");
    document.write(number+" X 6 = "+number*6);
    document.write("<br/>");
    document.write(number+" X 7 = "+number*7);
    document.write("<br/>");
    document.write(number+" X 8 = "+number*8);
    document.write("<br/>");
    document.write(number+" X 9 = "+number*9);
    document.write("<br/>");
    document.write(number+" X 10 = "+number*10);
    document.write("<br/>");
}
var yourCity = prompt("Please Enter Your City.");
if(yourCity === "karachi" || yourCity === "Karachi" || yourCity === "KARACHI"){
    alert("Welcome To City Of Lights");
}
var gender = prompt("What Is Your Gender");
if(gender === "Male" || gender === "male" || gender === "MALE"){
    alert("Good Morning Sir");
}
else{
    alert("Good Morning  Ma ’ am");
}
var colour  = prompt("Enter The Colour Of Traffic Light");
if(colour === "red" || colour === "Red" || colour === "RED"){
    alert("vehicles must stop");
}
else if(colour === "yellow" || colour === "Yellow" || colour === "YELLOW"){
    alert("vehicles should get ready to move");
}
else if(colour === "green" || colour === "Green" || colour === "GREEN"){
    alert("vehicles can move now");
}
var sub1 = prompt("Enter Marks Of First Subject");
var subject1 = parseInt(sub1);
document.write("<br/>");
var sub2 = prompt("Enter Marks Of Secondt Subject");
var subject2 = parseInt(sub2);
document.write("<br/>");
var sub3 = prompt("Enter Marks Of Third Subject");
var subject3 = parseInt(sub3);
document.write("<br/>");
var total = subject1 + subject2 + subject3;
var percentage = (total/300)*100;

document.write("Total Marks: 300");
document.write("<br/>");
document.write("Obtained Marks: "+total);
document.write("<br/>");
document.write("Percentage Is: "+percentage);
document.write("<br/>");
if(percentage>=80){
    document.write("Grade: A-one");
    document.write("<br/>");
    document.write("Remarks: Excellent");
}
else if(percentage>=70){
    document.write("Grade: A");
    document.write("<br/>");
    document.write("Remarks: Good");
}
else if(percentage>=60){
    document.write("Grade: B");
    document.write("<br/>");
    document.write("Remarks: You Need To Improve");
}
else{
    document.write("Grade: Fail");
    document.write("<br/>");
    document.write("Remarks: Sorry");
}
