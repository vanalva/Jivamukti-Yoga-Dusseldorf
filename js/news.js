/**
 * News Grid & Modal
 * Reads data/news.json and renders an Instagram-style post grid.
 * Click a card to open a modal with image carousel + full caption.
 */

(function () {
  'use strict';

  var posts = [];
  var currentPostIndex = 0;
  var currentImageIndex = 0;

  // ── DOM refs (set after DOMContentLoaded) ──────────────────────────
  var grid, modal, modalBackdrop, modalImage, modalDate, modalCaption;
  var modalPrev, modalNext, modalDots, modalClose;

  // ── Helpers ────────────────────────────────────────────────────────
  function formatDate(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function firstLine(caption) {
    return caption.split('\n')[0].replace(/^[✨🌿💫🎓🌸🕊️🎄📚]+\s*/, '').trim();
  }

  // ── Grid ───────────────────────────────────────────────────────────
  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = '';

    posts.forEach(function (post, index) {
      var card = document.createElement('button');
      card.className = 'news_card';
      card.setAttribute('aria-label', 'Post öffnen: ' + firstLine(post.caption));

      var img = document.createElement('img');
      img.className = 'news_card_image';
      img.src = post.images[0];
      img.alt = firstLine(post.caption);
      img.loading = 'lazy';

      var overlay = document.createElement('div');
      overlay.className = 'news_card_overlay';
      overlay.innerHTML =
        '<p class="news_card_caption_preview">' + firstLine(post.caption) + '</p>' +
        '<span class="news_card_date">' + formatDate(post.date) + '</span>';

      card.appendChild(img);
      card.appendChild(overlay);

      // Multi-image icon
      if (post.images.length > 1) {
        var icon = document.createElement('div');
        icon.className = 'news_card_multi_icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
          '<rect x="7" y="2" width="14" height="14" rx="2"/>' +
          '<rect x="3" y="6" width="14" height="14" rx="2" fill="rgba(255,255,255,0.3)"/>' +
          '</svg>';
        card.appendChild(icon);
      }

      card.addEventListener('click', function () {
        openModal(index);
      });

      grid.appendChild(card);
    });
  }

  // ── Modal ──────────────────────────────────────────────────────────
  function openModal(postIndex) {
    currentPostIndex = postIndex;
    currentImageIndex = 0;
    updateModal();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateModal() {
    var post = posts[currentPostIndex];
    var images = post.images;
    var total = images.length;

    // Image
    modalImage.src = images[currentImageIndex];
    modalImage.alt = firstLine(post.caption);

    // Date + caption
    modalDate.textContent = formatDate(post.date);
    modalCaption.textContent = post.caption;

    // Arrows
    modalPrev.classList.toggle('is-hidden', total <= 1 || currentImageIndex === 0);
    modalNext.classList.toggle('is-hidden', total <= 1 || currentImageIndex === total - 1);

    // Dots
    modalDots.innerHTML = '';
    if (total > 1) {
      images.forEach(function (_, i) {
        var dot = document.createElement('span');
        dot.className = 'news_modal_dot' + (i === currentImageIndex ? ' is-active' : '');
        dot.setAttribute('aria-hidden', 'true');
        modalDots.appendChild(dot);
      });
    }
  }

  function prevImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateModal();
    }
  }

  function nextImage() {
    var total = posts[currentPostIndex].images.length;
    if (currentImageIndex < total - 1) {
      currentImageIndex++;
      updateModal();
    }
  }

  // ── Init ───────────────────────────────────────────────────────────
  function init() {
    grid          = document.getElementById('newsGrid');
    modal         = document.getElementById('newsModal');
    modalBackdrop = document.getElementById('newsModalBackdrop');
    modalImage    = document.getElementById('newsModalImage');
    modalDate     = document.getElementById('newsModalDate');
    modalCaption  = document.getElementById('newsModalCaption');
    modalPrev     = document.getElementById('newsModalPrev');
    modalNext     = document.getElementById('newsModalNext');
    modalDots     = document.getElementById('newsModalDots');
    modalClose    = document.getElementById('newsModalClose');

    if (!grid || !modal) return;

    // Load posts
    fetch('data/news.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        posts = data;
        renderGrid();
      })
      .catch(function (err) {
        console.warn('news.json could not be loaded', err);
      });

    // Modal controls
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', prevImage);
    modalNext.addEventListener('click', nextImage);

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });

    // Touch / swipe support in modal
    var touchStartX = 0;
    modalImage.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    modalImage.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) nextImage();
        else prevImage();
      }
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
