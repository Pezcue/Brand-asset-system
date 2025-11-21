const formatPriority = {
  svg: 0,
  ai: 1,
  eps: 2,
  png: 10,
  jpg: 11,
  jpeg: 12,
  gif: 13,
  mp4: 14,
  pdf: 15,
  docx: 16,
  zip: 17,
  otf: 18,
  image: 19
};

const assetManifest = [
  // Logos (vector & raster)
  { name: 'MP+ primary mark', file: 'Assets/logos/MP+.svg', type: 'logo', format: 'svg' },
  { name: 'MP+ primary mark (AI)', file: 'Assets/logos/ai/MP+.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ primary mark (EPS)', file: 'Assets/logos/MP+.eps', type: 'logo', format: 'eps' },
  { name: 'MP+ horizontal', file: 'Assets/logos/MP+ horizontal.svg', type: 'logo', format: 'svg' },
  { name: 'MP+ horizontal (PNG)', file: 'Assets/logos/MP+ horizontal.png', type: 'logo', format: 'png' },
  { name: 'MP+ horizontal (JPG)', file: 'Assets/logos/MP+ horizontal.jpg', type: 'logo', format: 'jpg' },
  { name: 'MP+ horizontal (AI)', file: 'Assets/logos/ai/MP+ horizontal.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ horizontal white (AI)', file: 'Assets/logos/ai/MP+ horizontal white.ai', type: 'logo', format: 'ai' },
  { name: 'Logo lockup CMYK (AI)', file: 'Assets/logos/ai/MP_logo-lockup_cmyk.ai', type: 'logo', format: 'ai' },
  { name: 'Logo vertical (AI)', file: 'Assets/logos/ai/MP_logo-vertical.ai', type: 'logo', format: 'ai' },
  { name: 'Logo lockup CMYK (EPS)', file: 'Assets/logos/MP_logo-lockup_cmyk.eps', type: 'logo', format: 'eps' },
  { name: 'Logo lockup CMYK (JPG)', file: 'Assets/logos/MP_logo-lockup_cmyk.jpg', type: 'logo', format: 'jpg' },
  { name: 'Logo lockup white (PNG)', file: 'Assets/logos/MP_logo-lockup_white.png', type: 'logo', format: 'png' },
  { name: 'Logo lockup white (EPS)', file: 'Assets/logos/MP_logo-lockup_white.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark black (EPS)', file: 'Assets/logos/MP_logo-mark_black.epsy', type: 'logo', format: 'eps' },
  { name: 'Logo mark black (PNG)', file: 'Assets/logos/MP_logo-mark_black.png', type: 'logo', format: 'png' },
  { name: 'Logo mark cmyk (EPS)', file: 'Assets/logos/MP_logo-mark_cmyk.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark cmyk (PNG)', file: 'Assets/logos/MP_logo-mark_cmyk.png', type: 'logo', format: 'png' },
  { name: 'Logo mark white (EPS)', file: 'Assets/logos/MP_logo-mark_white.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark white (PNG)', file: 'Assets/logos/MP_logo-mark_white.png', type: 'logo', format: 'png' },
  { name: 'Vector file MP logo (SVG)', file: 'Assets/logos/Vector file MP logo.svg', type: 'logo', format: 'svg' },
  { name: 'Vector file MP logo (AI)', file: 'Assets/logos/ai/Vector file MP logo.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ white blue background', file: 'Assets/logos/MP+ white blue bg.png', type: 'logo', format: 'png' },
  { name: 'MP+ white', file: 'Assets/logos/MP+ white.png', type: 'logo', format: 'png' },
  { name: 'MP+ PDF', file: 'Assets/logos/MP+.pdf', type: 'logo', format: 'pdf' },
  { name: 'MP+ GIF', file: 'Assets/logos/MP+.gif', type: 'logo', format: 'gif' },

  // Animation / motion
  { name: 'Logo animation GIF', file: 'Assets/logos/MP_Gif.gif', type: 'animation', format: 'gif' },
  { name: 'Motion reel', file: 'Assets/multimedia/MP Engineers 3D.mp4', type: 'motion', format: 'mp4' },
  { name: 'Lottie MP', file: 'Assets/multimedia/lottieMP.mp4', type: 'motion', format: 'mp4' },
  { name: 'Lottie MP alt', file: 'Assets/multimedia/lottieMP_1.mp4', type: 'motion', format: 'mp4' },
  { name: 'FSK Bridge', file: 'Assets/multimedia/FSKBridge6.mp4', type: 'motion', format: 'mp4' },
  { name: 'MP Not Lottie', file: 'Assets/multimedia/MPnotLottie.mp4', type: 'motion', format: 'mp4' },

  // Documents & packs
  { name: 'MP Style Guide June 2025', file: 'Assets/documents/MP Style Guide June 2025.pdf', type: 'document', format: 'pdf' },
  { name: 'Style Guide', file: 'Assets/documents/Style Guide.pdf', type: 'document', format: 'pdf' },

  // Archives / packs
  { name: 'Logo pack archive', file: 'Assets/logos/legacy/MP Engineers+Architects_Logo Art.zip', type: 'archive', format: 'zip' },

  // Fonts
  { name: 'Myriad Pro Regular', file: 'Assets/1. MP Engineers Logo/EasySigns_-_Tension_Fabric_Displays_Straight_8Ft_x_7Ft_3\"_-_Artwork_Template_-_V2_Folder/Fonts/MyriadPro-Regular.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 65 Medium', file: 'Assets/1. MP Engineers Logo/EasySigns_-_Tension_Fabric_Displays_Straight_8Ft_x_7Ft_3\"_-_Artwork_Template_-_V2_Folder/Fonts/NHaasGroteskDSStd-65Md.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk TX 55 Regular', file: 'Assets/1. MP Engineers Logo/MP + Various colors vertical_Folder/Fonts/NHaasGroteskTXStd-55Rg.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk TX 55 Regular (horizontal set)', file: 'Assets/1. MP Engineers Logo/MP + Various colors_ Horizontal/Fonts/NHaasGroteskTXStd-55Rg.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 45 Light', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-45Lt.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 55 Regular', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-55Rg.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 65 Medium (bundle)', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-65Md.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 75 Bold', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-75Bd.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 95 Black', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-95Blk.otf', type: 'font', format: 'otf' },

  // Photos / backgrounds
  { name: 'Zoom background', file: 'Assets/images/Image20251119162949.png', type: 'image', format: 'image' },
  { name: 'Photography A', file: 'Assets/images/Image20251119163022.png', type: 'photo', format: 'image' },
  { name: 'Photography B', file: 'Assets/images/Image20251119163053.jpg', type: 'photo', format: 'image' }
];

let currentType = 'logo';
let currentTypeLabel = 'Logos';
let currentFormat = 'all';
let currentFormatLabel = 'All formats';
let currentVariant = 'all';
let currentVariantLabel = 'All types';

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
  setupLogoTypeFilter();
  renderLogoGrid();
  renderLegacyLogos();
  renderZoomBackground();
  renderPhotography();
  renderMotionSection();
  renderPresentations();
  renderFonts();
});

