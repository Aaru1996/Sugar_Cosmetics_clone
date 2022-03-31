
// for signup giving the functionallity

document.querySelector(".form").addEventListener("submit",addData);

let userData = JSON.parse(localStorage.getItem("userDatabase")) || [];

function addData(event){
    event.preventDefault();

      let username = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let password = document.querySelector(".password").value;

    if(username==""){
        alert("username should not be empty");
    } 
    if(username.length<=2 && username.length>0){
        alert("username is too short");
    }
    else if(email.length==""){
        alert("please fill your email");
    }
    else if(email.length<=12){
        alert("please fill a valid email");
    }
    else if(password==""){
        alert("please fill password");
    }
    else if(password.length<=7)
    {
        alert("password length must be minimum 8 character");
    }
    else{

        let userObj = {
          username:username,
          email:email,
          password:password
        };
      
        userData.push(userObj);
        console.log(userData);
        localStorage.setItem("userDatabase", JSON.stringify(userData));

      alert("Register successfully");
      window.location.href="signin.html";

    }
}

