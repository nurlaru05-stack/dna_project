function compareUniversities() {
  const uni1 = document.getElementById("uni1").value;
  const uni2 = document.getElementById("uni2").value;
  const result = document.getElementById("compare-result");

  if (uni1 === "0" || uni2 === "0") {
    result.innerHTML = "<p>Выберите оба университета для сравнения.</p>";
    return;
  }

  if (uni1 === uni2) {
    result.innerHTML = "<p>Вы выбрали один и тот же университет.</p>";
    return;
  }

  result.innerHTML = `
    <h3>Сравнение:</h3>
    <p>Университет 1: ${uni1}</p>
    <p>Университет 2: ${uni2}</p>
    <p>Здесь можно вывести сравнение программ, рейтинга, стоимости и возможностей.</p>
  `;
}