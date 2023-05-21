const DEFAULT_FORMAT = {
  "sid": "",
  "name": "",
  "ruby": "",
  "num_medal": 0,
  "num_available_days": [0, 30],
  "deadline": [9999, 12, 31, 23, 59, 59],
  "final_deposit_date": [9999, 12, 31, 23, 59, 59],
  "num_data": 0,
  "log": []
}

export class LSCtrl {
  constructor() {
    this.sid = '';
  }

  static new_data() {
    let new_data = DEFAULT_FORMAT;
    let sid = this.#generateRandomString(12);
    this.sid = sid;
    new_data['sid'] = sid;
    let ls_datas = []
    ls_datas = this.get_datas_JSON();
    ls_datas = this.#clean_datas(ls_datas);
    ls_datas.push(new_data);
    localStorage.setItem('ismem-data', JSON.stringify(ls_datas));
  }

  static get_datas_JSON() {
    let ls_datas = localStorage.getItem('ismem-data');
    if (ls_datas === null) {
      localStorage.setItem('ismem-data', '[]');
      return [];
    }
    return JSON.parse(ls_datas);
  }

  static get_data_dict(sid) {
    let ls_datas = this.get_datas_JSON();
    return ls_datas[this.get_data_index(sid)];
  }

  static get_data_index(sid) {
    let ls_datas = this.get_datas_JSON();
    for (let i = 0; i < ls_datas.length; i++) {
      const element = ls_datas[i];
      if (element['sid'] == sid) return i;
    }
    return null;
  }

  /**
   * 
   * @param {string} sid 
   * @param {string} name 
   * @param {string} ruby 
   * @param {Array<Number>} num_available_days 
   * @param {Array<Number>} deposit_date [Y,M,D,H,M,S]
   * @param {Array<Number>} deadline
   * @param {Boolean} auto_delete 
   * @param {Number} num_medal 
   * @returns {boolean} True ==> 登録成功 : False ==> 登録失敗
   */
  static add_data_log(sid, name, ruby, num_available_days, deposit_date, deadline, auto_delete, num_medal) {
    let ls_datas = this.get_datas_JSON();
    let index = this.get_data_index(sid);

    let num_data_index = ls_datas[index]['num_data'];

    ls_datas[index]['name'] = name;
    ls_datas[index]['ruby'] = ruby;
    ls_datas[index]['num_medal'] = num_medal;
    ls_datas[index]['num_available_days'] = num_available_days;
    ls_datas[index]['deadline'] = deadline;
    ls_datas[index]['final_deposit_date'] = deposit_date;
    ls_datas[index]['num_data']++;

    ls_datas[index]['log'][num_data_index] = {};
    ls_datas[index]['log'][num_data_index]['increment_id'] = num_data_index;
    ls_datas[index]['log'][num_data_index]['deposit_date'] = deposit_date;
    ls_datas[index]['log'][num_data_index]['auto_delete'] = auto_delete;
    ls_datas[index]['log'][num_data_index]['num_medal'] = num_medal;
    if (num_data_index == 0) ls_datas[index]['log'][num_data_index]['rise_and_fall'] = num_medal;
    else ls_datas[index]['log'][num_data_index]['rise_and_fall'] = num_medal - ls_datas[index]['log'][num_data_index - 1]['num_medal'];
    localStorage.setItem('ismem-data', JSON.stringify(ls_datas));
  }


  //以下、低機能関数
  /** 
   * @param {Array} array
  */
  static #clean_datas(array) {
    let output = [];
    for (const item of array) {
      if (item["name"] == '') continue;
      output.push(item);
    }
    return output;
  }

  static #generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

}


