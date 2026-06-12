// StreamHub - main.js
// Lógica geral: tema, navbar, mock de streams, chat simulado, toasts

const STREAMS = [
  { id: 's1', title: 'Speedrun Elden Ring - Tentando World Record', user: 'NovaPlay', cat: 'Elden Ring', viewers: 24531, thumb: 'assets/images/thumb-1.jpg' },
  { id: 's5', title: 'CS2 Ranked - Subindo até Global', user: 'Fallen', cat: 'CS2', viewers: 18921, thumb: 'assets/images/thumb-5.jpg' },
  { id: 's8', title: 'TCK - Valorant Todos os atos', user: 'TCK', cat: 'Valorant', viewers: 9412, thumb: 'assets/images/thumb-8.jpg' },
];

const CATEGORIES = ['Todas', 'CS2', 'Valorant', 'Elden Ring'];

function fmtViewers(n) {
  if (n >= 1000) return (n/1000).toFixed(1).replace('.0','') + 'K';
  return n.toString();
}

function streamCard(s) {
  return `
    <article class="card fade-in" data-id="${s.id}">
      <a href="stream.html?id=${s.id}" aria-label="Assistir ${s.title}">
        <div class="card-thumb">
          <img src="${s.thumb}" alt="" loading="lazy">
          <span class="live-badge">AO VIVO</span>
          <span class="viewers">${fmtViewers(s.viewers)} espectadores</span>
        </div>
      </a>
      <div class="card-body">
        <div class="card-avatar" aria-hidden="true">${s.user[0]}</div>
        <div class="card-info">
          <div class="card-title">${s.title}</div>
          <div class="card-meta">${s.user}</div>
          <div class="card-category">${s.cat}</div>
        </div>
      </div>
    </article>`;
}

function renderStreams(containerId, list = STREAMS) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.map(streamCard).join('');
}

function renderChips(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CATEGORIES.map((c,i) => `<button class="chip ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
  el.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    el.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const cat = b.dataset.cat;
    const list = cat === 'Todas' ? STREAMS : STREAMS.filter(s => s.cat === cat);
    renderStreams('grid-streams', list);
  });
}

function initTheme() {
  const saved = Storage.get(Storage.KEYS.THEME, 'dark');
  if (saved === 'light') document.body.classList.add('light');
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const mode = document.body.classList.contains('light') ? 'light' : 'dark';
      Storage.set(Storage.KEYS.THEME, mode);
      btn.textContent = mode === 'light' ? '🌙' : '☀️';
      Toast.show(`Tema ${mode === 'light' ? 'claro' : 'escuro'} ativado.`);
    });
  }
}

function renderNavSession() {
  const slot = document.getElementById('nav-session');
  if (!slot) return;
  const s = Storage.getSession();
  if (s) {
    slot.innerHTML = `
      <a class="nav-link" href="perfil.html">${s.name}</a>
      <button class="icon-btn" id="logout-btn" title="Sair" aria-label="Sair">↪</button>`;
    document.getElementById('logout-btn').addEventListener('click', () => {
      Storage.logout();
      Toast.show('Sessão encerrada.');
      setTimeout(() => location.href = 'index.html', 600);
    });
  } else {
    slot.innerHTML = `
      <a class="nav-link" href="login.html">Entrar</a>
      <a class="btn btn-primary" href="cadastro.html">Cadastrar</a>`;
  }
}


const Toast = {
  stack: null,
  ensure() {
    if (!this.stack) {
      this.stack = document.createElement('div');
      this.stack.className = 'toast-stack';
      this.stack.setAttribute('role', 'status');
      this.stack.setAttribute('aria-live', 'polite');
      document.body.appendChild(this.stack);
    }
  },
  show(msg, type='info') {
    this.ensure();
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    this.stack.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }
};

function initStreamPage() {
  if (!document.getElementById('stream-page')) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || 's1';
  const s = STREAMS.find(x => x.id === id) || STREAMS[0];
  document.getElementById('streamer-name').textContent = s.user;
  document.getElementById('stream-title').textContent = s.title;
  document.getElementById('stream-category').textContent = s.cat;
  document.getElementById('stream-avatar').textContent = s.user[0];
  document.getElementById('viewers-count').textContent = `${fmtViewers(s.viewers)} assistindo`;
  const vf = document.querySelector('.video-frame');
  if (vf) vf.style.setProperty('--video-thumb', `url('${s.thumb}')`);
  document.title = `${s.user} • ${s.title} — StreamHub`;

  // Chat simulado
  const msgs = document.getElementById('chat-messages');
  const sample = [
    ['user1','GG'], ['user2','Manda salve'], ['user3','LETSGOOO'],
    ['user5','primeira vez aqui, gostei demais'], ['user5','Lembrem das regras do chat.'],
  ];
  let i = 0;
  const tick = () => {
    if (!msgs) return;
    const [u, m] = sample[i % sample.length];
    const el = document.createElement('div');
    el.className = 'chat-msg';
    el.innerHTML = `<span class="user">${u}:</span>${m}`;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    i++;
  };
  for (let k=0;k<5;k++) tick();
  setInterval(tick, 3500);

  const form = document.getElementById('chat-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    const v = input.value.trim(); if (!v) return;
    const s = Storage.getSession();
    const el = document.createElement('div');
    el.className = 'chat-msg';
    el.innerHTML = `<span class="user">${s ? s.name : 'Você'}:</span>${v}`;
    msgs.appendChild(el); msgs.scrollTop = msgs.scrollHeight;
    input.value = '';
  });

  // Favoritar
  const favBtn = document.getElementById('fav-btn');
  if (favBtn) {
    const update = () => {
      const isF = Storage.getFavs().includes(s.id);
      favBtn.textContent = isF ? '★ Favoritado' : '☆ Favoritar';
    };
    update();
    favBtn.addEventListener('click', () => {
      if (!Storage.getSession()) { Toast.show('Faça login para favoritar.', 'error'); return; }
      const now = Storage.toggleFav(s.id);
      Toast.show(now ? 'Adicionado aos favoritos!' : 'Removido dos favoritos.', 'success');
      update();
    });
  }
}

// ============ PERFIL ============
function initPerfil() {
  if (!document.getElementById('perfil-page')) return;
  const s = Storage.getSession();
  if (!s) { location.href = 'login.html'; return; }
  document.getElementById('p-name').textContent = s.name;
  document.getElementById('p-email').textContent = s.email;
  document.getElementById('p-avatar').textContent = s.name[0].toUpperCase();
  document.getElementById('p-favs').textContent = Storage.getFavs().length;

  const favList = STREAMS.filter(x => Storage.getFavs().includes(x.id));
  const wrap = document.getElementById('favs-grid');
  if (wrap) wrap.innerHTML = favList.length ? favList.map(streamCard).join('') :
    `<p style="color:var(--text-muted)">Você ainda não favoritou nenhum stream.</p>`;
}

// ============ SEARCH ============
function initSearch() {
  const inp = document.getElementById('nav-search-input');
  if (!inp) return;
  inp.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    const grid = document.getElementById('grid-streams');
    if (!grid) return;
    const list = STREAMS.filter(s =>
      s.title.toLowerCase().includes(q) || s.user.toLowerCase().includes(q) || s.cat.toLowerCase().includes(q)
    );
    renderStreams('grid-streams', list);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavSession();
  renderStreams('grid-streams');
  renderStreams('grid-trending', STREAMS.slice(0,4));
  renderChips('chips');
  initStreamPage();
  initPerfil();
  initSearch();
});
