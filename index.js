var email = prompt(
  "Enter your email to receive a 10% discount in your first bookings."
);
if (email == null || email == " ") {
  txt = "No email provided";
} else {
  txt =
    "We will send an email to the following account: " +
    email +
    " please verify your spam folder in case that you can not find it!";
}
alert(txt);
