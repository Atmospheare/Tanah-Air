var slideIndex = 1;
var quizIndex = 1;
showDivs(slideIndex);
showQuiz(quizIndex)

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function plusQuiz(n) {
  showQuiz(quizIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("text-chap");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function showQuiz(n) {
  var i;
  var x = document.getElementsByClassName("quiz-body");
  if (n > x.length) {quizIndex = 1}
  if (n < 1) {quizIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[quizIndex-1].style.display = "block";
}

function validateForm(form){

  if (form.name.value == ""){
  alert("Username must be filled!");
  form.name.focus();
  return (false);
}

usernameValidate=/^[a-zA-Z0-9\_\-]{9,100}$/;
if (!usernameValidate.test(form.name.value)){
    alert('Username must be a minimum of 9 characters!');
    form.name.focus();
    return false;
}

emailValidate=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailValidate.test(form.email.value)){
  alert('Email is invalid!');
  form.email.focus();
  return false;
}

if (form.password.value == ""){
  alert("Password must be filled!");
  form.password.focus();
  return false;
}

if (form.confPassword.value == ""){
  alert("Password Confirmation is still empty!");
  form.confPassword.focus();
  return false;
}

return true;
}

function checkPass(){
  var pass1 = document.getElementById('pass1');
  var pass2 = document.getElementById('pass2');
  var message = document.getElementById('confirmMessage');
  var validColor = "green";
  var invalidColor = "red";

  if(pass1.value == pass2.value){
      pass2.style.backgroundColor = validColor;
      message.style.color = validColor;
      message.innerHTML = "Password match!"
  }else{
      pass2.style.backgroundColor = invalidColor;
      message.style.color = invalidColor;
      message.innerHTML = "Password does not match!";
  }
}

function validateContact(form){
    if (form.name.value == ""){
      alert("Name must be filled!");
      form.name.focus();
      return (false);
    }
  
    emailValidate=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailValidate.test(form.email.value)){
      alert('Email is invalid!');
      form.email.focus();
      return false;
    }

    if (form.address.value == ""){
      alert("Address must be filled!");
      form.address.focus();
      return (false);
    }

    if (form.feedback.value == ""){
      alert("Feedback must be filled!");
      form.feedback.focus();
      return (false);
    }
}

function changeImage(ImageID,ImageFileName) {

}
function changeImage(ImageID,ImageFileName) {
document.getElementById(ImageID).src = ImageFileName;
}