function setupLogoTabs() {
  const logoTabs = document.querySelectorAll('#sectionLogo .tab-btn');
  logoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.format || 'all';
      logoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFormat = target;
      currentFormatLabel = tab.textContent.trim();
      updateStatusText();
      applyLogoFilters();
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

function setupLogoTypeFilter() {
  const variantButtons = document.querySelectorAll('.logo-filter .filter-btn');
  if (!variantButtons.length) return;

  variantButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      if (e.preventDefault) e.preventDefault();
      variantButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentVariant = btn.dataset.variant || 'all';
      currentVariantLabel = btn.textContent.trim();
      updateStatusText();
      applyLogoFilters();
    });
  });

  updateStatusText();
}

function applyLogoFilters() {
  const cards = document.querySelectorAll('#logoGrid .logo-card');
  cards.forEach(card => {
    const type = card.dataset.type;
    const subtype = card.dataset.subtype;
    const variant = card.dataset.variant;
    let show = true;

    // Always logo grid: type must be logo
    if (type !== 'logo') show = false;

    // Format filter (logos only)
    if (show && currentFormat !== 'all') {
      if (subtype !== currentFormat) show = false;
    }

    // Variant filter
    if (show && currentVariant !== 'all') {
      if (variant !== currentVariant) show = false;
    }

    card.style.display = show ? '' : 'none';
  });
}

