
export function getDarkMode() {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  }
  
  export function saveDarkMode(isDark) {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }
  