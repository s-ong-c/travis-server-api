import Router from 'koa-router';

const routes = new Router();

routes.get('/', ctx => {
  ctx.body = 'hello world!!!!';
});
export default routes;