function mapTypeFromFormat(format, assetType) {
  const fmt = (format || '').toLowerCase();
  const t = (assetType || '').toLowerCase();
  if (t === 'background' || t === 'photo') return 'image';
  if (t === 'video') return 'motion';
  if (t === 'document') return 'document';
  if (t === 'font') return 'font';
  if (t === 'package') return 'archive';
  if (t === 'animation') return 'animation';
  if (t) return t;

  if (['svg', 'ai', 'eps', 'png', 'jpg', 'jpeg'].includes(fmt)) return 'logo';
  if (fmt === 'gif') return 'animation';
  if (fmt === 'mp4') return 'motion';
  if (fmt === 'pdf' || fmt === 'docx') return 'document';
  if (fmt === 'zip') return 'archive';
  if (fmt === 'otf') return 'font';
  if (fmt === 'image') return 'image';
  return 'logo';
}

function mapSubtypeFromFormat(format) {
  const fmt = (format || '').toLowerCase();
  if (['svg', 'ai', 'eps'].includes(fmt)) return 'vector';
  if (['png', 'jpg', 'jpeg'].includes(fmt)) return 'raster';
  if (fmt === 'gif') return 'gif';
  if (fmt === 'pdf') return 'pdf';
  return '';
}

function mapVariantFromAsset(asset) {
  const source = `${asset.name} ${asset.file}`.toLowerCase();
  if (source.includes('white')) return 'white';
  if (source.includes('black')) return 'black';
  if (source.includes('horizontal')) return 'horizontal';
  if (source.includes('square') || source.includes('favicon')) return 'square';
  return 'all';
}

function updateStatusText() {
  const status = document.getElementById('logoTypeStatus');
  const label = document.getElementById('logoColorLabel');
  if (status) {
    status.textContent = `Current filter: ${currentTypeLabel} - ${currentFormatLabel} - ${currentVariantLabel}`;
  }
  if (label) {
    label.textContent = `Format filter: ${currentFormatLabel}`;
  }
}

