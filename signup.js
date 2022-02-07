function passHtml(lenght='x',uppercase='x',numbercase='x',specialchar='x'){
  let html = `
    <div><i class='bx bx-${lenght}' ></i>:<span>Your password must be at least 8 characters.</span></div>

    <div><i class='bx bx-${uppercase}' ></i>:<span>Your password must contain at least one Capital letter.</span></div>

    <div><i class='bx bx-${numbercase}' ></i>:<span>Your password must contain at least one Digit.</span></div>

    <div><i class='bx bx-${specialchar}' ></i>:<span>Your password must contain at least one SpecialCharector.</span></div>
  `

  return html
}

var validation = () => {
  let username = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let conform_password = document.querySelector("#conform-password").value;

  let error_box = document.querySelector(".error-container");

  //icon
  let xIcon = "x";
  let checkIcon = "check";

  //checking input field
  if (username == "" && email == "" && password == "") {
    //name + email + password
    error_box.style.display = "block";

    document.querySelector("#name").select();
    error_box.innerHTML = `
    <div><i class='bx bx-x'></i>:<span>The name field is empty</span>.</div>
    <div><i class='bx bx-x'></i>:<span>The email field is empty</span>.</div>
    <div><i class='bx bx-x'></i>:<span>The password field is empty</span>.</div>
    `
  } 
  else if (username == "") {
    //username
    error_box.style.display = "block";
    error_box.innerHTML = `
    <div><i class='bx bx-x'></i>:<span>The name field is empty</span>.</div>
    `

    if (email == "") {
      //username + email
      error_box.innerHTML = `
      <div><i class='bx bx-x'></i>:<span>The name field is empty</span>.</div>
      <div><i class='bx bx-x'></i>:<span>The email field is empty</span>.</div>
      `

    } else if (password == "") {
      //username + password
      error_box.innerHTML = `
      <div><i class='bx bx-x'></i>:<span>The name field is empty</span>.</div>
      <div><i class='bx bx-x'></i>:<span>The password field is empty</span>.</div>
      `
    }
  }//end username
  else if (email == "") {
    //email

    error_box.style.display = "block";
    error_box.innerHTML = `
    <div><i class='bx bx-x'></i>:<span>The email field is empty</span>.</div>
    `

    if (password == "") {
      //email + password
      error_box.innerHTML = `
      <div><i class='bx bx-x'></i>:<span>The email field is empty</span>.</div>
      <div><i class='bx bx-x'></i>:<span>The password field is empty</span>.</div>
      `
    }
  }//end email field
  else if (password == "") {
    //password

    error_box.style.display = "block";
    error_box.innerHTML = `
    <div><i class='bx bx-x'></i>:<span>The password field is empty</span>.</div>
    `
    document.querySelectorAll(".bx-lock")[0].style.color = "red";
    error_box.classList.remove('active')
  }//end password filed
  else {
    error_box.style.display = "block";

    document.querySelectorAll(".bx-lock")[0].style.color = "red";
    document.querySelectorAll(".bx-lock")[1].style.color = "red";

    if(password){
      error_box.classList.add('active')
      //password strong checking
      
      let upperCase = false;
      let numberCase = false;
      let specialChar = false;
      let lowerCase = false;
  
      //Checking all the value of the password field
      for(let i=0; i < password.length; i++){
        if(password[i] >= "A" && password[i] <= "Z"){
          upperCase = true;
        }
        else if(password[i] >= "a" && password[i] <= "z"){
          lowerCase = true;
        }
        else if(password[i] >= "0" && password[i] <= "9"){
          numberCase = true;
        }
        else{
          specialChar = true;
        }
      } 

      if(password.length >= 8){
        //lenght
          error_box.innerHTML = passHtml(checkIcon)

        if(upperCase){
          //lenght + uppercase
          error_box.innerHTML = passHtml(checkIcon,checkIcon)
          
          //lenght + uppercase + numbercase
          if(numberCase){
            error_box.innerHTML = passHtml(checkIcon,checkIcon,checkIcon)

            if(specialChar){
              //lenght + uppercase + numbercase + specialchar
              error_box.innerHTML = passHtml(checkIcon,checkIcon,checkIcon,checkIcon)
              document.querySelectorAll(".bx-lock")[0].style.color = "green";

              //checking two password fields
              if (password == conform_password) {

                document.querySelectorAll(".bx-lock")[0].style.color = "green";
                document.querySelectorAll(".bx-lock")[1].style.color = "green";
          
                return true;
              } 
              else{
                document.querySelectorAll(".bx-lock")[1].style.color = "red";
              }

            }
          }
          else if(specialChar){
            //lenght + uppercase + specialchar
            error_box.innerHTML = passHtml(checkIcon,checkIcon,undefined,checkIcon)
          }
        }
        else if(numberCase){
          //length + numberCase
          error_box.innerHTML = passHtml(checkIcon,undefined,checkIcon)

          if(specialChar){
            //lenght + numbercase + specialchar
            error_box.innerHTML = passHtml(checkIcon,undefined,checkIcon,checkIcon)
          }
        }
        else if(specialChar){
          //lenght + specialchar
          error_box.innerHTML = passHtml(checkIcon,undefined,undefined,checkIcon)
        }
      }//End lenght
      else if(upperCase){
        //uppercase
        error_box.innerHTML= passHtml(undefined,checkIcon)

        //uppercase + numbercase
        if(numberCase){
          error_box.innerHTML = passHtml(undefined,checkIcon,checkIcon)

          //uppercase + numbercase + specialChar
          if(specialChar){
            error_box.innerHTML = passHtml(undefined,checkIcon,checkIcon,checkIcon)
          }
        }
        else if(specialChar){
          //uppercase + specialchar
          error_box.innerHTML = passHtml(undefined,checkIcon,undefined,checkIcon)
        }
      }//end uppercase
      else if(numberCase){
        //numbercase
          error_box.innerHTML = passHtml(undefined,undefined,checkIcon)

          //numbercase + specialchar
          if(specialChar){
            error_box.innerHTML = passHtml(undefined,undefined,checkIcon,checkIcon)
          }
      }
      else if(specialChar){
        //specialchar
        error_box.innerHTML = passHtml(undefined,undefined,undefined,checkIcon)
      }
      else if(password == conform_password){
        document.querySelectorAll(".bx-lock")[1].style.color = "green";
      }
      else{
          error_box.innerHTML = passHtml()
      }
  
    } 
  }

  return false;
};

//password filed value show 

document.querySelector("#passIcon").addEventListener("click", () => {
  let password = document.querySelector("#password");
  let passIcon = document.querySelector("#passIcon");

  if (password.type == "password") {
    passIcon.classList.remove("bx-hide");
    passIcon.classList.add("bx-show");

    password.type = "text";
  } else {
    passIcon.classList.remove("bx-show");
    passIcon.classList.add("bx-hide");

    password.type = "password";
  }
});

document.querySelector("#conform-passIcon").addEventListener("click", () => {
  let conform_password = document.querySelector("#conform-password");
  let conformPassIcon = document.querySelector("#conform-passIcon");

  if (conform_password.type == "password") {
    conformPassIcon.classList.remove("bx-hide");
    conformPassIcon.classList.add("bx-show");

    conform_password.type = "text";
  } else {
    conformPassIcon.classList.remove("bx-show");
    conformPassIcon.classList.add("bx-hide");

    conform_password.type = "password";
  }
});
