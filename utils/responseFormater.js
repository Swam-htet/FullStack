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

const responseFomater = (success, payload, message) => {
    return {
        success: success,
        payload: payload,
        message: message,
        //     2024-01-24 09:10:42
        issuedAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
    }
}

module.exports = responseFomater;