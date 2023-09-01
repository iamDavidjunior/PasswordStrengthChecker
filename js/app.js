const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");
const strengthMessage = document.getElementById("strength-message");
const submitBtn = document.getElementById("submit-btn");

const colors = {
  Weak: "red",
  Ok: "orange",
  Strong: "green",
};

function checkPasswordStrength(password) {
  if (password.length >= 8 && /[A-Z]/.test(password)) {
    if (
      password.length > 12 &&
      /[A-Z]/.test(password) &&
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
    ) {
      return "Strong";
    }
    return "Ok";
  }
  return "Weak";
}

function updateStrengthIndicator(strength) {
  const indicator = passwordToggle.querySelector("i");
  const color = colors[strength];
  indicator.style.color = color;
}

function updateStrengthMessage(strength) {
  strengthMessage.textContent = `Password Strength: ${strength}`;
  strengthMessage.style.color = colors[strength];
}

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  updateStrengthIndicator(strength);
  updateStrengthMessage(strength);
});

submitBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  alert(`Password Strength: ${strength}`);
});

passwordToggle.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");
});
