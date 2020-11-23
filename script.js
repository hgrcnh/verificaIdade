function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fAno.value.length == 0 || fAno.value > ano) {
    alert(`[Erro] Verifique os dados e tente novamente `);
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fAno.value;
    var genero = "";

    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "https://i.imgur.com/WQqoYlv.png");
      } else if (idade < 21) {
        img.setAttribute("src", "https://i.imgur.com/Gq4aS5q.png");
      } else if (idade < 50) {
        img.setAttribute("src", "https://i.imgur.com/Yp0zBgW.png");
      } else {
        img.setAttribute("src", "https://i.imgur.com/I2RqUhX.png");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "https://i.imgur.com/fUhAn11.png");
      } else if (idade < 21) {
        img.setAttribute("src", "https://i.imgur.com/Xrs3xH9.png");
      } else if (idade < 50) {
        img.setAttribute("src", "https://i.imgur.com/YbnwZF6.png");
      } else {
        img.setAttribute("src", "https://i.imgur.com/rqoQw7G.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = ` Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
