
const form = document.querySelector(".register");
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const passInput = form.querySelector('input[name="pass"]');
const cpassInput = form.querySelector('input[name="cpass"]');
const imageInput = form.querySelector('input[name="image"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche l'envoi du formulaire

  // validation des champs
  if (nameInput.value.trim() === "") {
    alert("Veuillez entrer votre nom");
    nameInput.focus();
    return;
  }
  if (emailInput.value.trim() === "") {
    alert("Veuillez entrer votre adresse email");
    emailInput.focus();
    return;
  }
  if (passInput.value.trim() === "") {
    alert("Veuillez entrer votre mot de passe");
    passInput.focus();
    return;
  }
  if (cpassInput.value.trim() === "") {
    alert("Veuillez confirmer votre mot de passe");
    cpassInput.focus();
    return;
  }
  if (passInput.value !== cpassInput.value) {
    alert("Les mots de passe ne correspondent pas");
    passInput.value = "";
    cpassInput.value = "";
    passInput.focus();
    return;
  }
  if (imageInput.files.length === 0) {
    alert("Veuillez sélectionner une image");
    return;
  }

  // envoi du formulaire
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Une erreur est survenue");
      }
      alert("Inscription réussie");
      form.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
});



////


const form = document.querySelector('.register');
const nameInput = form.querySelector('input[name="name"]');
const professionInput = form.querySelector('select[name="profession"]');
const emailInput = form.querySelector('input[type="email"]');
const passInput = form.querySelector('input[name="pass"]');
const cpassInput = form.querySelector('input[name="cpass"]');
const imageInput = form.querySelector('input[type="file"]');

form.addEventListener('submit', function(event) {
  // Validate name
  const nameValue = nameInput.value.trim();
  if (nameValue.length === 0) {
    alert('Please enter your name.');
    event.preventDefault();
    return;
  }
  if (nameValue.length > 50) {
    alert('Name must be no longer than 50 characters.');
    event.preventDefault();
    return;
  }

  // Validate profession
  const professionValue = professionInput.value;
  if (professionValue === '') {
    alert('Please select your profession.');
    event.preventDefault();
    return;
  }

  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue.length === 0) {
    alert('Please enter your email.');
    event.preventDefault();
    return;
  }
  if (!validateEmail(emailValue)) {
    alert('Please enter a valid email.');
    event.preventDefault();
    return;
  }

  // Validate password
  const passValue = passInput.value.trim();
  const cpassValue = cpassInput.value.trim();
  if (passValue.length === 0) {
    alert('Please enter your password.');
    event.preventDefault();
    return;
  }
  if (passValue.length < 8 || passValue.length > 20) {
    alert('Password must be between 8 and 20 characters.');
    event.preventDefault();
    return;
  }
  if (passValue !== cpassValue) {
    alert('Passwords do not match.');
    event.preventDefault();
    return;
  }

  // Validate image
  const imageValue = imageInput.value.trim();
  if (imageValue.length === 0) {
    alert('Please select an image.');
    event.preventDefault();
    return;
  }

  // Form is valid, submit it
  alert('Form is valid.');
});

function validateEmail(email) {
  const re = /@isikef.u-jendouba\.tn$/;
  return re.test(email);
}


////

document.getElementById("form").addEventListener("submit", function(event) {
  const emailInput = document.getElementsByName("email")[0];
  const emailValue = emailInput.value;
  const emailRegex = /@isikef.u-jendouba\.tn$/;

  
  if (!emailRegex.test(emailValue)) {
    alert("Email must end with @isikef.u-jendouba.tn");
    event.preventDefault();
  }
  if (login.length === 0 || pass.length === 0) {
                alert("Vérifier votre login et votre de mot de passe");
                return false;
            }
          });










          
<script>



const form = document.querySelector(".register");
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[type="email"]');
const passInput = form.querySelector('input[name="pass"]');
const cpassInput = form.querySelector('input[name="cpass"]');
const imageInput = form.querySelector('input[name="image"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche l'envoi du formulaire

  // validation des champs
  if (nameInput.value.trim() === "") {
    alert("Veuillez entrer votre nom");
    nameInput.focus();
    return;
  }
 
  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue.length === 0) {
    alert('Please enter your email.');
    event.preventDefault();
    return;
  }
  if (!validateEmail(emailValue)) {
    alert("Email must end with @isikef.u-jendouba.tn");
    event.preventDefault();
    return;
  }

  if (passInput.value.trim() === "") {
    alert("Veuillez entrer votre mot de passe");
    passInput.focus();
    return;
  }
  if (cpassInput.value.trim() === "") {
    alert("Veuillez confirmer votre mot de passe");
    cpassInput.focus();
    return;
  }
  if (passInput.value !== cpassInput.value) {
    alert("Les mots de passe ne correspondent pas");
    passInput.value = "";
    cpassInput.value = "";
    passInput.focus();
    return;
  }
  if (imageInput.files.length === 0) {
    alert("Veuillez sélectionner une image");
    return;
  }

  // envoi du formulaire
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Une erreur est survenue");
      }
      alert("Inscription réussie");
      form.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
});


