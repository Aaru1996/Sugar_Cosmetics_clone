
// for login giving the functionallity

var userData = JSON.parse(localStorage.getItem("userDatabase"));
  console.log(userData)
     var form = document.querySelector(".form");
     form.addEventListener("submit",addDetails);

  function addDetails(){
      event.preventDefault()

        var email = document.querySelector("#user").value
        var password =document.querySelector("#pass").value

        
        for(var i=0; i<userData.length; i++){
            if((email == userData[i].email) && (password == userData[i].password)){
                 alert("login successfull");
                window.location.href = "index.html";
                break;
            }
            else{
                alert("Invalid Email or Password");
                break;
            }
        }
  }
  document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".close").style.display="none"
    window.location.href="index.html"
    console.log(hello)
  })
