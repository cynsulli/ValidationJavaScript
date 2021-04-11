function validate(){
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
  
  if(username==="coolStudent123"){
    window.location.replace("https://cynsulli.github.io/ValidationMenu/")
  }else{
    messEle.innerHTML="Not the right username"
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})