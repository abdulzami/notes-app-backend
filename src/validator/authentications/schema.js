const Joi = require('joi');

const PostAuthenticationPayloadShcema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
const PutAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
const DeleteAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  PostAuthenticationPayloadShcema,
  PutAuthenticationPayloadSchema,
  DeleteAuthenticationPayloadSchema,
};
