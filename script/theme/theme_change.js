// テーマ設定変更処理
window.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById("themeSelect");

  window.onload = function () {
    const savedTheme = localStorage.getItem("ismem_theme");
    if (savedTheme !== null) {
      selectElement.value = savedTheme;
    }
  };

  selectElement.addEventListener("change", function () {
    const selectedTheme = selectElement.value;
    localStorage.setItem("ismem_theme", selectedTheme);
    location.reload();
  });
});
