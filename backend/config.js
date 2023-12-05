
require('dotenv').config();

console.log('SendGridEmailKeyAPI:', process.env.SENDGRID_API_KEY);


module.exports = {
  email: {
    service: 'sendgrid',
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  },
};


