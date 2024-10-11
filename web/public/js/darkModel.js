document.addEventListener('DOMContentLoaded', () => {
    const darkMode = document.getElementById('dark-mode');
    const lightMode = document.getElementById('light-mode');
  
    if (darkMode && lightMode) {
      darkMode.addEventListener('click', () => {
        console.log('Dark mode button clicked'); // Debug log
        document.body.classList.toggle('dark-mode');
        darkMode.classList.toggle('hide');
        lightMode.classList.remove('hide');
      });
  
      lightMode.addEventListener('click', () => {
        console.log('Dark mode button clicked'); // Debug log
        document.body.classList.remove('dark-mode');
        lightMode.classList.toggle('hide');
        darkMode.classList.remove('hide');
      });
    }
  });
  

console.log('darkMode.js引入成功')
