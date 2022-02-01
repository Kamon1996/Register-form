const usersData = [];

const signUpButton = document.querySelector('input[value="Sign Up"]');
const loginButton = document.querySelector('input[value=Login]');
const userName = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const formTitle = document.querySelector('h2')
const signUp = document.querySelector('.sign__up')
const tryAgain = document.querySelector('.try__again')


const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;


signUp.addEventListener("click", function () {
   signUp.classList.add('hide');
   loginButton.classList.add('hide');
   userName.classList.remove('hide');
   signUpButton.classList.remove('hide');
   formTitle.innerHTML = 'Sign Up'
})



signUpButton.addEventListener("click", function () {
   let newUser = {
      NameSurname: userName.value,
      Email: email.value,
      Password: password.value
   }
   if (
      userName.value == '' ||
      email.value == '' ||
      password.value == ''
   ) {
      return;
   } else {
      usersData.push(newUser);
      userName.value = email.value = password.value = '';
      signUp.classList.remove('hide');
      loginButton.classList.remove('hide');
      userName.classList.add('hide');
      signUpButton.classList.add('hide');
      formTitle.innerHTML = 'Login'
   }
})

loginButton.addEventListener("click", function (event) {
   event.preventDefault();
   if (usersData.length === 0) {
      email.value = password.value = '';
      signUp.classList.add('hide');
      loginButton.classList.add('hide');
      email.classList.add('hide');
      password.classList.add('hide');
      tryAgain.classList.remove('hide');
      formTitle.innerHTML = 'Invalid email or password'
      formTitle.style.cssText = `
      font-size: 26px;
      font-weight: 300;
      margin-bottom: 0px;
      letter-spacing: 3px;
      `
   }

   if (
      email.value == '' ||
      password.value == ''
   ) {
      return;
   } else { }
   usersData.forEach(function (element) {
      if (
         email.value == element.Email &
         password.value == element.Password
      ) {
         email.value = password.value = '';
         signUp.classList.add('hide');
         loginButton.classList.add('hide');
         email.classList.add('hide');
         password.classList.add('hide');
         formTitle.innerHTML = 'Login successfully'
         formTitle.style.cssText = `
         font-size: 26px;
         font-weight: 300;
         margin-bottom: 0px;
         letter-spacing: 3px;
         `
      } else {
         email.value = password.value = '';
         signUp.classList.add('hide');
         loginButton.classList.add('hide');
         email.classList.add('hide');
         password.classList.add('hide');
         tryAgain.classList.remove('hide');
         formTitle.innerHTML = 'Invalid email or password'
         formTitle.style.cssText = `
         font-size: 26px;
         font-weight: 300;
         margin-bottom: 0px;
         letter-spacing: 3px;
         `
      }
   })
})

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
