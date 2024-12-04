// Function to handle scroll animations
function animateShopCards() {
    const cards = document.querySelectorAll(".shop-card"); // Select all cards
    
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect(); // Get the position of the card
      
      // Check if the card is visible in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.classList.add("visible"); // Add the visible class
      } else {
        card.classList.remove("visible"); // Remove the visible class if out of view
      }
    });
  }
  
  // Attach the function to the scroll event
  window.addEventListener("scroll", animateShopCards);
  
  // Run once when the page loads
  animateShopCards();
  