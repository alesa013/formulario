function limpa_formulario_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('complemento').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value(conteudo.logradouro);
        document.getElementById('bairro').value(conteudo.bairro);
        document.getElementById('cidade').value(conteudo.localidade);
        document.getElementById('uf').value(conteudo.uf);
    } else {
        limpa_formulario_cep()
        alert('CEP não  encontrado.');
    }
}
function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Expressão regular para validar o CEP.
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        //Verifica se o campo CEP não está vázio
        if (validacep.test(cep)) {
            //Preenche os campos com "..." enquanto a consulta é realizada
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //cria um elemento javascript
            var script = document.createElement('script')

            //Sicroniza com o callback
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        } else {
            //cep é invalido.
            limpa_formulario_cep();
        }
    }