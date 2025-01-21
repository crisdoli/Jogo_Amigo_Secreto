//Variavel tipo Array para armazenar a lista de amigos
let amigos = [];

//Função que recebe o nome e faz as verificações antes de adicionar a lista de amigos
function adicionarAmigo(){
    let inputDado = document.querySelector('input').value;
    
    if(inputDado == ''){
        //console.log('Digite um nome')
        alert('Por favor, insira um nome!');
    }else if(amigos.includes(inputDado)){
        alert('Você já digitou esse nome!');
        limpaCampo();
    }else{
        amigos.push(inputDado);     
        console.log(amigos);
        exibirAmigos();
        limpaCampo();
    }
    
};

//Função para limpar o campo Input de nomes
function limpaCampo(){
    inputDado = document.querySelector('input')
    inputDado.value = ''
    
};

//Função para exibir a lista de amigos
function exibirAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

   
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
};

//Função para realizar o sorteio aleatório do amigo secreto
function sortearAmigo(){
    let nomes = Math.floor(Math.random() * amigos.length)
    let nomeSorteado = amigos[nomes]
    console.log(nomeSorteado)
    let meuSorteado = document.getElementById('resultado')
    meuSorteado.innerHTML = `Seu amigo secreto é: ${nomeSorteado}`
};



