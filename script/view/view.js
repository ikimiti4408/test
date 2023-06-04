import { LSCtrl } from "../lsctrl.js";

const day_of_week_format = ['日','月','火','水','木','金','土'];
let tb_elem = document.getElementById('view_table');

function main() {
  let ls_datas = LSCtrl.get_datas_JSON();
  let add_html = "";
  ls_datas.forEach(e => {
    let sid = e['sid'];
    let name = e['name'];
    let num_medal = e['num_medal'];
    let deadline = e['deadline'];

    let now = new Date();
    let now_date = new Date(now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate());
    let d_date = new Date(deadline[0] + '/' + deadline[1] + '/' + deadline[2])
    let days_left = Math.floor((d_date - now_date) / (1000 * 60 * 60 * 24));
    let countdown_text = "";
    if (days_left >= 1) countdown_text = '残り' + days_left + '日';
    else if (days_left == 0) countdown_text = '期限最終日';
    else countdown_text = '期限切れ'

    add_html += '<tr>';
    add_html += '<td>' + name + '</td>';
    add_html += '<td>' + countdown_text + '（' + deadline[1] + '/' + deadline[2] + ' ' + day_of_week_format[d_date.getDay()] + '）</td>';
    add_html += '<td>' + Number(num_medal).toLocaleString() + '枚' + '</td>';
    add_html += '<td>' + '<button type="button" class="btn btn-secondary" onclick="edit_open(\'' + sid + '\')"><i class="bi bi-pencil" style="font-size: 1.1rem;"></i></button>' + '</td>';
    add_html += '</tr>';
  });
  tb_elem.innerHTML += add_html;
}

main();
