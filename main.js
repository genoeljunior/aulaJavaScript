/*
var frase = "Japão é o melhor time do mundo";
var lista = ["maça", "pera", "laranja"];
var fruta = {nome : "maça", cor: "vermelha"};

var frutas = [  {nome: fruta.nome, cor: fruta.cor},
                {nome: "uva", cor: "roxa"}
            ];


lista.push("uva");

console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());

console.log(lista[(lista.length)-1]);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(fruta.nome);
console.log(frutas[0]);

var idade = prompt("Qual sua idade? ");

if (idade >=18) {
    console.log("maior de idade");
    var i = 0;
    while (i < 5) {
        console.log(i);
    i++;
}
} else {
    console.log("menor de idade");
    var i;
    for (i=0; i<idade;i++){
        console.log(i);
    }
}

var d = new Date();
alert(d.getDay()+"/"+(d.getMonth())+"/"+d.getTime());
function soma(n1, n2){
    return n1 + n2;
}

var n1 = parseInt(prompt("Digite o primeiro valor:")) ;
var n2 = parseInt(prompt("Digite o segundo valor:"));

console.log(soma(n1, n2));
*/
function clicou() {
    alert("Obrigado por clicar!!!");
    document.getElementById("agradecer").innerHTML="Obrigado mesmo!!!";
};

function redireciona(){
    window.location.href = "http://blessdesign.com.br/";
};

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function fchange(elemento){
    console.log(elemento.value);
}