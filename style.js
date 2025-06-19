
  const counters = document.querySelectorAll('.count');
  const speed = 50; // The lower, the faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace(/[^0-9]/g, '');

      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = formatNumber(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = formatNumber(target);
      }
    };

    const formatNumber = (num) => {
      if (num >= 1e9) return (num / 1e9).toFixed(1) + " B";
      if (num >= 1e6) return (num / 1e6).toFixed(1) + " M";
      return num.toLocaleString();
    };

    updateCount();
  });


  const menuBar = document.getElementById('menu-bar');
  const navbar = document.querySelector('.navbar');

  menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });



let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // change every 3 sec
}

function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = 0;
  showSlides();
}


document.getElementById("formdetails").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const mobilePattern = /^[0-9]{10}$/;

  if (name === "" || email === "" || mobile === "") {
    alert("Please fill all required fields.");
    e.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  } else if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    e.preventDefault();
  }
});

document.getElementById("formdetails").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission (for demo or client-side use only)

  // Show popup message
  const popup = document.getElementById("success-popup");
  popup.style.display = "block";

  // Reset the form
  this.reset();

  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});
