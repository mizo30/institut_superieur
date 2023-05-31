<?php

include 'components/connect.php';

if(isset($_COOKIE['user_id'])){
   $user_id = $_COOKIE['user_id'];
}else{
   $user_id = '';
}

if(isset($_POST['submit'])){

   $name = $_POST['name']; 
   $name = filter_var($name, FILTER_SANITIZE_STRING);
   $email = $_POST['email']; 
   $email = filter_var($email, FILTER_SANITIZE_STRING);
   $number = $_POST['number']; 
   $number = filter_var($number, FILTER_SANITIZE_STRING);
   $msg = $_POST['msg']; 
   $msg = filter_var($msg, FILTER_SANITIZE_STRING);

   $select_contact = $conn->prepare("SELECT * FROM `contact` WHERE name = ? AND email = ? AND number = ? AND message = ?");
   $select_contact->execute([$name, $email, $number, $msg]);

   if($select_contact->rowCount() > 0){
      $message[] = 'message sent already!';
   }else{
      $insert_message = $conn->prepare("INSERT INTO `contact`(name, email, number, message) VALUES(?,?,?,?)");
      $insert_message->execute([$name, $email, $number, $msg]);
      $message[] = 'message sent successfully!';
   }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>contact</title>

   
         <!-- Favicons -->
         <link href="./images/0isi0.jpg" rel="icon" />
         <link href="./images/0isi0.jpg" rel="apple-touch-icon" />

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>

<?php include 'components/user_header.php'; ?>

<!-- contact section starts  -->

<section class="contact">

   <div class="row">

      <div class="image">
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.5123201206866!2d8.708336215126055!3d36.178420280081376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fba44eb16009e5%3A0xea46e94b9ed2cde8!2sInstitut%20Sup%C3%A9rieur%20de%20l&#39;Informatique%20du%20Kef!5e0!3m2!1sfr!2stn!4v1680156606900!5m2!1sfr!2stn"
              width="650"
              height="570"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
      </div>

      <form   
        id="form"
        class="register"
        action=""
        method="post"
        enctype="multipart/form-data">
         <h3>get in touch</h3>
         <input type="text" placeholder="enter your name"  maxlength="100" name="name" class="box">
         <input type="email" placeholder="enter your email"  maxlength="100" name="email" class="box">
         <input type="number" min="0" max="99999999" placeholder="enter your number"  maxlength="10" name="number" class="box">
         <textarea name="msg" class="box" placeholder="enter your message"  cols="30" rows="10" maxlength="1000"></textarea>
         <input type="submit" value="send message" class="inline-btn" name="submit">
      </form>

   </div>

   <div class="box-container">

      <div class="box">
         <i class="fas fa-phone"></i>
         <h3>phone number</h3>
         <a href="tel:78201056">+(216) 78 201 056</a>
         <a href="tel:78200237">+(216) 78 200 237</a>
      </div>

      <div class="box">
         <i class="fas fa-envelope"></i>
         <h3>email address</h3>
         <a href="mailto:isiisikef@gmail.com">isiisikef@gmail.com</a>
      </div>

      <div class="box">
         <i class="fas fa-map-marker-alt"></i>
         <h3>office address</h3>
         <a href="#">5 Rue Saleh Ayech - El kef - 7100</a>
      </div>


   </div>

</section>

<!-- contact section ends -->











<?php include 'components/footer.php'; ?>  

<!-- custom js file link  -->
<script src="js/script.js"></script>



<script>
const form = document.getElementById("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[type="email"]');
const numberInput = document.querySelector('input[name="number"]');
const msgInput = document.querySelector('textarea[name="msg"]');

form.addEventListener('submit', function(event) {

  // Validate the form inputs
  if (nameInput.value === "") {
    alert("Please enter your name.");
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

  if (numberInput.value === "") {
    alert("Please enter your phone number.");
    numberInput.focus();
    return;
  }

  if (msgInput.value === "") {
    alert("Please enter your message.");
    msgInput.focus();
    return;
  }

  // Send the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Thank you for your message!");
        form.reset();
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    }
  };
  xhr.send(
    `name=${encodeURIComponent(nameInput.value)}&email=${encodeURIComponent(
      emailInput.value
    )}&number=${encodeURIComponent(
      numberInput.value
    )}&msg=${encodeURIComponent(msgInput.value)}`
  );
});
function validateEmail(email) {
  const re = /@isikef.u-jendouba\.tn$/;
  return re.test(email);
}


</script>
</body>
</html>