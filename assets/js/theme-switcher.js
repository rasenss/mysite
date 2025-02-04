function setupThemeToggle() {
    const themeToggle = document.getElementById("themeToggle")
    const body = document.body
    const emoji = themeToggle.querySelector(".emoji")
  
    // Check for saved theme preference
    const currentTheme = localStorage.getItem("theme") || "light"
  
    // Apply theme immediately
    if (currentTheme === "dark") {
      body.classList.add("dark-theme")
      emoji.textContent = "☀️"
    }
  
    themeToggle.addEventListener("click", () => {
      // Toggle dark theme
      body.classList.toggle("dark-theme")
  
      // Update localStorage
      const isDark = body.classList.contains("dark-theme")
      localStorage.setItem("theme", isDark ? "dark" : "light")
  
      // Update emoji
      emoji.textContent = isDark ? "☀️" : "🌙"
    })
  }
  
  // Run setup when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", setupThemeToggle)
  
  // Also run setup immediately in case the script loads after DOM content
  if (document.readyState === "complete") {
    setupThemeToggle()
  }
  
  