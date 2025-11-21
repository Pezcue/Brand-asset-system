document.addEventListener('DOMContentLoaded', init);

async function init() {
  const filterSystem = new FilterSystem();
  const allAssets = await AssetManager.loadAssets();
  const state = { assets: allAssets };

  wireFilters(filterSystem);
  filterSystem.onChange(current => render(current, state));

  renderSpecial(allAssets);
  filterSystem.emit(); // initial render

  document.getElementById('searchInput').addEventListener('input', e => {
    filterSystem.update({ search: e.target.value.trim().toLowerCase() });
  });
  document.getElementById('resetFilters').addEventListener('click', () => {
    resetFiltersUI();
    filterSystem.update({ category: 'all', format: 'all', orientation: 'all', search: '' });
    document.getElementById('searchInput').value = '';
  });

  setupModal();
}

function wireFilters(filterSystem) {
  hookButtonGroup('formatNav', 'format', filterSystem);
  hookButtonGroup('orientationFilters', 'orientation', filterSystem);
}

function hookButtonGroup(id, key, filterSystem) {
  document.getElementById(id).addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    [...e.currentTarget.children].forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    filterSystem.update({ [key]: e.target.dataset[key] });
  });
}

function resetFiltersUI() {
  ['formatNav','orientationFilters'].forEach(id => {
    const group = document.getElementById(id);
    group.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    const first = group.querySelector('[data-format="all"],[data-orientation="all"]');
    if (first) first.classList.add('active');
  });
}

function render(filterState, ctx) {
  const filtered = (new FilterSystem()).apply.call({ state: filterState }, ctx.assets); // reuse logic
  renderAssets(filtered);
  document.getElementById('resultCount').textContent = `${filtered.length} assets`;
}

function renderAssets(assets) {
  const grid = document.getElementById('assetGrid');
  grid.innerHTML = '';

  if (!assets.length) {
    grid.innerHTML = '<p class="helper-text">No assets match these filters.</p>';
    return;
  }

  assets.forEach(asset => {
    const card = document.createElement('article');
    card.className = 'card';

    card.appendChild(renderCardHeader(asset));
    card.appendChild(renderPreview(asset));
    card.appendChild(renderMeta(asset));
    card.appendChild(renderActions(asset));

    grid.appendChild(card);
  });
}

function renderCardHeader(asset) {
  const header = document.createElement('div');
  header.className = 'card-header';

  const title = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = asset.name;
  const desc = document.createElement('div');
  desc.className = 'helper-text';
  desc.textContent = asset.description || '';
  title.appendChild(h4);
  title.appendChild(desc);

  const badges = document.createElement('div');
  badges.className = 'badges';
  (asset.formatGroups || []).forEach(group => {
    const b = document.createElement('span');
    b.className = `badge ${group}`;
    b.textContent = group;
    badges.appendChild(b);
  });

  header.appendChild(title);
  header.appendChild(badges);
  return header;
}

function renderPreview(asset) {
  const preview = document.createElement('div');
  preview.className = 'preview';

  const formats = asset.formats || [];
  const first = formats[0];

  if (!first) {
    preview.innerHTML = '<div class="placeholder">No preview</div>';
    return preview;
  }

  const ext = (first.ext || '').toLowerCase();
  if (['png','jpg','jpeg','gif','svg'].includes(ext)) {
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = first.url;
    img.alt = asset.name;
    preview.appendChild(img);
  } else if (ext === 'mp4') {
    const vid = document.createElement('video');
    vid.controls = true;
    vid.preload = 'metadata';
    vid.src = first.url;
    preview.appendChild(vid);
  } else if (ext === 'pdf') {
    const emb = document.createElement('embed');
    emb.type = 'application/pdf';
    emb.src = `${first.url}#page=1&zoom=80`;
    preview.appendChild(emb);
  } else {
    const ph = document.createElement('div');
    ph.className = 'placeholder';
    ph.textContent = `Preview unavailable (${ext})`;
    preview.appendChild(ph);
  }

  return preview;
}

function renderMeta(asset) {
  const meta = document.createElement('div');
  meta.className = 'meta';
  const orientation = document.createElement('span');
  orientation.textContent = asset.orientation || '—';
  const size = document.createElement('span');
  size.textContent = asset.size || '';
  meta.appendChild(orientation);
  if (asset.size) meta.appendChild(size);
  return meta;
}

