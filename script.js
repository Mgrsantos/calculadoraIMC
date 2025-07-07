function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || altura <= 0) {
    resultado.innerHTML = "Preencha os campos corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 24.9) classificacao = "Peso normal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else if (imc < 34.9) classificacao = "Obesidade grau 1";
  else if (imc < 39.9) classificacao = "Obesidade grau 2";
  else classificacao = "Obesidade grau 3";

  const gorduraEstimada = (1.2 * imc + 0.23 * 25 - 5.4).toFixed(1); // mulher média com 25 anos
  const pesoIdealMin = (18.5 * altura * altura).toFixed(1);
  const pesoIdealMax = (24.9 * altura * altura).toFixed(1);

  resultado.innerHTML = `
    <strong>IMC:</strong> ${imc.toFixed(1)}<br>
    <strong>Classificação:</strong> ${classificacao}<br>
    <strong>% de Gordura Estimada:</strong> ${gorduraEstimada}%<br>
    <strong>Peso Ideal:</strong> entre ${pesoIdealMin} kg e ${pesoIdealMax} kg
  `;
}
