'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var squarecore = require('@big-brother/squarecore-lib');
var utils = require('../utils');
var $ = squarecore.util.preconditions;
var _ = squarecore.deps._;
var BufferUtil = squarecore.util.buffer;
var BufferReader = squarecore.encoding.BufferReader;

/**
 * A message to confirm that a connection is still valid.
 * @param {Number} arg - A nonce for the Ping message
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function DsqueueMessage(arg, options) {
  Message.call(this, options);
  this.command = 'dsq';
}
inherits(DsqueueMessage, Message);

DsqueueMessage.prototype.setPayload = function(payload) {
    var parser = new BufferReader(payload);
    this.nonce = parser.read(8);

};

DsqueueMessage.prototype.getPayload = function() {
    return this.nonce;
};

module.exports = DsqueueMessage;
