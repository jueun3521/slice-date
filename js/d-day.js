var now = new Date();
var firstDay = new Date("2022-08-19"); //처음 만난 날짜 정보
var toNow = now.getTime(); // 오늘 날짜를 밀리 초로 전환
var toFirst = firstDay.getTime(); //처음 만난 날을 밀리 초로 전환
var passedTime = toNow - toFirst; //처음 만난 날 - 오늘 날짜 = (밀리초)
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24)); //밀리초를 일로 변환한 후 반올림(라운드로)

document.querySelector("#accent").innerHTML = passedDay + "일"