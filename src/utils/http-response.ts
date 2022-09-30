import { HttpException, HttpStatus } from '@nestjs/common';
import { isPromise } from 'util/types';

const exceptions = {
  [HttpStatus.CONTINUE]: ['CONTINUE', 100],
  [HttpStatus.SWITCHING_PROTOCOLS]: ['SWITCHING_PROTOCOLS', 101],
  [HttpStatus.PROCESSING]: ['PROCESSING', 102],
  [HttpStatus.EARLYHINTS]: ['EARLYHINTS', 103],
  [HttpStatus.OK]: ['OK', 200],
  [HttpStatus.CREATED]: ['CREATED', 201],
  [HttpStatus.ACCEPTED]: ['ACCEPTED', 202],
  [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: [
    'NON_AUTHORITATIVE_INFORMATION',
    203,
  ],
  [HttpStatus.NO_CONTENT]: ['NO_CONTENT', 204],
  [HttpStatus.RESET_CONTENT]: ['RESET_CONTENT', 205],
  [HttpStatus.PARTIAL_CONTENT]: ['PARTIAL_CONTENT', 206],
  [HttpStatus.AMBIGUOUS]: ['AMBIGUOUS', 300],
  [HttpStatus.MOVED_PERMANENTLY]: ['MOVED_PERMANENTLY', 301],
  [HttpStatus.FOUND]: ['FOUND', 302],
  [HttpStatus.SEE_OTHER]: ['SEE_OTHER', 303],
  [HttpStatus.NOT_MODIFIED]: ['NOT_MODIFIED', 304],
  [HttpStatus.TEMPORARY_REDIRECT]: ['TEMPORARY_REDIRECT', 307],
  [HttpStatus.PERMANENT_REDIRECT]: ['PERMANENT_REDIRECT', 308],
  [HttpStatus.BAD_REQUEST]: ['BAD_REQUEST', 400],
  [HttpStatus.UNAUTHORIZED]: ['UNAUTHORIZED', 401],
  [HttpStatus.PAYMENT_REQUIRED]: ['PAYMENT_REQUIRED', 402],
  [HttpStatus.FORBIDDEN]: ['FORBIDDEN', 403],
  [HttpStatus.NOT_FOUND]: ['NOT_FOUND', 404],
  [HttpStatus.METHOD_NOT_ALLOWED]: ['METHOD_NOT_ALLOWED', 405],
  [HttpStatus.NOT_ACCEPTABLE]: ['NOT_ACCEPTABLE', 406],
  [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: [
    'PROXY_AUTHENTICATION_REQUIRED',
    407,
  ],
  [HttpStatus.REQUEST_TIMEOUT]: ['REQUEST_TIMEOUT', 408],
  [HttpStatus.CONFLICT]: ['CONFLICT', 409],
  [HttpStatus.GONE]: ['GONE', 410],
  [HttpStatus.LENGTH_REQUIRED]: ['LENGTH_REQUIRED', 411],
  [HttpStatus.PRECONDITION_FAILED]: ['PRECONDITION_FAILED', 412],
  [HttpStatus.PAYLOAD_TOO_LARGE]: ['PAYLOAD_TOO_LARGE', 413],
  [HttpStatus.URI_TOO_LONG]: ['URI_TOO_LONG', 414],
  [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: ['UNSUPPORTED_MEDIA_TYPE', 415],
  [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE]: [
    'REQUESTED_RANGE_NOT_SATISFIABLE',
    416,
  ],
  [HttpStatus.EXPECTATION_FAILED]: ['EXPECTATION_FAILED', 417],
  [HttpStatus.I_AM_A_TEAPOT]: ['I_AM_A_TEAPOT', 418],
  [HttpStatus.MISDIRECTED]: ['MISDIRECTED', 421],
  [HttpStatus.UNPROCESSABLE_ENTITY]: ['UNPROCESSABLE_ENTITY', 422],
  [HttpStatus.FAILED_DEPENDENCY]: ['FAILED_DEPENDENCY', 424],
  [HttpStatus.PRECONDITION_REQUIRED]: ['PRECONDITION_REQUIRED', 428],
  [HttpStatus.TOO_MANY_REQUESTS]: ['TOO_MANY_REQUESTS', 429],
  [HttpStatus.INTERNAL_SERVER_ERROR]: ['INTERNAL_SERVER_ERROR', 500],
  [HttpStatus.NOT_IMPLEMENTED]: ['NOT_IMPLEMENTED', 501],
  [HttpStatus.BAD_GATEWAY]: ['BAD_GATEWAY', 502],
  [HttpStatus.SERVICE_UNAVAILABLE]: ['SERVICE_UNAVAILABLE', 503],
  [HttpStatus.GATEWAY_TIMEOUT]: ['GATEWAY_TIMEOUT', 504],
  [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: ['HTTP_VERSION_NOT_SUPPORTED', 505],
};

export const makeHttpException = (status: HttpStatus, msg: string = null): HttpException => {
  const [originalMsg, code] = exceptions[status];
  if (msg != null) {
    return new HttpException(msg, code as number);
  } else {
    return new HttpException(originalMsg as string, code as number);
  }
};

export const throwIfNullish = async <T>(value: T | Promise<T>, exception: Error): Promise<T> => {
  let _value = value;
  if (isPromise(value)) {
    _value = await value as Promise<T>;
  }
  if (_value as T == null) throw exception;
  return _value as T;
}

export const makeNotFoundMsg = (entity: string): string => {
  return `${entity} not found`
}