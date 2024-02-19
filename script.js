


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var stone = document.querySelector(".stone");
        var scrollPosition = window.scrollY;
        var screenHeight = window.innerHeight;

        if (scrollPosition > 200 && scrollPosition <= 800) {
            // Animation when scrolling down
            applyAnimation(stone, 1.3, 0, 0);
        }
         else if (scrollPosition > 800 && scrollPosition <= 1400) {
            // Animation when scrolling further down
            applyAnimation(stone, 1.9, 0, 1);
        }
         else if (scrollPosition > 1400 && scrollPosition <= 2300) {
            // Animation when scrolling further down
            applyAnimation(stone, 2.5, 0, 2);
         } else if (scrollPosition > 2600 && scrollPosition <= 3200) {
             // Animation when scrolling further down
             applyAnimation(stone, 3.1, 0, 3);
         } else if (scrollPosition > 3200 && scrollPosition <= 3800) {
             // Animation when scrolling further down
             applyAnimation(stone, 3.7, 0, 4);
         } else if (scrollPosition > 3800 && scrollPosition <= 4400) {
             // Animation when scrolling further down
             applyAnimation(stone, 4.3, 0, 5);
         } else if (scrollPosition > 4400 && scrollPosition <= 7000) {
             // Animation when scrolling further down
             applyAnimation(stone, 4.9, 0, 6);
        } else {
            // Reset to original position
            applyAnimation(stone, 1, 0, 0);
        }
    });

    function applyAnimation(element, scale, translateY, blur) {
        // Apply the combined transformation
        element.style.transition = "transform 1.5s ease-in-out, filter 1.5s ease-in-out";
        element.style.transform = `scale(${scale}) translateY(${translateY}vh)`;
        element.style.filter = `blur(${blur}px)`;

        // If the scale is such that it fills the screen, set a fixed position to avoid layout issues
        if (scale >= 1 && scale <= screenHeight / element.offsetHeight) {
            element.style.position = "fixed";
            element.style.width = "100%";
            element.style.height = "100%";
            element.style.top = "0";
            element.style.left = "0";
        } else {
            // Reset to the original position
            element.style.position = "absolute";
            element.style.width = "675px";  // Adjust width as needed
            element.style.height = "425px"; // Adjust height as needed
            element.style.top = "170px";    // Adjust top position as needed
            element.style.left = "255px";   // Adjust left position as needed
        }
    }
   
});

// document.addEventListener("DOMContentLoaded", function() {
//     var preloader = document.getElementById('preloader');
    
//     setTimeout(function() {
//         preloader.style.opacity = '0';
//         setTimeout(function() {
//             preloader.style.display = 'none';
//         }, 500); // Wait for the transition to complete before hiding the preloader
//     }, 500); // Set the preloader to fade out after 2 seconds
// });






// --------------------------------------------------------------------------------------------------------------------
//                               javascript for  speakers 
// -------------------------------------------------------------------------------------------------------------------- 

document.getElementById('speakers-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    // Scroll to the speakers section with smooth animation
    document.getElementById('speakers-section').scrollIntoView({ behavior: 'smooth' });
  });



//   ------------------------------------------------------------------------------------------------
//                              javascropt for sponsorship
//   ------------------------------------------------------------------------------------------------

  document.getElementById('sponsors-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Scroll to the sponsors section
    document.getElementById('sponsors-section').scrollIntoView({ behavior: 'smooth' });
  });


//   --------------------------------------------------------------------------------------------------------------------
//                                 javascript for  preloader
//   --------------------------------------------------------------------------------------------------------------------
// window.addEventListener('load', function() {
//     var preloader = document.querySelector('.preloader');
//     var content = document.querySelector('.website-content');
  
//     setTimeout(function() {
//       preloader.style.display = 'none';
//       content.style.display = 'block';
//     }, 2200); // 2000 milliseconds = 2 seconds
//   });
  















