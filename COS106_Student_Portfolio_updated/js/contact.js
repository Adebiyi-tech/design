const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  document.querySelectorAll(".error").forEach((element) => element.textContent = "");
  document.getElementById("successMessage").textContent = "";

  let valid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  if (!phone) {
    document.getElementById("phoneError").textContent = "Phone number is required.";
    valid = false;
  } else if (!/^\d+$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone number must contain only digits.";
    valid = false;
  }

  if (!message) {
    document.getElementById("messageError").textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").textContent =
      "Form validated successfully. Thank you for your message!";
    contactForm.reset();
  }
});
