// テーマ取得処理
const htmlElement = document.getElementsByTagName("html")[0];

let theme = localStorage.getItem("ismem_theme");

// テーマが保存されていない場合、または0の場合は、ユーザーの端末のテーマ設定を取得する
if (theme === null || theme === "0") {
    localStorage.setItem("ismem_theme", "0");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (prefersDarkScheme) {
        theme = "2";
    } else if (prefersLightScheme) {
        theme = "1";
    } else {
        theme = "1"; // テーマが不明の場合はライトテーマを適用
    }
}

if (theme === "1") {
    htmlElement.setAttribute("data-bs-theme", "light");
} else if (theme === "2") {
    htmlElement.setAttribute("data-bs-theme", "dark");
}
