const express = require('express');

const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const socketio = require('socket.io');

const i18n = require('./src/shared/i18n');
const logger = require('./src/shared/logger');
const httplogger = require('./src/shared/httplogger');
const swaggerDocument = require('./config/swagger.json');
const apiRoutes = require('./src/routes/index');
const InfoResponse = require('./src/shared/inforesponse');
const socket = require('./src/shared/socketio');

require('./src/shared/cronjob');

const app = express();

// allow options
app.use(cors());
app.options('*', cors());
// const whitelist = process.env.CORS_WHITELIST.split(',');
// const corsOptions = {
//   origin: (origin, callback) => {
//     // allow requests with no origin
//     // (like server to server or curl requests)
//     if (!origin) return callback(null, true);
//     if (whitelist.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   exposedHeaders: ['Authorization']
// };

// app.use(cors(corsOptions));

// i18n init
app.use(i18n.init);

// swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// below will add to winston httplogger
app.use(morgan('combined', { stream: httplogger.stream }));

// body parser so as to access req.body for content - this does not support file - so used multer
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// static profile images
// app.use('/profileimage', express.static(process.env.USER_PROFILEIMAGE_PATH));
// attach main api routes
app.use('/api', apiRoutes);

// handle 404
app.use((req, res) => {
  res.status(404).json({ message: `Route${req.url} Not found.` });
});

// below needs to be at the end of all
app.use((error, req, res, next) => {
  // Any request to this server will get here, and will send an HTTP
  console.log(req.body);
  console.log(res.body);
  logger.error(`Generic Error: ${error.message}`);
  const infoResponse = new InfoResponse(res.translate('general.error') + error.message);
  res.status(500).json(infoResponse);
  // console.log(res)
  next(error);
});

// Mani-Code
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

const server = app.listen(process.env.PORT, () => {
  logger.info(`Node App started on port: ${process.env.PORT}`);
});
const io = socketio(server);
socket.activate(io);
