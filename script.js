document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.panel-section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.target;

      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      sections.forEach(section => {
        section.style.display = section.id === targetId ? 'block' : 'none';
      });
    });
  });

  setupLogoTabs();
  setupColorTabs();
  setupLegacyToggle();
  setupCopyButtons();
});

function setupLogoTabs() {
  const logoTabs = document.querySelectorAll('#sectionLogo .tab-btn');
  const label = document.getElementById('logoColorLabel');
  const logoCards = document.querySelectorAll('.logo-card .placeholder.shape');
  const moreMessage = document.getElementById('logoMoreMessage');

  logoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      logoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const colorName = target === 'primary' ? 'Primary' : target === 'black' ? 'Black' : 'White';
      label.textContent = target === 'more' ? 'More variants in progress' : `Current color: ${colorName}`;

      if (target === 'more') {
        moreMessage.style.display = 'block';
      } else {
        moreMessage.style.display = 'none';
      }

      const tone = target === 'black' ? '#cfd4da' : target === 'white' ? '#e5e9ee' : '#d9dfe6';
      logoCards.forEach(card => {
        card.style.background = target === 'more' ? '#d9dfe6' : tone;
      });
    });
  });
}

function setupColorTabs() {
  const colorTabs = document.querySelectorAll('#sectionColors .tab-btn');
  const colorGroups = document.querySelectorAll('.color-grid');

  colorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      colorTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      colorGroups.forEach(group => {
        group.classList.toggle('hidden', group.dataset.group !== target);
      });
    });
  });
}

function setupLegacyToggle() {
  const toggleRow = document.getElementById('legacyToggle');
  const legacyContainer = document.getElementById('legacyLogos');
  const caret = toggleRow.querySelector('.caret');
  const label = toggleRow.querySelector('.toggle-label');

  toggleRow.addEventListener('click', () => {
    const isHidden = legacyContainer.classList.contains('hidden');
    legacyContainer.classList.toggle('hidden');
    caret.innerHTML = isHidden ? '&#9662;' : '&#9656;';
    label.textContent = isHidden ? 'Hide legacy logos' : 'Show legacy logos';
  });
}

function setupCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const status = document.getElementById('copyStatus');
  let hideTimeout;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const swatch = btn.closest('.swatch');
      const color = swatch.dataset.color;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(color).then(() => showStatus(`Color copied: ${color}`));
      } else {
        alert(`Copy this color: ${color}`);
      }
    });
  });

  function showStatus(message) {
    clearTimeout(hideTimeout);
    status.textContent = message;
    hideTimeout = setTimeout(() => {
      status.textContent = '';
    }, 1000);
  }
}
