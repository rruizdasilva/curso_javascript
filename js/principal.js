var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <=0 || peso >=1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <=0 || altura >=3.00){

        console.log("Altura inválida");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    var tdImc = paciente.querySelector(".info-imc");

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }

}

var botaoAdicionar = document.querySelector(("#adicionar-paciente"));
botaoAdicionar.addEventListener("click",function(){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var trPaciente = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    trPaciente.appendChild(tdNome);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(trPaciente);
});
