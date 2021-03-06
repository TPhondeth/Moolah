async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //check the response status
    if (response.ok) {
      document.location.replace("/portfolio");
    } else {
      alert("Invalid Password Please Try Again");
    }
  }
}
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
