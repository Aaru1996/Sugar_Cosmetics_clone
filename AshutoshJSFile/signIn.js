
// for login giving the functionallity

var userData = JSON.parse(localStorage.getItem("userDatabase"));
     let form = document.querySelector(".form");
     form.addEventListener("submit",addDetails);

  function addDetails(event){
      event.preventDefault()

        let email = form.user.value;
        let password = form.pass.value;

        
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
