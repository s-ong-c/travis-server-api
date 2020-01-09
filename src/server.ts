import app from './app';

import './env';

//const { PORT } = process.env;
app.listen(3000, () => {
  console.log('FFM server is listening to port 3000');
});
