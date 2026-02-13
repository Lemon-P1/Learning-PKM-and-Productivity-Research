(function(){
  const key = "theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(key);
  if(saved){ root.setAttribute("data-theme", saved); }

  window.toggleTheme = function(){
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
  }
})();
