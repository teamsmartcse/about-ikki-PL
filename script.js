/* ==========================================================================
   KONFIGURASI PENGGUNA (Ubah data di sini agar mudah di-update)
   ========================================================================== */
const CONFIG = {
  // 1. Teks Animasi Ketik
  heroText: "Halo, Gueh Ikki :D",
  typeSpeed: 100, // Kecepatan mengetik (ms)
  deleteSpeed: 50, // Kecepatan menghapus (ms)
  delayComplete: 5000, // Delay saat teks selesai diketik (ms)
  delayEmpty: 2000, // Delay saat teks habis terhapus (ms)

  // 2. Daftar Gambar Carousel
  carouselImages: ["image1.png", "image2.png", "image3.png"],
};

/* ==========================================================================
   1. DARK / LIGHT THEME TOGGLE
   ========================================================================== */
const initThemeToggle = () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
  });
};

/* ==========================================================================
   2. IMAGE CAROUSEL
   ========================================================================== */
const initCarousel = () => {
  const carouselImg = document.getElementById("carouselImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  if (!carouselImg || !prevBtn || !nextBtn) return;

  const updateImage = () => {
    carouselImg.src = CONFIG.carouselImages[currentIndex];
    carouselImg.alt = `Detail Proyek ${currentIndex + 1}`;
  };

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % CONFIG.carouselImages.length;
    updateImage();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + CONFIG.carouselImages.length) %
      CONFIG.carouselImages.length;
    updateImage();
  });

  // Load gambar pertama kali
  updateImage();
};

/* ==========================================================================
   3. ANIMASI TEKS KETIK & LOOPING DINAMIS
   ========================================================================== */
const initTypingEffect = () => {
  const typingElement = document.querySelector(".typing-text");
  if (!typingElement) return;

  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    typingElement.textContent = CONFIG.heroText.substring(0, charIndex);
    let speed = isDeleting ? CONFIG.deleteSpeed : CONFIG.typeSpeed;

    if (!isDeleting && charIndex < CONFIG.heroText.length) {
      charIndex++;
    } else if (!isDeleting && charIndex === CONFIG.heroText.length) {
      speed = CONFIG.delayComplete;
      isDeleting = true;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (isDeleting && charIndex === 0) {
      speed = CONFIG.delayEmpty;
      isDeleting = false;
    }

    setTimeout(typeEffect, speed);
  };

  typeEffect();
};

/* ==========================================================================
   JALANKAN FUNGSI SETELAH DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initCarousel();
  initTypingEffect();
});
