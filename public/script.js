const listaElement = document.getElementById('lista-convidados');
const nomeInput = document.getElementById('nome');
const form = document.getElementById('form-convidado');

function validarNome(nome) {
  nome = nome.trim();
  if (nome.length === 0) return false;

  const regex = /^[A-Za-zÀ-ú\s\-]+$/;
  return regex.test(nome);
}

function adicionarConvidado(nome) {
  const li = document.createElement('li');
  li.textContent = nome;
  listaElement.appendChild(li);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = nomeInput.value;

  if (!validarNome(nome)) {
    alert('Nome inválido! Use apenas letras, espaços e hífens, e não deixe vazio.');
    nomeInput.focus();
    return;
  }

  adicionarConvidado(nome.trim());
  nomeInput.value = '';
  nomeInput.focus();

  //ALTERAÇÃO
  fetch("/api/guests",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(nome)
  })
  .then(res=> res.json())
  .then(data => {
    console.log("Convidado adicionado:"+nome);
  })
  //ALTERAÇÃO 
});
