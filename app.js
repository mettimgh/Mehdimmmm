
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").innerText = now.toLocaleDateString("fa-IR", options);

const newsContainer = document.getElementById("news-container");
newsContainer.innerHTML = `
  <ul>
    <li style="color: green;">افزایش نرخ بهره آمریکا باعث رشد دلار شد</li>
    <li style="color: red;">تنش سیاسی در خاورمیانه باعث کاهش قیمت نفت شد</li>
    <li style="color: green;">ورود پول هوشمند به بورس ایران</li>
  </ul>
`;
