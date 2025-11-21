const assetManifest = [
  // Logo vectors and rasters
  { name: 'MP+ (primary mark)', file: 'Assets/MP+.svg', type: 'logo', format: 'svg' },
  { name: 'MP+ primary (AI)', file: 'Assets/MP+.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ primary (EPS)', file: 'Assets/MP+.eps', type: 'logo', format: 'eps' },
  { name: 'MP+ horizontal (SVG)', file: 'Assets/MP+ horizontal.svg', type: 'logo', format: 'svg' },
  { name: 'MP+ horizontal (PNG)', file: 'Assets/1. MP Engineers Logo/MP+ horizontal.png', type: 'logo', format: 'png' },
  { name: 'MP+ horizontal (JPG)', file: 'Assets/1. MP Engineers Logo/MP+ horizontal.jpg', type: 'logo', format: 'jpg' },
  { name: 'MP+ horizontal (AI)', file: 'Assets/MP+ horizontal.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ horizontal white (AI)', file: 'Assets/MP+ horizontal white.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ horizontal outlined (AI)', file: 'Assets/1. MP Engineers Logo/MP+ Outlined/MP+ horizontal Outlined.ai', type: 'logo', format: 'ai' },
  { name: 'MP+ mark outlined (AI)', file: 'Assets/1. MP Engineers Logo/MP+ Outlined/MP+ Outlined.ai', type: 'logo', format: 'ai' },
  { name: 'Logo lockup CMYK (AI)', file: 'Assets/MP_logo-lockup_cmyk.ai', type: 'logo', format: 'ai' },
  { name: 'Logo vertical (AI)', file: 'Assets/MP_logo-vertical.ai', type: 'logo', format: 'ai' },
  { name: 'Logo lockup CMYK (PDF)', file: 'Assets/1. MP Engineers Logo/Various old/MP mark.pdf', type: 'logo', format: 'pdf' },
  { name: 'Logo lockup CMYK (EPS)', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-lockup_cmyk.eps', type: 'logo', format: 'eps' },
  { name: 'Logo lockup white PNG', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-lockup_white.png', type: 'logo', format: 'png' },
  { name: 'Logo lockup white EPS', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-lockup_white.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark black EPS', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-mark_black.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark black PNG', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-mark_black.png', type: 'logo', format: 'png' },
  { name: 'Logo mark white EPS', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-mark_white.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark white PNG', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-mark_white.png', type: 'logo', format: 'png' },
  { name: 'Logo mark cmyk EPS', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-mark_cmyk.eps', type: 'logo', format: 'eps' },
  { name: 'Logo mark cmyk PNG', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-mark_cmyk.png', type: 'logo', format: 'png' },
  { name: 'Vector file MP logo (SVG)', file: 'Assets/1. MP Engineers Logo/Various Colors/Vector file MP logo.svg', type: 'logo', format: 'svg' },
  { name: 'Vector file MP logo (AI)', file: 'Assets/1. MP Engineers Logo/Various Colors/Vector file MP logo.ai', type: 'logo', format: 'ai' },
  { name: 'Side lockup (SVG)', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/MP_logo-side-lockup.svg', type: 'logo', format: 'svg' },
  { name: 'Horizontal pack (ZIP)', file: 'Assets/1. MP Engineers Logo/Horizontal MP+ Edit/MP + Various colors H.zip', type: 'package', format: 'zip' },
  { name: 'Vertical pack (ZIP)', file: 'Assets/1. MP Engineers Logo/MP + Various colors vertical_Folder/Vertical MP+.zip', type: 'package', format: 'zip' },
  { name: 'Horizontal bundle (ZIP)', file: 'Assets/1. MP Engineers Logo/MP + Various colors_ Horizontal/MP+ Horizontal.zip', type: 'package', format: 'zip' },
  { name: 'Logo art bundle (ZIP)', file: 'Assets/1. MP Engineers Logo/z_Old/MP Engineers+Architects_Logo Art.zip', type: 'package', format: 'zip' },

  // Legacy logos (z_Old) grouped by year/date
  { name: 'MP LOGO color (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color (JPG)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color.jpg', type: 'legacy', format: 'jpg', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color (PNG)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color.png', type: 'legacy', format: 'png', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO grayscale', file: 'Assets/1. MP Engineers Logo/z_Old/MP_LOGO_Grayscale.jpg', type: 'legacy', format: 'jpg', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO white (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_white.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only - Blue (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color graphic only - Blue.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only - Black (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color graphic only - Black.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only - White (PNG)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color graphic only -White.png', type: 'legacy', format: 'png', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only 5x5 (JPG)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color graphic only 5x5-01.jpg', type: 'legacy', format: 'jpg', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only - Black (PDF)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color graphic only - Black.pdf', type: 'legacy', format: 'pdf', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color (revised AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MP LOGO_color_rev.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only (GIF)', file: 'Assets/1. MP Engineers Logo/z_Old/MPEA-LOGO_color.gif', type: 'legacy', format: 'gif', year: '2025', date: '2025-11-21' },
  { name: 'MP LOGO color graphic only (GIF alt)', file: 'Assets/1. MP Engineers Logo/z_Old/MP-LOGO.gif.gif', type: 'legacy', format: 'gif', year: '2025', date: '2025-11-21' },
  { name: 'MPE LOGO color (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MPE LOGO_color.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MPEA LOGO color (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MPEA LOGO_color.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'MPEA LOGO white (AI)', file: 'Assets/1. MP Engineers Logo/z_Old/MPEA LOGO_white.ai', type: 'legacy', format: 'ai', year: '2025', date: '2025-11-21' },
  { name: 'Logo summary (PDF)', file: 'Assets/1. MP Engineers Logo/z_Old/[Untitled]_2022021715434884.pdf', type: 'legacy', format: 'pdf', year: '2022', date: '2022-02-17' },

  // Backgrounds & imagery
  { name: 'Zoom background', file: 'Assets/Image20251119162949.png', type: 'background', format: 'image' },
  { name: 'Photography A', file: 'Assets/Image20251119163022.png', type: 'photo', format: 'image' },
  { name: 'Photography B', file: 'Assets/Image20251119163053.jpg', type: 'photo', format: 'image' },

  // Motion
  { name: 'Motion bumper', file: 'Assets/MP Engineers 3D.mp4', type: 'video', format: 'mp4' },

  // Documents & templates
  { name: 'MP Style Guide June 2025', file: 'Assets/MP Style Guide June 2025.pdf', type: 'document', format: 'pdf' },
  { name: 'Style Guide', file: 'Assets/Style Guide.pdf', type: 'document', format: 'pdf' },
  { name: 'Tension Fabric Display template', file: 'Assets/1. MP Engineers Logo/EasySigns_-_Tension_Fabric_Displays_Straight_8Ft_x_7Ft_3\"_-_Artwork_Template_-_V2_Folder/EasySigns_-_Tension_Fabric_Displays_Straight_8Ft_x_7Ft_3\"_-_Artwork_Template_-_V2.pdf', type: 'document', format: 'pdf' },
  { name: 'MP Engineers logo (doc)', file: 'Assets/1. MP Engineers Logo/z_Old/MP Engineers logo.docx', type: 'document', format: 'docx' },
  { name: 'MP Engs Logo wording', file: 'Assets/1. MP Engineers Logo/z_Old/MP Engs Logo-Wording.pdf', type: 'document', format: 'pdf' },
  { name: 'Logo summary', file: 'Assets/1. MP Engineers Logo/z_Old/[Untitled]_2022021715434884.pdf', type: 'document', format: 'pdf' },

  // Fonts
  { name: 'Myriad Pro Regular', file: 'Assets/1. MP Engineers Logo/EasySigns_-_Tension_Fabric_Displays_Straight_8Ft_x_7Ft_3\"_-_Artwork_Template_-_V2_Folder/Fonts/MyriadPro-Regular.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 65 Medium', file: 'Assets/1. MP Engineers Logo/EasySigns_-_Tension_Fabric_Displays_Straight_8Ft_x_7Ft_3\"_-_Artwork_Template_-_V2_Folder/Fonts/NHaasGroteskDSStd-65Md.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk TX 55 Regular', file: 'Assets/1. MP Engineers Logo/MP + Various colors vertical_Folder/Fonts/NHaasGroteskTXStd-55Rg.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk TX 55 Regular (horizontal set)', file: 'Assets/1. MP Engineers Logo/MP + Various colors_ Horizontal/Fonts/NHaasGroteskTXStd-55Rg.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 45 Light', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-45Lt.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 55 Regular', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-55Rg.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 65 Medium', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-65Md.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 75 Bold', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-75Bd.otf', type: 'font', format: 'otf' },
  { name: 'Neue Haas Grotesk Std 95 Black', file: 'Assets/1. MP Engineers Logo/MP Engineers+Architects_Logo Art & Font/Neue Haas Grotesk/Neue Haas Grotesk/NHaasGroteskDSStd-95Blk.otf', type: 'font', format: 'otf' }
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
  renderLegacyLogos();
  renderZoomBackground();
  renderPhotography();
  renderMotionSection();
  renderPresentations();
  renderFonts();
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
  const documents = assetManifest
    .filter(asset => asset.type === 'document' || asset.type === 'package')
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
