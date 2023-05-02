```json
[
    {
        "sid": "p092qy",
        "name": "<<<store_name>>>",
        "ruby": "<<<ruby>>>",
        "num_medal": 1234567890,
        "num_available_days": [0,30],
        "deadline": [9999,12,31,23,59,59], 
        "final_deposit_date": [9999,12,31,23,59,59],
        "num_data": 1,
        "log":[
            {
                "increment_id": 0,
                "deposit_date": [9999,12,31,23,59,59],
                "auto_delete": false,
                "num_medal": 1234567890,
                "rise_and_fall": -1234567890
            },
            {

            }
        ]
    },
    {

    }
]
```

sid:固有に割り振られるランダムな文字列  
name:  
名前  

ruby:  
辞書順並び替え用名前  

num_medal:  
現在のメダルの枚数  

num_available_days:  
期限切れまでの日数30  
- 0 : 設定コード ==預け当日,...,x(無効)==  
  - 0 : == 0 , 1 , 2 , 3 , ... , **30** , x ==  
- 1 : フリーフォーマット 設定コードの**value**部分を指定  

deadline:  
有効期限  

deposit_date:  
預けた日  

num_data:  
データ**個数**

log
------------
increment_id:  
データIDナンバー

auto_delete:  
期限切れによる自動生成データか  

rise_and_fall:  
前データからの増減



