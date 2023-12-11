const ClientError = require('./ClientError');

class NotFoudError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoudError;
