function sendMail(){
    var params = {
        from_name:document.getElementById("name").value,
        contact:document.getElementById("phone").value,
        message:document.getElementById("message").value,
        email:document.getElementById("email").value,
         reason:document.getElementById("reason").value,
    }
    emailjs.send("service_gbof4if","template_6l1u942",params).then(res=>{console.log(res.status);alert("Your message is successfully delivered");})
}
