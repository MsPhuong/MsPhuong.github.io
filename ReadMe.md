View demo(online) truy cập link:
<link to view>
Note: Các file có chứa từ khóa demo --> có thể bỏ qua.

Chạy chương trình:
-   Chạy file app.js: server sẽ 'listen' port 1234 --> truy cập link: localhost:1234 để chạy chương trình
-   Để test unit test: 
        +   Mở của sổ cmd ( mở bằng powershell), hoặc terminal (unix)
        +   <cd> tới folder chứa file: update.test.js
        +   chạy lệnh: <npm test>
        
        
Thông tin:
-   Các gói package cài đặt: 
    +   node: v6.11.3
    +   npm: 3.10.10
    +   express: 4.16.2
    +   body-parser: 1.18.2
    +   jest: 21.2.1 (npm install --save-dev jest)
-   File package.json cần sửa:
    +   {
          "scripts": {
            "test": "jest"
          }
        }