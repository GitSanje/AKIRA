// CAROUSEL 


const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel(animate = true) {
  track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
    updateCarousel(false);
  } else {
    currentIndex++;
    updateCarousel(true);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
    updateCarousel(false);
  } else {
    currentIndex--;
    updateCarousel(true);
  }
});




// SIDEBAR OPEN/CLOSE

document.addEventListener('DOMContentLoaded', ()=>{

   const hamburgerBtn = document.querySelector('.hambuger');
  const closeBtn = document.querySelector('.close-btn');
  const mobileNavSheet = document.querySelector('.mobile-nav-sheet');
 if (!hamburgerBtn || !mobileNavSheet) return;


  // OPEN
  hamburgerBtn.addEventListener('click', () => {
    mobileNavSheet.classList.add('open');
    
  });

  // CLOSE
  closeBtn?.addEventListener('click', () => {
    mobileNavSheet.classList.remove('open');
    
  });


})




// SIDEBAR SUBMENU NAV DROPDOWN

document.querySelectorAll('.sidebar-dropdown-btn').forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.menu;
    const sidebarItem = btn.closest('.sidebar-item');

    const submenu = document.querySelector(`.sidebar-submenu[data-menu="${key}"]`);
    submenu.classList.toggle('active');
    sidebarItem.classList.toggle('active');

  })
})


// REDUCE HEIGHT ON SCROLL

  const header = document.querySelector('header'); 

  window.addEventListener('scroll', () =>{
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })