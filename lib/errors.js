'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on squarecore-p2p Module {0}'
};

module.exports = require('squarecore-lib').errors.extend(spec);
