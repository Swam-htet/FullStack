// response format function for all api response
/*
    response structure
    {
        success: boolean,
        payload: payload,
        message: message,
        issuedAt: timestamp,

    }
 */

const dayjs = require('dayjs');

const responseFormatter = (success, payload, message) => {
    let response = {
        success: success,
        payload: payload,
        message: message,
        issuedAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
    };

    // if payload is null, remove it from response then return it
    if (payload === null) {
        delete response.payload;
    }
    return response;
}

module.exports = responseFormatter;