function renderLogoGrid() {
  const logoGrid = document.getElementById('logoGrid');
  const moreMessage = document.getElementById('logoMoreMessage');
  const logos = assetManifest
    .filter(asset => asset.type === 'logo')
    .sort((a, b) => {
      const pa = formatPriority[a.format] ?? 99;
      const pb = formatPriority[b.format] ?? 99;
      return pa - pb || a.name.localeCompare(b.name);
    });

  logoGrid.innerHTML = '';

  const filtered = logos;

  if (!filtered.length) {
    logoGrid.innerHTML = '<p>No logo assets available for this filter.</p>';
    moreMessage.textContent = '';
    moreMessage.style.display = 'none';
    return;
  }

  filtered.forEach(asset => {
    const card = document.createElement('div');
    card.className = 'logo-card';
    const mappedType = mapTypeFromFormat(asset.format, asset.type);
    const mappedSubtype = mappedType === 'logo' ? mapSubtypeFromFormat(asset.format) : '';
    const mappedVariant = mapVariantFromAsset(asset);
    card.dataset.type = mappedType;
    if (mappedSubtype) card.dataset.subtype = mappedSubtype;
    card.dataset.variant = mappedVariant;
    card.dataset.ext = asset.format;

    if (asset.format === 'svg' || ['png', 'jpg', 'jpeg', 'gif'].includes(asset.format)) {
      const img = document.createElement('img');
      img.src = asset.file;
      img.alt = asset.name;
      img.className = 'logo-preview';
      card.appendChild(img);
    } else if (asset.format === 'pdf') {
      const embed = document.createElement('embed');
      embed.src = `${asset.file}#page=1&zoom=80`;
      embed.type = 'application/pdf';
      embed.className = 'doc-embed';
      card.appendChild(embed);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder shape';
      placeholder.textContent = asset.format.toUpperCase();
      if (asset.format === 'ai') {
        placeholder.title = 'Preview unavailable. Export a PNG/SVG/PDF for inline preview.';
      }
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

  moreMessage.textContent = `Showing ${filtered.length} assets`;
  moreMessage.style.display = 'block';
  applyLogoFilters();
}

function renderZoomBackground() {
  const zoomAsset = assetManifest.find(asset => asset.type === 'image' && asset.name.toLowerCase().includes('zoom'));
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
  const photos = assetManifest
    .filter(asset => asset.type === 'photo')
    .sort((a, b) => a.name.localeCompare(b.name));

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
  const videos = assetManifest.filter(asset => asset.type === 'motion');

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
  const documents = assetManifest
    .filter(asset => asset.type === 'document' || asset.type === 'archive')
    .sort((a, b) => a.name.localeCompare(b.name));

  stack.innerHTML = '';

  if (!documents.length) {
    stack.innerHTML = '<p>No documents or packs available.</p>';
    return;
  }

  documents.forEach(asset => {
    const card = document.createElement('div');
    card.className = 'presentation-card';

    if (asset.format === 'pdf') {
      const embed = document.createElement('embed');
      embed.src = `${asset.file}#page=1&zoom=90`;
      embed.type = 'application/pdf';
      embed.className = 'doc-embed';
      card.appendChild(embed);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'presentation-placeholder';
      placeholder.textContent = asset.format.toUpperCase();
      if (asset.format === 'ai') {
        placeholder.title = 'Preview unavailable. Export PNG/SVG/PDF for inline preview.';
      }
      card.appendChild(placeholder);
    }

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

function renderFonts() {
  const grid = document.getElementById('fontGrid');
  const fonts = assetManifest.filter(asset => asset.type === 'font').sort((a, b) => a.name.localeCompare(b.name));

  grid.innerHTML = '';

  if (!fonts.length) {
    grid.innerHTML = '<p>No fonts found.</p>';
    return;
  }

  fonts.forEach(asset => {
    const card = document.createElement('div');
    card.className = 'font-card';

    const title = document.createElement('div');
    title.className = 'font-name';
    title.textContent = asset.name;
    card.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'font-meta';
    meta.textContent = asset.format.toUpperCase();
    card.appendChild(meta);

    const download = document.createElement('a');
    download.className = 'download-btn';
    download.href = asset.file;
    download.download = asset.file.split('/').pop();
    download.textContent = 'Download';
    card.appendChild(download);

    grid.appendChild(card);
  });
}

function renderLegacyLogos() {
  const container = document.getElementById('legacyLogos');
  const legacyAssets = assetManifest
    .filter(asset => asset.type === 'legacy')
    .sort((a, b) => (b.year || '').localeCompare(a.year || '') || (b.date || '').localeCompare(a.date || '') || a.name.localeCompare(b.name));

  container.innerHTML = '';

  if (!legacyAssets.length) {
    container.innerHTML = '<p>No legacy logos available.</p>';
    return;
  }

  const grouped = legacyAssets.reduce((acc, asset) => {
    const key = asset.year || 'Legacy';
    if (!acc[key]) acc[key] = [];
    acc[key].push(asset);
    return acc;
  }, {});

  Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .forEach(year => {
      const groupWrapper = document.createElement('div');
      groupWrapper.className = 'legacy-group';

      const yearLabel = document.createElement('div');
      yearLabel.className = 'legacy-year';
      yearLabel.textContent = year;
      groupWrapper.appendChild(yearLabel);

      const grid = document.createElement('div');
      grid.className = 'legacy-grid';

      grouped[year]
        .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.name.localeCompare(b.name))
        .forEach(asset => {
          const card = document.createElement('div');
          card.className = 'legacy-card';

          if (asset.format === 'pdf') {
            const embed = document.createElement('embed');
            embed.src = `${asset.file}#page=1&zoom=80`;
            embed.type = 'application/pdf';
            embed.className = 'doc-embed';
            card.appendChild(embed);
          } else {
            const thumb = document.createElement('div');
            thumb.className = 'legacy-thumb';
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'tif', 'tiff'].includes(asset.format)) {
              thumb.style.backgroundImage = `url(${asset.file})`;
            } else {
              thumb.classList.add('legacy-placeholder');
              thumb.textContent = asset.format.toUpperCase();
              if (asset.format === 'ai') {
                thumb.title = 'Preview unavailable. Export PNG/SVG/PDF for inline preview.';
              }
            }
            card.appendChild(thumb);
          }

          const label = document.createElement('div');
          label.className = 'label';
          label.textContent = asset.name;
          card.appendChild(label);

          const meta = document.createElement('div');
          meta.className = 'legacy-meta';
          meta.textContent = asset.date ? `Date: ${asset.date}` : 'Date: n/a';
          card.appendChild(meta);

          const download = document.createElement('a');
          download.className = 'download-btn';
          download.href = asset.file;
          download.download = asset.file.split('/').pop();
          download.textContent = 'Download';
          card.appendChild(download);

          grid.appendChild(card);
        });

      groupWrapper.appendChild(grid);
      container.appendChild(groupWrapper);
    });
}




