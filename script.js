const assetManifest = [
  { name: 'MP+ (primary mark)', file: 'Assets/MP+.svg', type: 'logo', format: 'svg' },
  { name: 'MP+ horizontal (SVG)', file: 'Assets/MP+ horizontal.svg', type: 'logo', format: 'svg' },
  { name: 'MP+ horizontal (AI)', file: 'Assets/MP+ horizontal.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ horizontal white (AI)', file: 'Assets/MP+ horizontal white.ai', type: 'logo', format: 'ai' },
  { name: 'Logo lockup CMYK (AI)', file: 'Assets/MP_logo-lockup_cmyk.ai', type: 'logo', format: 'ai' },
  { name: 'Logo vertical (AI)', file: 'Assets/MP_logo-vertical.ai', type: 'logo', format: 'ai' },
  { name: 'Zoom background', file: 'Assets/Image20251119162949.png', type: 'background', format: 'image' },
  { name: 'Photography A', file: 'Assets/Image20251119163022.png', type: 'photo', format: 'image' },
  { name: 'Photography B', file: 'Assets/Image20251119163053.jpg', type: 'photo', format: 'image' },
  { name: 'Motion bumper', file: 'Assets/MP Engineers 3D.mp4', type: 'video', format: 'mp4' },
  { name: 'MP Style Guide June 2025', file: 'Assets/MP Style Guide June 2025.pdf', type: 'document', format: 'pdf' },
  { name: 'Style Guide', file: 'Assets/Style Guide.pdf', type: 'document', format: 'pdf' }
];

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
  renderZoomBackground();
  renderPhotography();
  renderMotionSection();
  renderPresentations();
});

function setupLogoTabs() {
  const logoTabs = document.querySelectorAll('#sectionLogo .tab-btn');
  const label = document.getElementById('logoColorLabel');
  const moreMessage = document.getElementById('logoMoreMessage');

  logoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      logoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const labelText = target === 'ai' ? 'Illustrator artwork' : target === 'all' ? 'All logo files' : 'SVG vector';
      label.textContent = `Current filter: ${labelText}`;
      renderLogoGrid(target);
      moreMessage.textContent = '';
    });
  });

  renderLogoGrid('svg');
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

function renderLogoGrid(filter) {
  const logoGrid = document.getElementById('logoGrid');
  const moreMessage = document.getElementById('logoMoreMessage');
  const logos = assetManifest
    .filter(asset => asset.type === 'logo')
    .sort((a, b) => a.format.localeCompare(b.format) || a.name.localeCompare(b.name));

  logoGrid.innerHTML = '';

  const filtered = logos.filter(asset => {
    if (filter === 'all') return true;
    return asset.format === filter;
  });

  if (!filtered.length) {
    logoGrid.innerHTML = '<p>No logo assets available for this filter.</p>';
    moreMessage.textContent = '';
    moreMessage.style.display = 'none';
    return;
  }

  filtered.forEach(asset => {
    const card = document.createElement('div');
    card.className = 'logo-card';

    if (asset.format === 'svg') {
      const img = document.createElement('img');
      img.src = asset.file;
      img.alt = asset.name;
      img.className = 'logo-preview';
      card.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder shape';
      placeholder.textContent = asset.format.toUpperCase();
      card.appendChild(placeholder);
    }

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = asset.name;
    card.appendChild(label);

    const download = document.createElement('a');
    download.className = 'download-btn';
    download.href = asset.file;
    download.download = asset.file.split('/').pop();
    download.textContent = 'Download';
    card.appendChild(download);

    logoGrid.appendChild(card);
  });

  moreMessage.textContent = `Showing ${filtered.length} of ${logos.length} logo files`;
  moreMessage.style.display = 'block';
}

function renderZoomBackground() {
  const zoomAsset = assetManifest.find(asset => asset.type === 'background');
  const preview = document.getElementById('zoomPreview');
  const label = document.getElementById('zoomLabel');
  const download = document.getElementById('zoomDownload');

  if (!zoomAsset) {
    label.textContent = 'No background uploaded yet';
    preview.classList.add('empty');
    download.style.display = 'none';
    return;
  }

  preview.style.backgroundImage = `url(${zoomAsset.file})`;
  label.textContent = `${zoomAsset.name} (${zoomAsset.format})`;
  download.href = zoomAsset.file;
  download.textContent = `Download ${zoomAsset.format.toUpperCase()}`;
}

function renderPhotography() {
  const photoGrid = document.getElementById('photoGrid');
  const photos = assetManifest.filter(asset => asset.type === 'photo').sort((a, b) => a.name.localeCompare(b.name));

  photoGrid.innerHTML = '';

  if (!photos.length) {
    photoGrid.innerHTML = '<p>No photography assets available.</p>';
    return;
  }

  photos.forEach(asset => {
    const photo = document.createElement('div');
    photo.className = 'photo-placeholder';
    photo.style.backgroundImage = `url(${asset.file})`;
    photo.title = `${asset.name} (${asset.format})`;

    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';
    overlay.textContent = asset.name;
    photo.appendChild(overlay);

    photoGrid.appendChild(photo);
  });
}

function renderMotionSection() {
  const motionRow = document.getElementById('motionRow');
  const videos = assetManifest.filter(asset => asset.type === 'video');

  motionRow.innerHTML = '';

  if (!videos.length) {
    motionRow.innerHTML = '<p>No motion assets uploaded.</p>';
    return;
  }

  videos.forEach(asset => {
    const card = document.createElement('div');
    card.className = 'lottie-card';

    const video = document.createElement('video');
    video.className = 'lottie-video';
    video.src = asset.file;
    video.controls = true;
    card.appendChild(video);

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = `${asset.name} (${asset.format})`;
    card.appendChild(label);

    const download = document.createElement('a');
    download.className = 'download-btn';
    download.href = asset.file;
    download.download = asset.file.split('/').pop();
    download.textContent = 'Download';
    card.appendChild(download);

    motionRow.appendChild(card);
  });
}

function renderPresentations() {
  const stack = document.getElementById('presentationStack');
  const documents = assetManifest.filter(asset => asset.type === 'document').sort((a, b) => a.name.localeCompare(b.name));

  stack.innerHTML = '';

  if (!documents.length) {
    stack.innerHTML = '<p>No presentation templates available.</p>';
    return;
  }

  documents.forEach(asset => {
    const card = document.createElement('div');
    card.className = 'presentation-card';

    const placeholder = document.createElement('div');
    placeholder.className = 'presentation-placeholder';
    placeholder.textContent = asset.format.toUpperCase();
    card.appendChild(placeholder);

    const footer = document.createElement('div');
    footer.className = 'presentation-footer';

    const title = document.createElement('span');
    title.textContent = asset.name;
    footer.appendChild(title);

    const download = document.createElement('a');
    download.className = 'download-btn';
    download.href = asset.file;
    download.download = asset.file.split('/').pop();
    download.textContent = 'Download';
    footer.appendChild(download);

    card.appendChild(footer);
    stack.appendChild(card);
  });
}
