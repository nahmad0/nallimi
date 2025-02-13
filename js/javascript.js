var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    console.log("hello works");
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
    
}

function showMessage(event) {
    event.preventDefault();
    const message = document.getElementById('earn-message');
    const link = event.currentTarget.href;
    
    message.style.display = 'block';
    
    setTimeout(() => {
        window.location.href = link;
    }, 8000); // Message shows for 8 seconds before redirect
    
    return false;
}

function compareEmails() {
    console.log('Function triggered') // for debugging.
    var email = document.forms[0].Email.value;
    var confirmEmail = document.forms[0].ConfirmEmail.value;

    if (email !== confirmEmail) {
        alert("The email addresses do not match.");
        return false; // Prevent form submission
    } else {
        alert("Thank you! We recieved your information");
        return true;
    }
}
