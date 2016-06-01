module.exports = function(PushMessage) {

  PushMessage.getPushMessageByInterventionAndTimestamp =
    function (idIntervention,timestamp ,callback) {
      var filter = {
        where: {
          and: [
            {
              idIntervention: idIntervention
            },
            {
              timestamp: {
                gt: timestamp
              }
            }
          ]
        }
      };
      PushMessage.find(filter,
      function(err, pushMessages) {
        console.log(pushMessages);
        callback(null, pushMessages);
      });
  };

  PushMessage.remoteMethod('getPushMessageByInterventionAndTimestamp', {
    accepts: [
      {arg: 'idIntervention', type: 'string', required: true},
      {arg: 'timestamp', type: 'date', http: { source: 'query' }, required: true}
    ],
    returns: {type: 'array', root: true},
    http: {verb: 'get', path: '/intervention/:idIntervention'}
  });
};
