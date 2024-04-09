document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('aluno-form');
    const listaAlunos = document.getElementById('aluno-list');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
      
      if (nome && idade) {
        const aluno = {
          nome: nome,
          idade: idade
        };
        
        adicionarAluno(aluno);
        limparFormulario();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
    
    function adicionarAluno(aluno) {
      const itemLista = document.createElement('li');
      itemLista.textContent = `Nome: ${aluno.nome}, Idade: ${aluno.idade}`;
      listaAlunos.appendChild(itemLista);
    }
    
    function limparFormulario() {
      document.getElementById('nome').value = '';
      document.getElementById('idade').value = '';
    }
  });

  