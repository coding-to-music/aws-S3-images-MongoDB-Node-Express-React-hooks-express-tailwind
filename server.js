const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

console.log('AWS_ACCESS_KEY_ID', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS_ACCESS_KEY_SECRET', process.env.AWS_ACCESS_KEY_SECRET);
console.log('AWS_BUCKET_NAME', process.env.AWS_BUCKET_NAME);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB connection successful!🔑');
  });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...🚀`);
});

//Listener on the process to when we have a unhandled rejection (a promisse that got rejected and we didn't had a way to handle it)
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLER REJECTION! Shutting down the server...');
  server.close(() => process.exit(1)); //It will wait for the requests made to our server before shutting it down
});
