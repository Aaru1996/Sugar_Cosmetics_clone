
// for signup giving the functionallity

document.querySelector(".form").addEventListener("submit",addData);

var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
console.log(userDatabase)
function addData(event){
    event.preventDefault();

      var name = document.querySelector(".name").value;
      var email = document.querySelector(".email").value;
      var password = document.querySelector(".password").value;

    if(name==""){
        alert("username should not be empty");
    } 
    if(name.length<=2 && name.length>0){
        alert("username is too short");
    }
    else if(email.length==""){
        alert("please fill your email");
    }
    else if(email.length<=10){
        alert("please fill a valid email");
    }
    else if(password==""){
        alert("please fill password");
    }
    else if(password.length<=6)
    {
        alert("password length must be minimum 8 character");
    }
    else{

        var userObj = {
          name:name,
          email:email,
          password:password,
        };
      
        userData.push(userObj);
       // console.log(userData);
        localStorage.setItem("userDatabase", JSON.stringify(userData));

      alert("Register successfully");
      window.location.href="signin.html";

    }
 }
   document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".wrapper").style.display="none"
    window.location.href="index.html"
})
