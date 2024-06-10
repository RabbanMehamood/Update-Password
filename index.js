let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";

    }
};
let validateConfirmPassword = function() {
    let newPassword = newPasswordEl.value;
    let confirmpassword = confirmPasswordEl.value;
    if (newPassword !== confirmpassword) {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
};

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});
