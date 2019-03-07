var botaoAdicionar = document.querySelector(("#adicionar-paciente"));
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var trPaciente = criaTr(paciente);

    var erros = validaPaciente(paciente);

    console.log(erros);

    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(trPaciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function criaTr(paciente){
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
    trPaciente.appendChild(criaTd(paciente.nome, "info-nome"));
    trPaciente.appendChild(criaTd(paciente.peso, "info-peso"));
    trPaciente.appendChild(criaTd(paciente.altura, "info-altura"));
    trPaciente.appendChild(criaTd(paciente.gordura, "info-gordura"));
    trPaciente.appendChild(criaTd(paciente.imc, "info-imc"));
    return trPaciente;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
    if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
    if(paciente.altura.length == 0) erros.push("A altura não pode ser em branco");
    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    return erros;
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}