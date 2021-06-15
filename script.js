function dropmenu() {
  let menu = document.getElementById("menu");
  menu.style.display = "block";
  document.getElementById("menu-btn").style.display = "none";
  document.getElementById("logo-bookmark").style.display = "none";
}
let cross = document.getElementById("closeicon");
cross.addEventListener("click", function () {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menu-btn").style.display = "block";
  document.getElementById("logo-bookmark").style.display = "block";
});

function showans(x) {
  let arrdwn = document.getElementById(x);
  let box = arrdwn.parentNode;
  let mainbox = box.parentNode;
  box.children[1].style.display = "none";
  box.children[2].style.display = "block";
  let ans = mainbox.children[1];
  ans.style.display = "block";
}
function hideans(x) {
  let arrdwn = document.getElementById(x);
  let box = arrdwn.parentNode;
  let mainbox = box.parentNode;
  box.children[1].style.display = "block";
  box.children[2].style.display = "none";
  let ans = mainbox.children[1];
  ans.style.display = "none";
}

var expression =
  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
function validation(value) {
  return expression.test(String(value).toLowerCase());
}

function mailcheck() {
  let mail = document.getElementById("mail-inp").value;
  let x = validation(mail);
  console.log(x);
  if (x == true) {
    if ((document.getElementById("error").style.display = "block")) {
      document.getElementById("error").style.display = "none";
      document.getElementById("texterror").style.display = "none";
      document.getElementById("mail-id").style.backgroundColor = "white";
      document.getElementById("mail-id").style.borderColor = "white";
    }
    document.getElementById("mail-inp").value = "";
    alert("your response have been submitted sucessfully ");
  } else if (x == false) {
    document.getElementById("error").style.display = "block";
    document.getElementById("texterror").style.display = "block";
    document.getElementById("mail-id").style.backgroundColor =
      "rgb(250, 87, 87)";
    document.getElementById("mail-id").style.borderColor = "rgb(250, 87, 87)";
  } else {
    console.log("error");
  }
}

function showfb() {
  let fb = document.getElementById("fbf");
  fb.setAttribute("src", "svg/iconfb.svg");
}
function hidefb() {
  let fb = document.getElementById("fbf");
  fb.setAttribute("src", "svg/icon-facebook.svg");
}
function showtw() {
  let tw = document.getElementById("twf");
  tw.setAttribute("src", "svg/icontwitter.svg");
}
function hidetw() {
  let tw = document.getElementById("twf");
  tw.setAttribute("src", "svg/icon-twitter.svg");
}

function showtab2(){
    let btn2 = document.getElementById('btnf-2');
    let btn1 = document.getElementById('btnf-1');
    let btn3 = document.getElementById('btnf-3');
    btn1.style.borderWidth = '0px';
    btn3.style.borderWidth = '0px';
    btn2.style.borderBottomWidth = '3px';
    btn2.style.borderBottomStyle = 'solid';
    btn2.style.borderBottomColor = 'rgb(250, 87, 87)';
    document.getElementById('tab-section1').style.display = 'none';
    document.getElementById('tab-section3').style.display = 'none';
    let x = screen.width;
    if(x > 683){
        document.getElementById('tab-section2').style.display = 'flex';
    }
    else if(x <= 683){
        document.getElementById('tab-section2').style.display = 'flex';
        document.getElementById('tab-section2').style.flexDirection = 'flex';
    }
}
function showtab3(){
    let btn3 = document.getElementById('btnf-3');
    let btn1 = document.getElementById('btnf-1');
    let btn2 = document.getElementById('btnf-2');
    btn1.style.borderWidth = '0px';
    btn2.style.borderWidth = '0px';
    btn3.style.borderBottomWidth = '3px';
    btn3.style.borderBottomStyle = 'solid';
    btn3.style.borderBottomColor = 'rgb(250, 87, 87)';
    document.getElementById('tab-section1').style.display = 'none';
    document.getElementById('tab-section2').style.display = 'none';
    let x = screen.width;
    if(x > 683){
        document.getElementById('tab-section3').style.display = 'flex';
    }
    else if(x <= 683){
        document.getElementById('tab-section3').style.display = 'flex';
        document.getElementById('tab-section3').style.flexDirection = 'flex';
    }
}
function showtab1(){
    let btn3 = document.getElementById('btnf-3');
    let btn1 = document.getElementById('btnf-1');
    let btn2 = document.getElementById('btnf-2');
    btn3.style.borderWidth = '0px';
    btn2.style.borderWidth = '0px';
    btn1.style.borderBottomWidth = '3px';
    btn1.style.borderBottomStyle = 'solid';
    btn1.style.borderBottomColor = 'rgb(250, 87, 87)';
    document.getElementById('tab-section3').style.display = 'none';
    document.getElementById('tab-section2').style.display = 'none';
    let x = screen.width;
    if(x > 683){
        document.getElementById('tab-section1').style.display = 'flex';
    }
    else if(x <= 683){
        document.getElementById('tab-section1').style.display = 'flex';
        document.getElementById('tab-section1').style.flexDirection = 'flex';
    }
}