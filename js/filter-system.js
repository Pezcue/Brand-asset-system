// Manages combined filters and search
class FilterSystem {
  constructor() {
    this.state = {
      category: 'all',
      format: 'all',
      orientation: 'all',
      search: ''
    };
    this.subscribers = [];
  }

  update(partial) {
    this.state = { ...this.state, ...partial };
    this.emit();
  }

  onChange(cb) { this.subscribers.push(cb); }
  emit() { this.subscribers.forEach(cb => cb(this.state)); }

  apply(assets) {
    const { category, format, orientation, search } = this.state;
    return assets.filter(asset => {
      const matchesCategory = category === 'all' || asset.category === category;
      const matchesFormat = format === 'all' || (asset.formatGroups || []).includes(format);
      const matchesOrientation = orientation === 'all' || asset.orientation === orientation;
      const matchesSearch = !search ||
        asset.name.toLowerCase().includes(search) ||
        (asset.description || '').toLowerCase().includes(search);
      return matchesCategory && matchesFormat && matchesOrientation && matchesSearch;
    });
  }
}
