let listaDeAmigos = [];

function adicionarAmigo(){ 

     let amigos = document.querySelector('input').value
     
     listaDeAmigos.push(amigos);

     if(amigos == ''){
          alert('Por favor, insira um nome.')
     }

     return exibirListaDeAmigos();
     
     
}

function exibirTexto(tag, listaDeAmigos){
     let campo = document.querySelector(tag);
     campo.innerHTML = listaDeAmigos;

}

function exibirListaDeAmigos(){
     let listaFormatada = listaDeAmigos.map(amigo => `<li>${amigo}</li>`).join('');
     exibirTexto('ul', listaFormatada);
}


function sortearAmigo(){
     let amigoSorteado = Math.floor(Math.random() * listaDeAmigos.length);
     exibirTexto('ul', listaDeAmigos[amigoSorteado]);
}





















// alert(`seu amigo ${amigos} , esta na lista`)