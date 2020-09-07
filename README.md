# 如何申請Google Map 開發者金鑰並啟用付費

## 創建API Key

1.先到 Google雲端後台 . [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/accept.jpg?raw=true)

2.請先選擇一個專案 (如果沒有請按建立)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/create-project.jpg?raw=true)

3.啟用API,這邊以Map JavaScript 為例 (選擇自己需要的API)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/enable-api1.jpg?raw=true)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/enable-api2.jpg?raw=true)

4. 先到憑證,並建立API KEY
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/certificate.jpg?raw=true)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/certificate2.jpg?raw=true)
![certificatedone.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/certificatedone.jpg?raw=true)

5.再到 Google雲端後台 . [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview) 並選則憑證
![go-cert-page.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/go-cert-page.jpg?raw=true)

>> 這邊可以看之前申請的Key,也可以複製金鑰

# 啟用付費

以Map JavaScript API 為例,如果不啟用付費,很多功能都無法使用(ex  Directions API,Maps Elevation API...)
不過不用擔心,基本上google 每個月都有一定的Quota,沒超過是不用付費的,已開發來說很夠了
>> Google Map Api 定價 https://cloud.google.com/maps-platform/pricing

1. 先到google後台 啟用付費 --->  https://console.cloud.google.com/project/_/billing/enable

![go-cert-page.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/enable-pay-1.jpg?raw=true)



2  . 如果沒有付費帳號請先建立
![go-cert-page.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/enable-pay-2.jpg?raw=true)
![go-cert-page.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/enable-pay-3.jpg?raw=true)


3. 連結付費帳號
![go-cert-page.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/sel-pay-account.jpg?raw=true) 

4.這樣就啟用成功了
![done-enable-pay.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/done-enable-pay.jpg?raw=true) 

