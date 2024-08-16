let textoBase = document.querySelector('input').value;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Nenhuma mensagem encontrada');
exibirTextoNaTela('p', 'Digite seu texto no campo ao lado para Criptografar...');

function criptografarTexto(textoBase) {
  const textoIndo =  {
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
  };

  let textoCriptografado = "";

  for (let letra of textoBase.toLowerCase()) {
    if (textoIndo.hasOwnProperty(letra)) {
      textoCriptografado += textoIndo[letra];
    } else {
      textoCriptografado += letra;
    }
  }

  return textoCriptografado;

}

function descriptografarTexto(textoBase) {
  const textoVolta = {
    "ufat": "u",
    "ober": "o",
    "imes": "i",
    "enter": "e",
    "ai": "a"
  };

  let textoDescriptografado = textoBase;

  for (let [chave, valor] of Object.entries(textoVolta)) {
    const regex = new RegExp(chave, 'g');
    textoDescriptografado = textoDescriptografado.replace(regex, valor);
  }

  return textoDescriptografado;
}

function exibirResultado(texto) {
  document.getElementById("resultado").value = texto;
  document.querySelector('.imagem__texto__inicial').classList.add('hidden');
  document.querySelector('.resultado__final').classList.remove('hidden');
}

function ocultarResultado() {
  document.querySelector('.imagem__texto__inicial').classList.remove('hidden');
  document.querySelector('.resultado__final').classList.add('hidden');
}

function mostrarResultado() {
  const textoBase = document.getElementById("textoBase").value; 
  const resultado = criptografarTexto(textoBase);
  exibirResultado(resultado);
}

function mostrarResultadoDescriptografado() {
  const textoBase = document.getElementById("textoDescriptografar").value; 
  
  const resultado = descriptografarTexto(textoBase);
  exibirResultado(resultado);
}

/*function mostrarResultadoDescriptografado() {
  const textoBase = document.getElementById("resultado").value; 
  const resultado = descriptografarTexto(textoBase);
  
  if (resultado === "") {
    alert("Texto descriptografado está vazio!");
  }
  
  exibirResultado(resultado);
}*/

function copiarTexto() {
  const resultado = document.getElementById("resultado").value;
  navigator.clipboard.writeText(resultado).then(() => {
      alert("Texto copiado para a área de transferência!");
  });
}