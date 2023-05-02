import { LSCtrl } from "../lsctrl.js";

const URL_HERE = new URL(window.location.href);
const PARAMS = URL_HERE.searchParams;
const PARAM_SID = PARAMS.get('sid');

function init() {

  // sidが追加コードの場合
  if (PARAM_SID == '_add') {
    LSCtrl.new_data();
  }
  // sidが見つからない場合
  else if (LSCtrl.get_data_index(PARAM_SID) === null) {
    alert('データの取得に失敗しました。ホーム画面に戻ります。');
    location.href = './index.html';
    return 0;
  }else{
    LSCtrl.sid = PARAM_SID;
  }

  main();
  return;
}

function main() {
  // 初期データを表示
  let LS_data = LSCtrl.get_data_dict(LSCtrl.sid);

  let elems = {
    "sid": document.getElementById('sid'),
    "name": document.getElementById('name'),
    "ruby": document.getElementById('ruby'),
    "num_available_days_num": document.getElementById('num_available_days_num'),
    "num_available_days_type": document.getElementById('num_available_days_type')
  }

  elems['sid'].value = LS_data['sid'];
  elems['name'].value = LS_data['name'];
  elems['ruby'].value = LS_data['ruby'];
  elems['num_available_days_type'].value = LS_data['num_available_days'][0];
  elems['num_available_days_num'].value = LS_data['num_available_days'][1];

  document.getElementById('header_store_name').textContent = (LS_data['name'] == '' ? '新規' : LS_data['name']);
  if (PARAM_SID == '_add') {
    document.getElementById('basic_accordion_btn').classList.remove('collapsed');
    document.getElementById('basic_accordion_btn').setAttribute('aria-expanded','true');
    document.getElementById('basic_accordion_body').classList.add('show');
  }
}

init();
