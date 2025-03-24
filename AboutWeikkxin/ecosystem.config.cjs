module.exports = {
  apps: [
    {
      name: 'www.weikkxin.cn',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'max',
      script: './server.js',
    },
  ],
}
