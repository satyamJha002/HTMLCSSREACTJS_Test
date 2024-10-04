document.getElementById('signup-form').addEventListener('submit', function(event){
  event.preventDefault();

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email  = document.getElementById('email').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim()
  const password = document.getElementById('password').value.trim()

  let valid = true;

  clearError()

  const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  if(!firstName){
    showError("first-name-error",'FirstName is required')
    valid = false
  }

  if(!lastName){
    showError("last-name-error",'LastName is required')
    valid = false
  }

  if(!emailPattern.test(email)){
    showError("email-error",'Please enter a valid email address.')
    valid = false
  }

  if(!phonePattern.test(phoneNumber)){
    showError("phone-error",'Please enter a valid 10-digit mobile number')
    valid  = false
  }

  if(password.length < 8){
    showError("password-error",'Password must be at least 8 characters long')
    valid = false
  }

  if(valid){
    const formData = {
      first_Name: firstName,
      last_Name: lastName,
      email: email,
      phone_number: phoneNumber,
      password: password
    }
    console.log(formData)
    alert('Form Submitted successfully.')
  }
})

function showError(fieldId, message){
  const errorElement = document.getElementById(fieldId);
  
  errorElement.innerHTML = message
  errorElement.style.display = 'block'
}

function clearError(){
  document.querySelectorAll('.error-message').forEach((ele)=>{
    ele.textContent = ''
    ele.style.display = 'none'
  })
}

function responsiveNav(){
  let x = document.getElementById('topNav')
  if(x.className === 'nav-btn'){
    x.className += 'responsive'
  } else {
    x.className = 'nav-btn'
  }
}