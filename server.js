const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cheerio = require("cheerio");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/detail.html'));
});

// static한 html 파일 전송받기
const bodyParser = require('body-parser');
const dataDir = path.join(__dirname, 'public/data');

app.use(bodyParser.json());

// POST 요청을 처리
app.post('/save-progress', (req, res) => {
  // URL 정보를 가져온다.
  const url = req.body.url;

  // html/detail.html 파일을 읽어온다
  const detailHtml = fs.readFileSync("public/html/detail.html", "utf8");
  const $ = cheerio.load(detailHtml);

  // detailHtml 안에 있는 특정 클래스를 사용하여 HTML을 생성한다.
  const elementsWithClass = $(".side_contents");
  const headerWithClass = $("head *");
  const classHtml = elementsWithClass.toString();
  const html = `<!DOCTYPE html>
  <html>
    <head>
      ${headerWithClass}
    </head>
    <body>
      ${classHtml}
    </body>
  </html>`;

  // URL에서 파일명을 추출한다.
  const fileName = url.split('/').pop() + '.html';

  // 파일을 저장한다.
  const filePath = path.join(dataDir, fileName);
  fs.writeFile(filePath, html, (err) => {
    if (err) {
      console.error(`Failed to save file: ${filePath}`);
      res.status(500).send('Failed to save file');
    } else {
      console.log(`File saved: ${filePath}`);
      res.status(200).send('File saved');
    }
  });
});

// 서버 시작 코드
app.listen(3000, () => {
  console.log('서버가 시작되었습니다.');
});

