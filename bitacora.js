$(document).ready(function () {
  fetch("http://localhost:8080/bitacora/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((resData) => {
      let registros = resData;
      console.log(registros);
      for (var i = 0; i < registros.length; i++) {
        let htmlText =
          "<tr>" +
          "<td>" +
          registros[i].fecha +
          "</td>" +
          "<td>" +
          registros[i].hora +
          "</td>" +
          "<td>" +
          registros[i].calculo +
          "</td>" +
          "</tr>";
        $(".registros").append(htmlText);
      }
    })

    .catch((err) => console.log(err));
});
