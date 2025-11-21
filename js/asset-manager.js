// Simple asset manager: loads JSON and normalizes format groups
const AssetManager = (() => {
  const formatGroups = {
    vector: ['svg', 'ai', 'eps'],
    raster: ['png', 'jpg', 'jpeg'],
    animation: ['gif'],
    video: ['mp4'],
    document: ['pdf', 'docx'],
    font: ['otf', 'ttf'],
    package: ['zip'],
    image: ['image']
  };

  async function loadAssets() {
    try {
      const res = await fetch('data/assets.json');
      if (!res.ok) throw new Error('Failed to load assets.json');
      const data = await res.json();
      return data.map(normalizeAsset);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  function normalizeAsset(asset) {
    const formats = asset.formats || [];
    const groups = new Set();
    formats.forEach(f => {
      const ext = (f.ext || f.label || '').toLowerCase();
      Object.entries(formatGroups).forEach(([group, list]) => {
        if (list.includes(ext)) groups.add(group);
      });
    });
    return { ...asset, formatGroups: Array.from(groups) };
  }

  return { loadAssets, formatGroups };
})();
