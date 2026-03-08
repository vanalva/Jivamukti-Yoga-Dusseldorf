/* ==========================================================================
   Jivamukti Yoga Dusseldorf - Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ========================================================================
     1. SWIPER CAROUSEL
     ======================================================================== */

  function initCarousel() {
    var swiperEl = document.querySelector('.carousel_swiper');
    if (!swiperEl || typeof Swiper === 'undefined') return;

    var progressBar = document.querySelector('.carousel_progress_bar');
    var autoplayDuration = 7000;

    var swiper = new Swiper('.carousel_swiper', {
      slidesPerView: 1,
      loop: true,
      speed: 600,
      autoplay: {
        delay: autoplayDuration,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: '.carousel_btn_prev',
        nextEl: '.carousel_btn_next',
      },
    });

    if (progressBar) {
      var realTotal = document.querySelectorAll('.carousel_swiper .swiper-slide:not(.swiper-slide-duplicate)').length;

      function updateProgress() {
        var realIndex = swiper.realIndex;
        var progress = ((realIndex + 1) / realTotal) * 100;
        progressBar.style.width = progress + '%';
      }

      swiper.on('slideChange', updateProgress);
      updateProgress();
    }
  }

  /* ========================================================================
     2. FEATURE CARD TOGGLES
     ======================================================================== */

  function initFeatureCards() {
    var toggles = document.querySelectorAll('.feature_card_toggle');
    if (!toggles.length) return;

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var card = toggle.closest('.feature_card_wrap');
        var content = card.querySelector('.feature_card_content');
        var imageWrap = card.querySelector('.feature_card_image_wrap');
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';

        // Close all other cards (mutual exclusion)
        toggles.forEach(function (otherToggle) {
          if (otherToggle === toggle) return;
          var otherCard = otherToggle.closest('.feature_card_wrap');
          var otherContent = otherCard.querySelector('.feature_card_content');
          var otherImage = otherCard.querySelector('.feature_card_image_wrap');

          otherToggle.setAttribute('aria-expanded', 'false');
          otherContent.hidden = true;
          otherImage.classList.remove('is-collapsed');
        });

        // Toggle current card
        toggle.setAttribute('aria-expanded', String(!isOpen));
        content.hidden = isOpen;
        if (imageWrap) {
          imageWrap.classList.toggle('is-collapsed', !isOpen);
        }
      });
    });
  }

  /* ========================================================================
     3. HORIZONTAL TOGGLE (Classes Section)
     ======================================================================== */

  function initHorizontalToggle() {
    var tabs = document.querySelectorAll('.htoggle_tab');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var index = tab.getAttribute('data-htoggle');

        // Deactivate all
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        document.querySelectorAll('.htoggle_content').forEach(function (c) {
          c.classList.remove('is-active');
        });

        // Activate clicked
        tab.classList.add('is-active');
        var content = document.querySelector('[data-htoggle-content="' + index + '"]');
        if (content) content.classList.add('is-active');
      });
    });
  }

  /* ========================================================================
     4. CONTACT FORM
     ======================================================================== */

  function initContactForm() {
    var form = document.querySelector('.contact_form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var successWrap = document.querySelector('.form_success_wrap');
      if (successWrap) {
        form.hidden = true;
        successWrap.hidden = false;
      }
    });
  }

  /* ========================================================================
     INIT
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', function () {
    initCarousel();
    initFeatureCards();
    initHorizontalToggle();
    initContactForm();
  });

})();