function renderActions(asset) {
  const wrap = document.createElement('div');
  wrap.className = 'card-actions';

  const previewBtn = document.createElement('button');
  previewBtn.className = 'ghost-btn';
  previewBtn.innerHTML = svgIcon('eye') + ' Preview';
  previewBtn.addEventListener('click', () => openPreview(asset));
  wrap.appendChild(previewBtn);

  (asset.formats || []).forEach(fmt => {
    const btn = document.createElement('button');
    btn.className = 'primary-btn';
    btn.innerHTML = svgIcon('download') + ` ${fmt.ext.toUpperCase()}`;
    btn.addEventListener('click', () => triggerDownload(fmt.url, `${asset.slug || asset.name}.${fmt.ext}`));
    wrap.appendChild(btn);
  });

  return wrap;
}

function svgIcon(name) {
  const icons = {
    eye: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 5c-5 0-9 4-9 7s4 7 9 7 9-4 9-7-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>`,
    download: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5 20h14v-2H5v2zM11 4v8.17l-2.59-2.59L7 11l5 5 5-5-1.41-1.41L13 12.17V4h-2z"/></svg>`
  };
  return icons[name] || '';
}

function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || '';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function renderSpecial(assets) {
  renderColors(assets.filter(a => a.category === 'colors'));
  renderFontsShowcase(assets.filter(a => a.category === 'typography'));
}

function renderColors(list) {
  const section = document.getElementById('specialColors');
  const grid = document.getElementById('colorPalettes');
  if (!list.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = '';
  list.forEach(palette => {
    const card = document.createElement('div');
    card.className = 'palette-card';
    const title = document.createElement('div');
    title.className = 'meta';
    title.textContent = palette.name;
    const swatches = document.createElement('div');
    swatches.className = 'swatches';
    (palette.swatches || []).forEach(hex => {
      const sw = document.createElement('div');
      sw.className = 'swatch';
      sw.style.background = hex;
      const label = document.createElement('span');
      label.textContent = hex;
      sw.appendChild(label);
      swatches.appendChild(sw);
    });
    card.appendChild(title);
    card.appendChild(swatches);
    grid.appendChild(card);
  });
}

function renderFontsShowcase(list) {
  const section = document.getElementById('specialTypography');
  const grid = document.getElementById('fontShowcase');
  if (!list.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = '';
  list.forEach(font => {
    const card = document.createElement('div');
    card.className = 'font-card';
    const title = document.createElement('div');
    title.className = 'meta';
    title.textContent = font.name;
    const sample = document.createElement('div');
    sample.className = 'font-sample';
    sample.style.fontFamily = font.fontFamily || 'serif';
    sample.textContent = font.sample || 'The quick brown fox jumps over the lazy dog.';
    card.appendChild(title);
    card.appendChild(sample);
    grid.appendChild(card);
  });
}

// Preview modal
function setupModal() {
  document.getElementById('closePreview').addEventListener('click', closePreview);
  document.getElementById('previewModal').addEventListener('click', e => {
    if (e.target.classList.contains('modal-backdrop')) closePreview();
  });
}
function openPreview(asset) {
  const modal = document.getElementById('previewModal');
  const body = document.getElementById('previewBody');
  const meta = document.getElementById('previewMeta');
  body.innerHTML = '';
  meta.textContent = '';

  const fmt = (asset.formats || [])[0];
  if (!fmt) {
    body.innerHTML = '<div class="placeholder">No preview</div>';
  } else {
    const ext = fmt.ext.toLowerCase();
    if (['png','jpg','jpeg','gif','svg'].includes(ext)) {
      const img = document.createElement('img');
      img.src = fmt.url;
      img.alt = asset.name;
      body.appendChild(img);
    } else if (ext === 'mp4') {
      const vid = document.createElement('video');
      vid.src = fmt.url;
      vid.controls = true;
      vid.autoplay = true;
      body.appendChild(vid);
    } else if (ext === 'pdf') {
      const emb = document.createElement('embed');
      emb.src = `${fmt.url}#page=1&zoom=100`;
      emb.type = 'application/pdf';
      body.appendChild(emb);
    } else {
      body.innerHTML = `<div class="placeholder">Preview unavailable (${ext}). Download to view.</div>`;
    }
  }

  meta.textContent = `${asset.name} · ${asset.orientation || '—'} · ${asset.size || ''}`;
  modal.classList.remove('hidden');
}
function closePreview() {
  document.getElementById('previewModal').classList.add('hidden');
}
