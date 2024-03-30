// Function to validate the registration form
function validateForm() {
    var name = document.getElementById("name").value;
    var collegeId = document.getElementById("collegeId").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var userType = document.getElementById("userType").value;
    var password = document.getElementById("password").value;
    var passwordCheck = document.getElementById("passwordCheck").value;

    // Regular expressions for email and mobile number validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^\d{10}$/;

    // Check if any field is empty
    if (name == "" || collegeId == "" || email == "" || mobile == "" || userType == "" || password == "" || passwordCheck == "") {
        alert("All fields are required");
        return false;
    }

    // Check email format
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // Check mobile number format
    if (!mobileRegex.test(mobile)) {
        alert("Invalid mobile number");
        return false;
    }

    // Check if passwords match
    if (password !== passwordCheck) {
        alert("Passwords do not match");
        return false;
    }

    // Validation passed
    return true;
}
