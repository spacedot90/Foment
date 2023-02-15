const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/detail.html'));
});

app.listen(3000, () => {
  console.log('서버가 시작되었습니다.');
});
