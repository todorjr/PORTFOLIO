let me = "eleazartodor@gmail.com";
let user = document.getElementById("name").value;
let userEmail = document.getElementById("email").value;
let message = document.getElementById("message").value;
console.log(user);
function sendEmail(message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: user,
    To: me,
    From: userEmail,
    Body: message,
  }).then((message) => alert("mail sent successfully"));
}
