// StreamHub - Storage helpers (LocalStorage)
const Storage = {
  KEYS: { USERS: 'sh_users', SESSION: 'sh_session', FAVS: 'sh_favs', THEME: 'sh_theme' },
  get(k, def=null) { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem(k); },

  getUsers() { return this.get(this.KEYS.USERS, []); },
  addUser(u) { const us = this.getUsers(); us.push(u); this.set(this.KEYS.USERS, us); },
  findUser(email) { return this.getUsers().find(u => u.email === email); },

  getSession() { return this.get(this.KEYS.SESSION); },
  setSession(u) { this.set(this.KEYS.SESSION, { email: u.email, name: u.name, at: Date.now() }); },
  logout() { this.remove(this.KEYS.SESSION); },

  getFavs() { return this.get(this.KEYS.FAVS, []); },
  toggleFav(id) {
    const f = this.getFavs();
    const i = f.indexOf(id);
    if (i >= 0) f.splice(i, 1); else f.push(id);
    this.set(this.KEYS.FAVS, f);
    return f.includes(id);
  },
};
