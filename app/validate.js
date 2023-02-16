const Joi = require("@hapi/joi");

//REGISTER VALIDATION
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

//LOGIN VALIDATION
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

//OBJECT VALIDATION
const objectValidation = (data) => {
  const schema = Joi.object({
    product_name: Joi.string().required(),
    product_description: Joi.string().required(),
    product_price: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.objectValidation = objectValidation;
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
