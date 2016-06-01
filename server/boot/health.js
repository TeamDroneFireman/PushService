module.exports = function(server) {
  var router = server.loopback.Router();
  router.get('/api/push/health', function(req, res) {
    res.status(200).send({status:'OK'});
  });
  server.use(router);
};
