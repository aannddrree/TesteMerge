const url = 'https://viacep.com.br/ws/$cep/json/';

function findCEP(){
    var cep = document.getElementById("cep").value; 
    var urlWithCEP = url.replaceAll("$cep", cep).replaceAll("-","");
    loadDoc(urlWithCEP);
}

function loadDoc(urlWithCEP) {
    this.getJSON(urlWithCEP, function(err, data) {

        //RETORNO DO SERVIÇO:
        console.log("cep: " + data.cep);
        console.log("logradouro: " + data.logradouro);
        console.log("complemento: " + data.complemento);
        console.log("bairro: " + data.bairro);
        console.log("localidade: " + data.localidade);
        console.log("uf: " + data.uf);
        console.log("ibge: " + data.ibge);
        console.log("gia: " + data.gia);
        console.log("ddd: " + data.ddd);
        console.log("siafi: " + data.siafi);

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("localidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;

    });
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest(); //XMLHttpRequest é um objeto que 
                                    //fornece funcionalidade ao cliente para 
                                    //transferir dados entre um cliente e um servidor.
									
    var teste = "TesteMergeAndre";
	xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

