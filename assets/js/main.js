nome = prompt("Nome completo:");
tagh1.innerHTML = "Nome: " + nome;

nasc = prompt("Qual a sua data de nascimento?");

anos = prompt("Qual a sua idade?");

temdoenca = confirm("Tem alguma doença pré-existente?")
if (temdoenca) {
    doenca = "Sim"
}
if (temdoenca == false) {
    doenca = "Não"
}

temmedico = confirm("Tem acompanhamento médico?")
if (temmedico) {
    acomMedc = "Sim"
}
if (temmedico == false) {
    acomMedc = "Não"
}

lista.innerHTML =
    `<li> Data de Nascimento: ${nasc} </li>
  <li> Qual a sua idade? ${anos} anos</li>
  <li> Possui alguma doença pré existente: ${doenca} </li>
  <li> Precisa de acompanhamento médico: ${acomMedc} </li>`