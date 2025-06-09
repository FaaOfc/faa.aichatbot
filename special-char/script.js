document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value;

      if (username === "zann" && password === "ibukiforme") {
        window.location.href = "./ibuki";
      } else if (username === "faa" && password === "hutaoismywife") {
        window.location.href = "./hutao";
      } else {
        alert("Username atau password salah!");
      }
    });
