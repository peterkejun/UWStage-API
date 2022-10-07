"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNotFoundMsg = exports.throwIfNullish = exports.makeHttpException = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("util/types");
const exceptions = {
    [common_1.HttpStatus.CONTINUE]: ['CONTINUE', 100],
    [common_1.HttpStatus.SWITCHING_PROTOCOLS]: ['SWITCHING_PROTOCOLS', 101],
    [common_1.HttpStatus.PROCESSING]: ['PROCESSING', 102],
    [common_1.HttpStatus.EARLYHINTS]: ['EARLYHINTS', 103],
    [common_1.HttpStatus.OK]: ['OK', 200],
    [common_1.HttpStatus.CREATED]: ['CREATED', 201],
    [common_1.HttpStatus.ACCEPTED]: ['ACCEPTED', 202],
    [common_1.HttpStatus.NON_AUTHORITATIVE_INFORMATION]: [
        'NON_AUTHORITATIVE_INFORMATION',
        203,
    ],
    [common_1.HttpStatus.NO_CONTENT]: ['NO_CONTENT', 204],
    [common_1.HttpStatus.RESET_CONTENT]: ['RESET_CONTENT', 205],
    [common_1.HttpStatus.PARTIAL_CONTENT]: ['PARTIAL_CONTENT', 206],
    [common_1.HttpStatus.AMBIGUOUS]: ['AMBIGUOUS', 300],
    [common_1.HttpStatus.MOVED_PERMANENTLY]: ['MOVED_PERMANENTLY', 301],
    [common_1.HttpStatus.FOUND]: ['FOUND', 302],
    [common_1.HttpStatus.SEE_OTHER]: ['SEE_OTHER', 303],
    [common_1.HttpStatus.NOT_MODIFIED]: ['NOT_MODIFIED', 304],
    [common_1.HttpStatus.TEMPORARY_REDIRECT]: ['TEMPORARY_REDIRECT', 307],
    [common_1.HttpStatus.PERMANENT_REDIRECT]: ['PERMANENT_REDIRECT', 308],
    [common_1.HttpStatus.BAD_REQUEST]: ['BAD_REQUEST', 400],
    [common_1.HttpStatus.UNAUTHORIZED]: ['UNAUTHORIZED', 401],
    [common_1.HttpStatus.PAYMENT_REQUIRED]: ['PAYMENT_REQUIRED', 402],
    [common_1.HttpStatus.FORBIDDEN]: ['FORBIDDEN', 403],
    [common_1.HttpStatus.NOT_FOUND]: ['NOT_FOUND', 404],
    [common_1.HttpStatus.METHOD_NOT_ALLOWED]: ['METHOD_NOT_ALLOWED', 405],
    [common_1.HttpStatus.NOT_ACCEPTABLE]: ['NOT_ACCEPTABLE', 406],
    [common_1.HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: [
        'PROXY_AUTHENTICATION_REQUIRED',
        407,
    ],
    [common_1.HttpStatus.REQUEST_TIMEOUT]: ['REQUEST_TIMEOUT', 408],
    [common_1.HttpStatus.CONFLICT]: ['CONFLICT', 409],
    [common_1.HttpStatus.GONE]: ['GONE', 410],
    [common_1.HttpStatus.LENGTH_REQUIRED]: ['LENGTH_REQUIRED', 411],
    [common_1.HttpStatus.PRECONDITION_FAILED]: ['PRECONDITION_FAILED', 412],
    [common_1.HttpStatus.PAYLOAD_TOO_LARGE]: ['PAYLOAD_TOO_LARGE', 413],
    [common_1.HttpStatus.URI_TOO_LONG]: ['URI_TOO_LONG', 414],
    [common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE]: ['UNSUPPORTED_MEDIA_TYPE', 415],
    [common_1.HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE]: [
        'REQUESTED_RANGE_NOT_SATISFIABLE',
        416,
    ],
    [common_1.HttpStatus.EXPECTATION_FAILED]: ['EXPECTATION_FAILED', 417],
    [common_1.HttpStatus.I_AM_A_TEAPOT]: ['I_AM_A_TEAPOT', 418],
    [common_1.HttpStatus.MISDIRECTED]: ['MISDIRECTED', 421],
    [common_1.HttpStatus.UNPROCESSABLE_ENTITY]: ['UNPROCESSABLE_ENTITY', 422],
    [common_1.HttpStatus.FAILED_DEPENDENCY]: ['FAILED_DEPENDENCY', 424],
    [common_1.HttpStatus.PRECONDITION_REQUIRED]: ['PRECONDITION_REQUIRED', 428],
    [common_1.HttpStatus.TOO_MANY_REQUESTS]: ['TOO_MANY_REQUESTS', 429],
    [common_1.HttpStatus.INTERNAL_SERVER_ERROR]: ['INTERNAL_SERVER_ERROR', 500],
    [common_1.HttpStatus.NOT_IMPLEMENTED]: ['NOT_IMPLEMENTED', 501],
    [common_1.HttpStatus.BAD_GATEWAY]: ['BAD_GATEWAY', 502],
    [common_1.HttpStatus.SERVICE_UNAVAILABLE]: ['SERVICE_UNAVAILABLE', 503],
    [common_1.HttpStatus.GATEWAY_TIMEOUT]: ['GATEWAY_TIMEOUT', 504],
    [common_1.HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: ['HTTP_VERSION_NOT_SUPPORTED', 505],
};
const makeHttpException = (status, msg = null) => {
    const [originalMsg, code] = exceptions[status];
    if (msg != null) {
        return new common_1.HttpException(msg, code);
    }
    else {
        return new common_1.HttpException(originalMsg, code);
    }
};
exports.makeHttpException = makeHttpException;
const throwIfNullish = async (value, exception) => {
    let _value = value;
    if ((0, types_1.isPromise)(value)) {
        _value = await value;
    }
    if (_value == null)
        throw exception;
    return _value;
};
exports.throwIfNullish = throwIfNullish;
const makeNotFoundMsg = (entity) => {
    return `${entity} not found`;
};
exports.makeNotFoundMsg = makeNotFoundMsg;
//# sourceMappingURL=http-response.js.map