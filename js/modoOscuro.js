const themeSwitch = document.getElementById("themeSwitch");
      const htmlEl = document.documentElement;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        htmlEl.setAttribute("data-bs-theme", "dark");
        themeSwitch.checked = true;
      }

      themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
          htmlEl.setAttribute("data-bs-theme", "dark");
        } else {
          htmlEl.setAttribute("data-bs-theme", "light");
        }
      });