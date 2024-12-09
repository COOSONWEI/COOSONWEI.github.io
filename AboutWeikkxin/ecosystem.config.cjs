module.exports = {
  apps: [
    {
      name: 'weikkxin.cn',
      port: '3002',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
