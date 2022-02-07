const loginCheck = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector('#password').value;

  let error_box = document.querySelector(".error-container");

  if (email == "" && password == "") {
    error_box.style.display = "block";
    
    error_box.innerHTML = `<div><i class='bx bx-x'></i>:<span>The email field is empty</span>.</div>
    <div><i class='bx bx-x'></i>:<span>The password field is empty</span>.</div>`
  }
  else if(email == ''){
    error_box.style.display = "block";
    
    error_box.innerHTML = `<div><i class='bx bx-x'></i>:<span>The email field is empty</span>.</div>`
  }
  else if(password == ''){
    error_box.style.display = "block";
    
    error_box.innerHTML = `<div><i class='bx bx-x'></i>:<span>The password field is empty</span>.</div>`
  }
  else{
        error_box.style.display = "none";
        error_box.innerHTML = '';

        return true;
  }
  return false;
};

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
