function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Assuming you have an email sending function that works asynchronously
    // Replace this with your actual email sending logic
    emailjs.send("service_i0jrv3v", "template_t8gynac", params)
        .then(function(response) {
            // Handle success
            alert("Email sent!");
        }, function(error) {
            // Handle error
            alert("Email not sent. Please try again later.");
        });
}
