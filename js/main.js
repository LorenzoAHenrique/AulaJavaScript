function clicou(){
    //alert("Obrigado por clicar");
     //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Github</b>";
}   
function redirecionar(){
    window.open("https://github.com/LorenzoAHenrique/");
    //window.location.href = "https://github.com/LorenzoAHenrique/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "BemAqui";
    //alert("trocar texto");
    elemento.innerHTML = "Errou";
}
function voltar(elemento){
   //document.getElementById("mousemove").innerHTML = "Passa o mouse aqui";
    elemento.innerHTML = "???????";
}  

function essemesmo(){

    document.getElementById("diferente").innerHTML = "Achou";
}  


function enigma(){
    window.location.href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
}

function load(){
    alert("Enigma Carregado");
}

function funcaochange(elemento) {
    console.log(elemento.value)
    
}
/*
function soma(n1, n2){
    return n1 + n2;

}

var validar = 0;

 function validaridade(idade){
    validar;
    if (idade >=18){
         validar = true
     }else{
         validar = false
     }
     return validar;
 }

var idade = prompt("Qual sua idade?");
validaridade(idade);
console.log(validar);

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));


var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

var count;
for(count=0; count <= 5; count++){
    alert(count);

};


var count = 0;
while (count <= 10){
    console.log(count);
    alert(count);
    count++;
};

var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
};


var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);

console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "));

var nome = "Lorenzo Henrique";
var n1 = "2";
var n2 = "9";
var idade = n1 * n2;
var frase = "Lorem ipsum dolor sit amet"
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
alert(frase.replace("Lorem ipsum dolor sit amet","É nóis na fita menó."));
console.log(frase.toUpperCase());
console.log(frase.replace("Lorem ipsum dolor sit amet", "Example"));
console.log(nome);
console.log(n1 * n2);
alert(nome + " tem " + idade);
*/