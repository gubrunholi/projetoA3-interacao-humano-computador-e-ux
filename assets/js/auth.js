// StreamHub - Auth (validação + persistência local)
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function bindCadastro() {
  const f = document.getElementById('form-cadastro');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const name = f.name.value.trim();
    const email = f.email.value.trim().toLowerCase();
    const pass = f.password.value;
    const err = document.getElementById('cad-error');
    err.textContent = '';
    if (name.length < 2) return err.textContent = 'Nome inválido.';
    if (!validEmail(email)) return err.textContent = 'E-mail inválido.';
    if (pass.length < 6) return err.textContent = 'Senha deve ter no mínimo 6 caracteres.';
    if (Storage.findUser(email)) return err.textContent = 'E-mail já cadastrado.';
    Storage.addUser({ name, email, password: pass });
    Storage.setSession({ name, email });
    Toast.show('Conta criada com sucesso!', 'success');
    setTimeout(() => location.href = 'dashboard.html', 700);
  });
}

function bindLogin() {
  const f = document.getElementById('form-login');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const email = f.email.value.trim().toLowerCase();
    const pass = f.password.value;
    const err = document.getElementById('login-error');
    err.textContent = '';
    const u = Storage.findUser(email);
    if (!u || u.password !== pass) return err.textContent = 'Credenciais inválidas.';
    Storage.setSession(u);
    Toast.show(`Bem-vindo de volta, ${u.name}!`, 'success');
    setTimeout(() => location.href = 'dashboard.html', 700);
  });
}

document.addEventListener('DOMContentLoaded', () => { bindCadastro(); bindLogin(); });
