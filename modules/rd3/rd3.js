function regraDe3() {
  const x = document.getElementById("val1").value; //3
  const y = document.getElementById("val2").value; //120
  const z = document.getElementById("val3").value; //6
  const invProp = document.querySelector("#invProp:checked") !== null;

  // A Equação usada na regra de 3 é: Valor 3 * Valor 2 / Valor 1
  if (invProp == false) {
    var resp = (z * y) / x;
    console.log(resp, invProp);
  }
  //A Equação da regra de 3 inversamente proporcional é: Valor 1 * Valor 2 / Valor 3
  if (invProp == true) {
    var resp = (x * y) / z;
    console.log(resp);
  }
  document.getElementById("resposta").innerHTML = resp;
}
