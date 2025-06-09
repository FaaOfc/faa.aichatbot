document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  if (username === "zann" && password === "ibukiforme") {
    window.location.href = "./ibuki"; // redirect ke folder ibuki
  } else if (username === "faa" && password === "hutaoismywife") {
    window.location.href = "./hutao"; // redirect ke folder hutao
  } else {
    alert("Username atau password salah!");
  }
});
