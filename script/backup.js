import { LSCtrl } from "./lsctrl.js";

document.getElementById('btn-download').addEventListener('click', () => {
  const txt = JSON.stringify(LSCtrl.get_datas_JSON());
  const blob = new Blob([txt], { type: "text/plain" });
  const link = document.createElement('a');
  const date = new Date();
  const date_str = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2) + ('0' + date.getHours()).slice(-2) + ('0' + date.getMinutes()).slice(-2) + ('0' + date.getSeconds()).slice(-2);
  link.download = 'ismem-data-' + date_str + '.txt';
  link.href = URL.createObjectURL(blob);
  link.click();
  link.remove();
});

const showOpenFileDialog = () => {
  return new Promise(resolve => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt, text/plain';
    input.onchange = event => { resolve(event.target.files[0]); };
    input.click();
  });
};

const readAsText = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => { resolve(reader.result); };
  });
};

document.getElementById('btn-repair').addEventListener('click', () => {
  let result_first = window.confirm('※※警告※※\n復元時に現在保存されているデータがすべて上書きされます。\n復元を実行しますか？');
  if (result_first) {
    try {
      (async () => {
        const file = await showOpenFileDialog();
        const content = await readAsText(file);
        // 内容表示
        let result_second = window.confirm('※※警告※※\n' + file.name + 'のデータを書き込みます。\n本当に復元を実行しますか？\n（現在保存されているデータがすべて上書きされます）');
        if (result_second) {
          localStorage.setItem('ismem-data', content);
          alert('復元が完了しました。ホームに戻ります。');
          location.href = './index.html';
        } else {
          alert('復元をキャンセルしました。')
        }
      })();
    } catch(e) {
      alert('復元に失敗しました。');
    }
  }
  else {
    alert('復元をキャンセルしました。');
  }
});
