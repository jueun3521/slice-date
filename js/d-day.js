var now = new Date();
var firstDay = new Date("2022-08-19"); //처음 만난 날짜 정보
var toNow = now.getTime(); // 오늘 날짜를 밀리 초로 전환
var toFirst = firstDay.getTime(); //처음 만난 날을 밀리 초로 전환
var passedTime = toNow - toFirst; //처음 만난 날 - 오늘 날짜 = (밀리초)
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24)); //밀리초를 일로 변환한 후 반올림(라운드로)

document.querySelector("#accent").innerHTML = `${passedDay + 1}일`

clacDate(100);
clacDate(200);
clacDate(365);
clacDate(500);

function clacDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24); //처음 만난 날 + 밀리초로 바꾼 100
    var someday = new Date(future); //future 값을 사용해서 date 객체의 인스턴스를 만듦
    var year = someday.getFullYear(); //"연도"를 가지고 와서 year변수에 저장
    var month = someday.getMonth() + 1; //"월"을 가지고 와서 month변수에 저장
    var date = someday.getDate(); //"일"을 가지고 와서 date변수에 저장

    document.querySelector("#date" + days)
    .innerText = `${year}년 ${month}월 ${date}일`;
}
