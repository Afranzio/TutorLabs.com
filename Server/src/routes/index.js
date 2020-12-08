const express = require('express');
const userRoutes = require('./user.routes');
const masterlistRoutes = require('./masterlist.routes');

const InfoResponse = require('../shared/inforesponse');

const apiRouter = express.Router();

apiRouter.get('/healthcheck', (req, res) => {
  const greeting = 'healthcheck.ok';
  const infoResponse = new InfoResponse(res.translate(greeting));
  res.json(infoResponse);
});

apiRouter.use('/user', userRoutes);
apiRouter.use('/masterlist', masterlistRoutes);

module.exports = apiRouter;
