document.getElementById('btn-addJogo').addEventListener('click', function() {
   
    const cadastrar = document.getElementById('cadastra');
    const listaJogos = document.getElementById('listaJogo');
    const jogo = cadastrar.value;

    if (jogo.trim() !== ""){
        const li = document.createElement('li');
        li.textContent = jogo;
        listaJogos.appendChild(li);
        // Salvar no localStorge (Fazer)
        salvarJogo()
        cadastrar.value = "";
    }
    function salvarJogo(){
        const listaJogos = document.getElementById('listaJogo');
        let jogo = []
        for(let i=0;i < listaJogos.children.length; i++){
            jogo.push(listaJogos.children[i].textContent)
        }
        localStorage.setItem('jogo', JSON.stringify(jogo));
    }
    
    function carregarJogo(){
        const jogo = JSON.parse(localStorage.getItem('jogo') || []);
        
    }
});