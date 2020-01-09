import Koa from 'koa';
import routes from './routes';
import logger from 'koa-logger';

const app = new Koa();
/* setup middlewares */
app.use(routes.routes()).use(routes.allowedMethods());
if (process.env.NODE_ENV === 'development') {
  app.use(logger());
}
export default app;
