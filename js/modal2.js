const feedback1 = document.querySelector(".feedback"); 
const link = document.querySelector(".write-us");
const closer = document.querySelector (".feedback-but");
const name = feedback.querySelector ("[name=login-name]");
const form = feedback.querySelector ("form");
const pass = feedback.querySelector ("[name=main-mail]");


link.addEventListener ("click", function (evt){
  evt.preventDefault();
  feedback.classList.remove("modal-none");
  name.focus();
    console.log ("Открыли форму");

})


closer.addEventListener ("click", function (evt){
  evt.preventDefault();
  feedback.classList.add("modal-none");
})
 
form.addEventListener("submit", function (evt) {
    evt.preventDefault();

  console.log (name.value);
    console.log ( pass.value);});
























