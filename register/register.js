const termsModal = document.getElementById("termsModal");
const privacyModal = document.getElementById("privacyModal");
const myInput = document.getElementById("myInput");
const agreeCheckBox = document.getElementById("agreeCheckBox");
const submitButton = document.getElementById("submitButton");

if (termsModal) {
  termsModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}

if (privacyModal) {
  privacyModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}

agreeCheckBox.addEventListener("change", () => {
  submitButton.disabled = !agreeCheckBox.checked;
});
