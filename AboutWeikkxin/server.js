import express from 'express';
const app = express();
const path = require('path');
// 将打包后的静态文件目录设置为可访问的
app.use(express.static(path.join(__dirname, 'dist')));
// 对于所有的请求，都返回index.html，这是单页应用（SPA）的常见做法
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});