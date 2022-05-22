let operacion = document.querySelector("#operacion");
operacion.addEventListener("click", () => {
  var horas = document.getElementById("horas").value;
  var litros = document.getElementById("litros").value;
  var dias = document.getElementById("dias").value;
  var resultadoTexto = document.getElementById("resultado");
  var resultado = dias * litros * horas;
  fetch("http://localhost:8080/registro", {
    method: "POST",
    body: JSON.stringify({
      calculo: resultado,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      alert(resData);
    })
    .catch((err) => alert(err));
  resultadoTexto.innerHTML = resultado;
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  document.getElementById("horas").value = 0;
  document.getElementById("litros").value = 0;
  document.getElementById("dias").value = 0;
  var resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerHTML = "0";
});
