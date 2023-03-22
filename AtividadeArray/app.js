var objetos = ['Cadeira', 'Impressora', 'Garfo'];

function adicionarObjeto() {
  var input = document.getElementById("valor");
  var valor = input.value.trim();
  input.value = '';
 
  if (valor === '') {
    console.log("Informe um valor válido");
    return 0;
  }
 
  if (objetos.includes(valor)) {
    console.log("Objeto já foi adicionado");
    return 0;
  }
 
  objetos.push(valor);
  console.log(objetos);
}

function ordenarObjetos() {
  objetos.sort();
  console.log(objetos);
}

document.getElementById("inAdicionar").addEventListener("click", adicionarObjeto);
document.getElementById("inOrdenar").addEventListener("click", ordenarObjetos);