import Koa from 'koa';
import koaStatic from 'koa-static';
import process from 'process';

const koa = new Koa();

koa.use(koaStatic(
    '/home/zim/bithub/monitor/dist'
));

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

koa.listen(process.env.PORT);