function validateEmail(email) {
  const re = /@isikef.u-jendouba\.tn$/;
  return re.test(email);
}

        
</script>
 


 //login
 
<script>
 

 const form = document.querySelector(".login");
 const emailInput = form.querySelector('input[type="email"]');
 const passInput = form.querySelector('input[name="pass"]');
 
 form.addEventListener("submit", (event) => {
   event.preventDefault(); // empêche l'envoi du formulaire
 
 
  
   // Validate email
   const emailValue = emailInput.value.trim();
   if (emailValue.length === 0) {
     alert('Please enter your email.');
     event.preventDefault();
     return;
   }
   if (!validateEmail(emailValue)) {
     alert("Email must end with @isikef.u-jendouba.tn");
     event.preventDefault();
     return;
   }
 
   if (passInput.value.trim() === "") {
     alert("Veuillez entrer votre mot de passe");
     passInput.focus();
     return;
   }
 
 
 
   // envoi du formulaire
   const formData = new FormData(form);
   fetch(form.action, {
     method: form.method,
     body: formData,
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error("Une erreur est survenue");
       }
       alert("Inscription réussie");
       form.reset();
     })
     .catch((error) => {
       alert(error.message);
     });
 });
 
 
 function validateEmail(email) {
   const re = /@isikef.u-jendouba\.tn$/;
   return re.test(email);
 }
 
 </script>
    


    //fin

    
<script>


const form = document.querySelector('.register');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[type="email"]');
const passInput = form.querySelector('input[name="pass"]');
const cpassInput = form.querySelector('input[name="cpass"]');
const imageInput = form.querySelector('input[type="file"]');

form.addEventListener('submit', function(event) {

  // Validate name
  const nameValue = nameInput.value.trim();
  if (nameValue.length === 0) {
    alert('Please enter your name.');
    event.preventDefault();
    return;
  }
  if (nameValue.length > 50) {
    alert('Name must be no longer than 50 characters.');
    event.preventDefault();
    return;
  }

  

  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue.length === 0) {
    alert('Please enter your email.');
    event.preventDefault();
    return;
  }
  if (!validateEmail(emailValue)) {
    forum.rarforum.rar    event.preventDefault();
    return;
  }

  // Validate password
  const passValue = passInput.value.trim();
  const cpassValue = cpassInput.value.trim();
  if (passValue.length === 0) {
    alert('Please enter your password.');
    event.preventDefault();
    return;
  }
  if (passValue.length < 8 || passValue.length > 20) {
    alert('Password must be between 8 and 20 characters.');
    event.preventDefault();
    return;
  }
  if (passValue !== cpassValue) {
    alert('Passwords do not match.');
    event.preventDefault();
    return;
  }

  // Validate image
  const imageValue = imageInput.value.trim();
  if (imageValue.length === 0) {
    alert('Please select an image.');
    event.preventDefault();
    return;
  }

  // Form is valid, submit it
  alert('Form is valid.');
});

function validateEmail(email) {
  const re = /@isikef.u-jendouba\.tn$/;
  return re.test(email);
}


</script>






























<script>

const form = document.querySelector(".register");
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const passInput = form.querySelector('input[name="pass"]');
const cpassInput = form.querySelector('input[name="cpass"]');
const imageInput = form.querySelector('input[name="image"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche l'envoi du formulaire

  // validation des champs
  if (nameInput.value.trim() === "") {
    alert("Veuillez entrer votre nom");
    nameInput.focus();
    return;
  }
   // Validate email
   const emailValue = emailInput.value.trim();
  if (emailValue.length === 0) {
    alert('Please enter your email.');
    event.preventDefault();
    return;
  }
  if (!validateEmail(emailValue)) {
    alert('Please enter a valid email.');
    event.preventDefault();
    return;
  }
 
  if (passInput.value.trim() === "") {
    alert("Veuillez entrer votre mot de passe");
    passInput.focus();
    return;
  }
  if (cpassInput.value.trim() === "") {
    alert("Veuillez confirmer votre mot de passe");
    cpassInput.focus();
    return;
  }
  if (passInput.value !== cpassInput.value) {
    alert("Les mots de passe ne correspondent pas");
    passInput.value = "";
    cpassInput.value = "";
    passInput.focus();
    return;
  }
  if (imageInput.files.length === 0) {
    alert("Veuillez sélectionner une image");
    return;
  }

  // envoi du formulaire
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Une erreur est survenue");
      }
      alert("Inscription réussie");
      form.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
});

function validateEmail(email) {
   const re = /@isikef.u-jendouba\.tn$/;
   return re.test(email);
 }

        
</script>
 