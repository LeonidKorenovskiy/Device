const feedback = document.querySelector(".feedback"); 
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
    console.log ( pass.value);                  
                      }
                     
                     
                     );

const buttonone = document.querySelector (".btn-one");
const buttonty  = document.querySelector (".btn-ty") ;
const buttonfry  = document.querySelector (".btn-fry");
const info = document.querySelector (".delivery-info");
const warranty = document.querySelector(".warranty-info");
const credit = document.querySelector(".credit-info");




buttonone.addEventListener("click", function(){;
info.classList.remove("visually-hidden");                                   console.log ("Нажата конопка доставка");
warranty.classList.add("visually-hidden"); 
credit.classList.add("visually-hidden");                                              
                                              
                                              
                                              } )


buttonty.addEventListener("click", function(){;
warranty.classList.remove("visually-hidden"); 
info.classList.add("visually-hidden"); 
credit.classList.add("visually-hidden");                                              
 console.log ("Нажата конопка гарантия");           
                                         
                                              
                                              
                                              } )

buttonfry.addEventListener("click", function(){;
credit.classList.remove("visually-hidden");
 warranty.classList.add("visually-hidden"); 
info.classList.add("visually-hidden");
  
})


const contone = document.querySelector(".container-one");
const constty = document.querySelector(".container-ty ");
const constfry = document.querySelector(".container-fry");
const impone = document.querySelector(".imput-headerone");
const impoty = document.querySelector(".imput-headerty");
const impofry = document.querySelector(".imput-headerfry");




impone.addEventListener("click", function (){
contone.classList.remove("visually-hidden");
constty.classList.add("visually-hidden"); 
constfry.classList.add("visually-hidden");
  
}      )

impoty.addEventListener("click", function (){
 constty.classList.remove("visually-hidden");
 contone.classList.add("visually-hidden");
 constfry.classList.add("visually-hidden");
  
})

impofry.addEventListener("click", function (){
 constfry.classList.remove("visually-hidden");
  constty.classList.add("visually-hidden"); 
 contone.classList.add("visually-hidden"); 
  

  
})


const searchin = document.querySelector(".search-input");
const btnsea = document.querySelector(".btn-search1 ");
const searform = document.querySelector(".search-form");


searchin.addEventListener ("mouseenter", function () {
 btnsea.classList.remove("visually-hidden");

}  )



searchin.addEventListener ("mouseleave", function () {
 btnsea.classList.add("visually-hidden");

}  )



btnsea.addEventListener ("mouseenter", function () {
 searchin.classList.remove("visually-hidden");

}  )



 
 













