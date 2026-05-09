document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navbarMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const openBtns = document.querySelectorAll('.open-contact-modal');
  const modal = document.getElementById('contact-modal');
  const closeBtn = modal ? modal.querySelector('.contact-modal-close') : null;
  if (openBtns.length > 0 && modal && closeBtn) {
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    });
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const phoneLink = document.getElementById('contact-phone-copy');
  if (phoneLink) {
    phoneLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('+48576404298').then(() => {
        showToast('Numer telefonu został pomyślnie skopiowany!');
      }).catch(err => {
        console.error('Błąd podczas kopiowania: ', err);
        showToast('Nie udało się skopiować numeru telefonu.');
      });
    });
  }
});

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
  }
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
function adjustFloatingPosition() {
  const floating = document.querySelector('.floating');
  const footer = document.querySelector('footer');
  if (!floating || !footer) return;
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (footerRect.top < windowHeight) {
    const overlap = windowHeight - footerRect.top + 24;
    floating.style.bottom = overlap + 'px';
  } else {
    floating.style.bottom = '20px';
  }
}

window.addEventListener('scroll', adjustFloatingPosition);
window.addEventListener('resize', adjustFloatingPosition);
document.addEventListener('DOMContentLoaded', adjustFloatingPosition);
document.addEventListener('DOMContentLoaded', function() {
  const opinieData = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: 'Jan Nowak',
      stars: '★★★★★',
      text: 'Szybko i profesjonalnie, polecam!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      name: 'Anna Zielińska',
      stars: '★★★★★',
      text: 'Świetny kontakt i efekt końcowy 🔥'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      name: 'Marek Krawczyk',
      stars: '★★★★★',
      text: 'Strona wygląda jak za kilka tysięcy!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Katarzyna Wójcik',
      stars: '★★★★★',
      text: 'Bardzo szybka realizacja i świetny design strony.'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      name: 'Tomasz Lewandowski',
      stars: '★★★★★',
      text: 'Wszystko zgodnie z ustaleniami, polecam każdemu!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Ewa Piotrowska',
      stars: '★★★★★',
      text: 'Projekt graficzny przerósł moje oczekiwania.'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      name: 'Paweł Dąbrowski',
      stars: '★★★★★',
      text: 'Bardzo dobry kontakt, szybkie poprawki, super współpraca.'
    }
  ];
  const opinieContainer = document.querySelector('.slider-opinie-content-single');
  const opiniePrev = document.querySelector('.slider-opinie-btn.left');
  const opinieNext = document.querySelector('.slider-opinie-btn.right');
  if (!opinieContainer || !opiniePrev || !opinieNext) return;
  let opinieIndex = 0;
  function renderOpinie(idx, animate = true) {
    const o = opinieData[idx];
    opinieContainer.innerHTML = `
      <div class="slider-opinie-item-single${animate ? ' anim' : ''}">
        <img src="${o.avatar}" alt="${o.name}" class="review-avatar">
        <div class="review-stars">${o.stars}</div>
        <div class="review-name">${o.name}</div>
        <div class="review-text">${o.text}</div>
      </div>
    `;
    setTimeout(() => {
      const item = opinieContainer.querySelector('.slider-opinie-item-single');
      if(item) item.classList.remove('anim');
    }, 350);
  }
  opiniePrev.addEventListener('click', () => {
    opinieIndex = (opinieIndex - 1 + opinieData.length) % opinieData.length;
    renderOpinie(opinieIndex);
  });
  opinieNext.addEventListener('click', () => {
    opinieIndex = (opinieIndex + 1) % opinieData.length;
    renderOpinie(opinieIndex);
  });
  renderOpinie(opinieIndex, false);
});
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let particles = [];
for (let i = 0; i < 80; i++) {
  const hue = 210 + Math.random() * 40;
  const sat = 60 + Math.random() * 30;
  const light = 55 + Math.random() * 25;
  const alpha = 0.45 + Math.random() * 0.25;
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() - 0.5,
    vy: Math.random() - 0.5,
    size: Math.random() * 2 + 1.5,
    color: `hsla(${hue},${sat}%,${light}%,${alpha})`
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if(p.x > canvas.width) p.x = 0;
    if(p.x < 0) p.x = canvas.width;
    if(p.y > canvas.height) p.y = 0;
    if(p.y < 0) p.y = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 18 + p.size * 2;
    ctx.fillStyle = p.color;
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.restore();
  });
  requestAnimationFrame(animate);
}
animate();

const reveals = document.querySelectorAll('.reveal, .review, .portfolio-item');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if(!el) return;
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
