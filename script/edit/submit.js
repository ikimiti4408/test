import { LSCtrl } from "../lsctrl.js";

document.getElementById('submit_btn').addEventListener('click', () => {
    let elems_value = {
        "sid": document.getElementById('sid').value,
        "name": document.getElementById('name').value,
        "ruby": document.getElementById('ruby').value,
        "num_available_days_num": document.getElementById('num_available_days_num').value,
        "num_available_days_type": document.getElementById('num_available_days_type').value,
        "deposit_date": document.getElementById('deposit_date').value,
        "deadline": document.getElementById('deadline').value,
        "num_medal": document.getElementById('num_medal').value,
      };
    LSCtrl.add_data_log(elems_value['sid'],elems_value['name'],elems_value['ruby'],[elems_value['num_available_days_type'],elems_value['num_available_days_num']],htmlInputDate_to_arrayDate(elems_value['deposit_date'] + ' 00:00:00'),htmlInputDate_to_arrayDate(elems_value['deadline'] + ' 23:59:59'),false,elems_value['num_medal']);
    alert('データの登録が完了しました。');
    location.href = './index.html';
});

function htmlInputDate_to_arrayDate(str_date){
    let tmp = new Date(str_date);
    return [tmp.getFullYear(),tmp.getMonth()+1,tmp.getDate(),tmp.getHours(),tmp.getMinutes(),tmp.getSeconds()];
}