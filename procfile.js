'use strict';

module.exports = (pandora) => {

    pandora
        .fork('static-server', './')
        .env({
            NODE_ENV: pandora.dev ? 'development' : 'production',
            PORT: pandora.dev ? 8000 : 12003,
        });

    /**
     * you can also use cluster mode to start application
     */
    // pandora
    //   .cluster('./');

    /**
     * you can create another process here
     */
    // pandora
    //   .process('background')
    //   .nodeArgs(['--expose-gc']);

    /**
     * more features please visit our document.
     * https://github.com/midwayjs/pandora/
     */

};