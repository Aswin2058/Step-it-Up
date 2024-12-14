    document.addEventListener("DOMContentLoaded", () => {
        const upperNav = document.querySelector(".upper-nav");
        const lowerNav = document.querySelector(".lower-nav");

        let lastScrollTop = 0; // To track the previous scroll position
        let isScrollingDown = false;
        let hasScrolledPastThreshold = false;

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            // Check if user is scrolling down or up
            if (currentScroll > lastScrollTop) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }

            // Trigger the behavior only after the user has scrolled down a certain threshold
            if (currentScroll > 200) {  // Adjust this threshold as needed
                hasScrolledPastThreshold = true;
            }

            // When scrolling down and past the threshold, hide both nav bars
            if (isScrollingDown && hasScrolledPastThreshold) {
                upperNav.style.transform = `translateY(-${upperNav.offsetHeight}px)`;
                lowerNav.style.transform = `translateY(-${upperNav.offsetHeight + lowerNav.offsetHeight}px)`;

                // Remove background and shadow when upper nav is hidden
                upperNav.style.backgroundColor = "transparent";
                upperNav.style.boxShadow = "none";
            } 
            // When scrolling up, show both nav bars if near the top
            else if (!isScrollingDown && currentScroll <= 100) {  // Show both nav bars when close to the top
                upperNav.style.transform = "translateY(0)";
                lowerNav.style.transform = "translateY(0)";  // Make sure lower nav appears as well

                // Restore background and shadow when upper nav reappears
                upperNav.style.backgroundColor = "rgb(42, 5, 102)";
                upperNav.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }
            // When scrolling up but not near the top, hide lower nav
            else if (!isScrollingDown && hasScrolledPastThreshold) {
                upperNav.style.transform = "translateY(0)";
                lowerNav.style.transform = `translateY(-${upperNav.offsetHeight + lowerNav.offsetHeight}px)`;

                // Restore background and shadow when upper nav reappears
                upperNav.style.backgroundColor = "rgb(42, 5, 102)";
                upperNav.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }

            lastScrollTop = currentScroll; // Update the last scroll position
        });
    });

    //This is the end of the nav bar behaviour


    // for profile view
  // After authentication, get first name and last name from localStorage
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  
  // Generate initials (first letter of first name and last name)
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  
  // Update the profile section with the initials
  document.getElementById('profile-initials').textContent = initials;