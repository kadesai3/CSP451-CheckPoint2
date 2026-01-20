/**
 * Starter login behavior (minimal).
 * Feature branch: feature/user-authentication should add:
 * - better validation (inline errors)
 * - UI feedback states (loading, success, failure)
 * - optional: call an API endpoint (e.g., POST /api/auth/login)
 */
const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const rememberEmailCheckbox = document.getElementById("rememberEmail");
const emailInput = document.getElementById("email");

// Load remembered email on page load
const savedEmail = localStorage.getItem("rememberedEmail");
if (savedEmail && emailInput && rememberEmailCheckbox) {
  emailInput.value = savedEmail;
  rememberEmailCheckbox.checked = true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Minimal checks (students can improve)
  if (!email || password.length < 6) {
    message.textContent = "Please enter a valid email and a password (min 6 characters).";
    return;
  }

    // Remember email logic (run on submit)
  if (rememberEmailCheckbox?.checked) {
    localStorage.setItem("rememberedEmail", email);
  } else {
    localStorage.removeItem("rememberedEmail");
  }

  message.textContent = "Login submitted (stub). Implement authentication in your feature branch.";
});
