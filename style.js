let nome = "stephanie";
let sobrenome = "pimenta";
console.log (nome, typeof (nome));
console.log(nome + " " + sobrenome);
console.log(true,typeof (true));
const PI = 3.1416;
console.log(PI, typeof(PI));

let opcao = confirm("Deseja proseguir?");
if (opcao == true){
    alert("Òtima escolha, vamos ver oque temos pela frente...");
}else{
    alert("Otima escolha, hoje para,ps por aqui!");
}

function proc(){
    console.log("Entrou na função proc()!");
    let n = document.getElementById("nome").value;
    console.log(n);
    let r = document.getElementById("resultados");
    console.log(r);

    r.innerHTML += "<p>" + n + "</p>";
}