var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    ["error", "load"].forEach(function(event){
        xhr.addEventListener(event, function () {

            var erroAjax = document.querySelector("#erro-ajax");
            if (xhr.status == 200) {
                erroAjax.classList.add("invisivel");
                var resposta = xhr.responseText;
                var pacientes = JSON.parse(resposta);

                pacientes.forEach(function (paciente) {
                    adicionaPacienteNaTabela(paciente);

                });
            } else {
                erroAjax.classList.remove("invisivel");
            }
        });
    });


    xhr.send();
});