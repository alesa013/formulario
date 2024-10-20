function consultaCep() {
    let cep = document.getElementById("cep").value;

//Verificar se o CEP for diferente, não é CEP válido.
    if (cep.length !==8) {
        alert("CEP inválido!");
        return; //sai da função e não continua.
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

  //Passa uma função e espera o parâmetro "response".
    fetch(url).then(function(response){
        //converte para objeto, e espera a função que vai receber os dados.
        response.json().then(function(data) {
            if (data.erro) {
                alert("CEP não encontrado!");
            }
            mostrarDados(data);
        });
    }).catch(function(erro){
        console.log("Erro na requisição", error);
    });
}

function mostrarDados(dados){
    document.getElementById("logradouro").value = dados.logradouro;
    document.getElementById("complemento").value = dados.complemento;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("uf").value = dados.uf;
}




