import Koa from 'koa';
import koaStatic from 'koa-static';
import process from 'process';

const koa = new Koa();

koa.use(koaStatic(
    '/home/zim/bithub/monitor/dist'
));

koa.listen(process.env.PORT);