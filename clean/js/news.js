/**
 * News Grid & Modal
 * Post data is embedded inline — no fetch() needed, works on file:// and GitHub Pages.
 * Click a card to open a modal with image carousel + full caption.
 */

(function () {
  'use strict';

  var posts = [
    {
      "id": "2025-02-20",
      "date": "2025-02-20",
      "caption": "✨ Workshop Recap: Yoga & Sound Healing mit Glikeria\n\nLetztes Wochenende haben wir uns zu einem unvergesslichen Sound Healing Workshop zusammengefunden. Glikeria hat den Raum mit Klang, Atem und tiefer Stille gefüllt – eine Stunde, die sich wie ein halber Tag angefühlt hat.\n\nVielen Dank an alle, die dabei waren – eure Energie hat den Raum zum Leuchten gebracht. 🙏\n\nNächster Workshop kommt bald – folgt uns, um nichts zu verpassen.\n\n#JivamuktiyogaDüsseldorf #SoundHealing #YogaDüsseldorf #Workshop",
      "images": [
        "assets/images/studio/studio-detail-1.jpg",
        "assets/images/studio/studio-detail-2.jpg",
        "assets/images/studio/studio-detail-3.jpg"
      ]
    },
    {
      "id": "2025-02-13",
      "date": "2025-02-13",
      "caption": "🌿 Neue Lehrerin im Team: Herzlich willkommen, Martyna!\n\nWir freuen uns riesig, Martyna in unserem Lehrerteam begrüßen zu dürfen. Martyna bringt ihre tiefe Leidenschaft für Jivamukti Yoga, ihren warmen Humor und eine unglaubliche Energie in jede Klasse.\n\nIhre ersten Klassen starten ab März – schaut in den Kursplan!\n\n#JivamuktiyogaDüsseldorf #NeuesTeamMitglied #JivamuktiyogaLehrerin",
      "images": [
        "assets/images/martyna-workshop.jpg"
      ]
    },
    {
      "id": "2025-02-05",
      "date": "2025-02-05",
      "caption": "💫 Community Event: Vollmond-Yoga\n\nWas für ein magischer Abend. Bei unserem monatlichen Vollmond-Yoga haben wir uns im Kerzenschein zum gemeinsamen Üben getroffen – ruhig, verbunden, präsent.\n\nDas nächste Vollmond-Event findet im März statt. Anmeldung über den Link in der Bio.\n\nDanke für diese Gemeinschaft. Ihr macht alles möglich. 🌕\n\n#Vollmond #YogaNight #Community #JivamuktiyogaDüsseldorf",
      "images": [
        "assets/images/home-community.jpg",
        "assets/images/community-events.jpg",
        "assets/images/quote-hero-1.jpg"
      ]
    },
    {
      "id": "2025-01-28",
      "date": "2025-01-28",
      "caption": "🎓 75HR Teacher Training – Nächste Runde startet im April!\n\nDu willst Jivamukti Yoga unterrichten? Dann ist unser 75HR Foundational Teacher Training genau das Richtige für dich.\n\nDas Training findet bei uns im Studio statt und vermittelt dir die Grundlagen der Jivamukti-Tradition – von der Methode und Philosophie über Sequencing bis hin zum praktischen Unterrichten.\n\nPlätze sind begrenzt. Alle Infos und Anmeldung über den Link in der Bio oder direkt auf unserer Website.\n\n#75HRTeacherTraining #JivamuktiyogaTeacher #Yoga #Ausbildung",
      "images": [
        "assets/images/75h-event-hero.png",
        "assets/images/jtap-books.jpg"
      ]
    },
    {
      "id": "2025-01-17",
      "date": "2025-01-17",
      "caption": "🌸 Workshop mit Dana: Yin Yoga & Restorative Practice\n\nEin intensiver, aber zutiefst heilender Nachmittag mit Dana. Yin Yoga trifft auf Restorative Practice – zwei Stunden, in denen der Körper loslassen durfte, was er schon lange festgehalten hat.\n\nWir sind dankbar für jeden einzelnen von euch, der sich die Zeit nimmt, innezuhalten und zu sich zurückzukehren.\n\nNächster Yin-Workshop: Ende Februar. Details folgen bald!\n\n#YinYoga #Restorative #DanaWorkshop #JivamuktiyogaDüsseldorf",
      "images": [
        "assets/images/dana-workshop.png",
        "assets/images/pose-1.jpg",
        "assets/images/pose-2.jpg",
        "assets/images/pose-3.jpg"
      ]
    },
    {
      "id": "2025-01-08",
      "date": "2025-01-08",
      "caption": "🕊️ Neues Jahr, neue Energie\n\nWir sind zurück – frisch, neugierig und voller Vorfreude auf alles, was 2025 bringt.\n\nUnser Studio öffnet wieder am 9. Januar. Der reguläre Kursplan gilt ab sofort. Schaut auf der Website oder direkt bei Momence vorbei für alle Termine.\n\nWir freuen uns auf euch. Möge dieses Jahr von Praxis, Gemeinschaft und innerem Wachstum geprägt sein. 🙏✨\n\n#JivamuktiyogaDüsseldorf #NeuesJahr2025 #Yoga #Jivamukti",
      "images": [
        "assets/images/home-classes.jpg"
      ]
    },
    {
      "id": "2024-12-19",
      "date": "2024-12-19",
      "caption": "🎄 Winter Special: Yoga am Heiligabend\n\nDieses Jahr laden wir euch ein, den 24. Dezember mit einer besonderen Morgenpraxis zu beginnen – ruhig, meditativ, verbunden.\n\nOffen für alle Levels. Bringt eine Freundin oder einen Freund mit. Eintritt frei für alle, die zum ersten Mal bei uns vorbeischauen.\n\nDetails: 24. Dezember, 10:00 Uhr. Anmeldung über den Link in der Bio.\n\nWir wünschen euch eine friedvolle Weihnachtszeit. 🤍\n\n#Weihnachten #YogaWeihnachten #JivamuktiyogaDüsseldorf #Community",
      "images": [
        "assets/images/studio/studio-detail-4.jpg",
        "assets/images/home-hero.jpg"
      ]
    },
    {
      "id": "2024-12-05",
      "date": "2024-12-05",
      "caption": "📚 Jivamukti Focus of the Month: Dezember\n\n\"Seva\" – selbstloser Dienst. Das ist das Thema dieses Monats.\n\nIn unseren Klassen werden wir erforschen, wie Yoga weit über die Matte hinausgeht. Wie können wir durch unsere Praxis, unsere Worte und unsere Handlungen zur Welt beitragen?\n\nSeva bedeutet, ohne Erwartung zu geben – aus einem Herzen voller Dankbarkeit heraus.\n\nWir freuen uns auf diesen Monat mit euch. 🙏\n\n#FocusOfTheMonth #Seva #Jivamukti #YogaPhilosophy",
      "images": [
        "assets/images/jtap-books.jpg"
      ]
    }
  ];

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

    renderGrid();

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
