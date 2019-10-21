const { basename } = require('path');

module.exports = {
    apps: [{
        name: basename(__dirname),
        script: '.',
        cwd: __dirname,
        listen_timeout: 10000,
        kill_timeout: 10000, // 随便设个比两个环境变量之和大的数
        env: {
            NODE_ENV: 'production',
            PORT: 12000,
        },
    }],
};