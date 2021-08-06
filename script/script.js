function formValidation() {
    let email = document.forms["form"]["email"].value;
    let telephone = document.forms["form"]["telephone"].value;

    if (email == "" || telephone == "" ) {
        alert("Fill all fields");
    } else {
        alert(`email address: ${email}\n telephone: ${telephone}\n We thank you for reaching out to Debug-Us. Your application has been received. We will get back to you, be sure to reach out any time. \n `);
    }
}