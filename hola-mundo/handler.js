'use strict';
const queryString = require('querystring')

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
      },
      null,
      2
    ),
  };
};

module.exports.showUser = async event => {
    const body = queryString.parse(event['body']);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: `Peticion Post`,
                input: `Hola ${body.name} ${body.lastName}`,
            },
            null,
            2
        ),
    };
};
