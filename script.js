document.getElementById('register-btn').addEventListener('click', function() {
  // Validate form inputs
  if (validateForm()) {
    // Display success message
    document.getElementById('success-popup').style.display = 'block';
  }
});

document.getElementById('close-popup-btn').addEventListener('click', function() {
  // Hide success message
  document.getElementById('success-popup').style.display = 'none';
});

function validateForm() {
  // Get all form inputs
  const firstname = document.getElementById('firstname');
  const middlename = document.getElementById('middlename');
  const lastname = document.getElementById('lastname');
  const photo = document.getElementById('photo');
  const course = document.getElementById('course');
  const gender = document.querySelector('input[name="gender"]:checked');
  const countrycode = document.getElementById('countrycode');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmpassword = document.getElementById('confirmpassword');

  // Check if all form inputs are valid
  if (firstname.checkValidity() && middlename.checkValidity() && lastname.checkValidity() && photo.checkValidity() && course.checkValidity() && gender.checkValidity() && countrycode.checkValidity() && phone.checkValidity() && address.checkValidity() && email.checkValidity() && password.checkValidity() && confirmpassword.checkValidity()) {
    // Check if password and confirm password match
    if (password.value === confirmpassword.value) {
      return true;
    } else {
      // Display error message if passwords do not match
      document.getElementById('confirmpassword-error').innerText = 'Passwords do not match';
      return false;
    }
  } else {
    return false;
  }
}