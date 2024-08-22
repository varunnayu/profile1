document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's theme preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load the user's theme preference on page load
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('mobile-active');
});


// Github verson (1 file .html): https://github.com/Soooda/progress_bar_lite/blob/master/index.html

function increase() {
  // Change the variable to modify the speed of the number increasing from 0 to (ms)
  let SPEED = 40;
  // Retrieve the percentage value
  let limit = parseInt(document.getElementById("value1").innerHTML, 10);

  for(let i = 0; i <= limit; i++) {
      setTimeout(function () {
          document.getElementById("value1").innerHTML = i + "%";
      }, SPEED * i);
  }
}




document.addEventListener("DOMContentLoaded", function() {
  // Show the preloader for at least 5 seconds
  setTimeout(function() {
      // Hide the preloader and show the content after the delay
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
  }, 3000); // 5000 milliseconds = 5 seconds
});
