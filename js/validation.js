function listenForValidation() {
  const UPLOAD_FORM = document.getElementById("upload-form");

  UPLOAD_FORM.addEventListener("submit", validateUploadForm);
}

function validateUploadForm(e) {
  e.preventDefault();

  const USER = document.getElementById("user").value.trim();
  const OPTIONS = document.getElementById("options").value;
  const EMAIL = document.getElementById("email").value.trim();
  const IMAGE = document.getElementById("image-upload").value;

  let valid = true;

  if (!USER) {
    document.getElementById("name-error").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("name-error").style.visibility = "hidden";
  }

  if (!OPTIONS) {
    document.getElementById("options-error").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("options-error").style.visibility = "hidden";
  }

  if (!EMAIL || !validateEmail(EMAIL)) {
    document.getElementById("email-error").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("email-error").style.visibility = "hidden";
  }

  if (!IMAGE) {
    document.getElementById("checkbox-error").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("checkbox-error").style.visibility = "hidden";
  }

  if (valid) {
    saveData(USER, OPTIONS, EMAIL, IMAGE);
  }
}

function saveData(USER, OPTIONS, EMAIL, FILE) {
  localStorage.setItem("name", USER);
  localStorage.setItem("options", OPTIONS);
  localStorage.setItem("email", EMAIL);
  localStorage.setItem("image-upload", FILE);
}

function validateEmail(email) {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return EMAIL_REGEX.test(email);
}

// Start validation listener
listenForValidation();
