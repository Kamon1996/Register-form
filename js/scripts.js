let usersData = [];

const signUpButton = document.querySelector('input[value="Sign Up"]');
const loginButton = document.querySelector('input[value=Login]');
const userName = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const formTitle = document.querySelector('h2')
const signUp = document.querySelector('.sign__up')
const tryAgain = document.querySelector('.try__again')


const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

if (localStorage.getItem('usersData')) {
   usersData = JSON.parse(localStorage.getItem('usersData'));
}


//=====================SignUp===========================//

signUp.addEventListener("click", function () {    // Don't have acc? => Go to Sign in Form
   signUp.classList.add('hide');
   loginButton.classList.add('hide');
   userName.classList.remove('hide');
   signUpButton.classList.remove('hide');
   formTitle.innerHTML = 'Sign Up'
   userName.value = email.value = password.value = '';
})

//=====================SignUpButton===========================//


signUpButton.addEventListener("click", function () {
   let newUser = {
      NameSurname: userName.value,
      Email: email.value,
      Password: password.value
   }
   if (                                         // If user don't put text in some area
      userName.value == '' ||
      email.value == '' ||
      password.value == '' ||
      !regEmail.test(email.value)              // If email is wrong!
   ) {
      return;
   } else if (checkEmailAndLogin() === true) {  // If username or password is already used
      callBack('This username or password is already used');
      tryAgain.classList.remove('hide');
   } else {
      console.log(checkEmailAndLogin())       // Push to arr and save in localStorage   
      usersData.push(newUser);
      localStorage.setItem('usersData', JSON.stringify(usersData));
      userName.value = '';
      signUp.classList.remove('hide');
      loginButton.classList.remove('hide');
      userName.classList.add('hide');
      signUpButton.classList.add('hide');
      formTitle.innerHTML = 'Login'
   }
})

//=====================LoginButton===========================//

loginButton.addEventListener("click", function (event) {

   event.preventDefault();

   if (usersData.length === 0) {
      console.log(usersData.length)
      callBack('Invalid Email or Password');
      tryAgain.classList.remove('hide');
   }

   if (                              // If user don't put text in some area
      email.value == '' ||
      password.value == '' ||
      (!regEmail.test(email.value))   // If email is wrong!
   ) {
      return;
   }

   let find = false;
   usersData.forEach(function (element) {    // Search this email and password ind arr
      if (
         email.value == element.Email &
         password.value == element.Password
      ) {
         callBack('Login Successfully');
         return find = true;
      }
   })
   if (find === false) {
      callBack('Invalid Email or Password');
      tryAgain.classList.remove('hide');
   }
})

//=====================TryAgain===========================//


tryAgain.addEventListener("click", function () {
   signUp.classList.remove('hide');
   loginButton.classList.remove('hide');
   userName.classList.add('hide');
   signUpButton.classList.add('hide');
   formTitle.innerHTML = 'Login'
   tryAgain.classList.add('hide');
   email.classList.remove('hide');
   password.classList.remove('hide');
   formTitle.style.cssText = `
   font-size: 24px;
   font-weight: 600;
   letter-spacing: 1px;
   margin-bottom: 40px;
   `
})

function callBack(message) {
   userName.classList.add('hide');
   signUpButton.classList.add('hide');
   signUp.classList.add('hide');
   loginButton.classList.add('hide');
   email.classList.add('hide');
   password.classList.add('hide');
   formTitle.innerHTML = message;
   formTitle.style.cssText = `
   font-size: 26px;
   font-weight: 300;
   margin-bottom: 0px;
   letter-spacing: 3px;
   `
}


function checkEmailAndLogin() {
   let check = false;
   usersData.forEach(function (element) {
      if (
         email.value == element.Email ||
         userName.value == element.NameSurname
      ) {
         check = true;
         return;
      }
   })
   return check;
}
