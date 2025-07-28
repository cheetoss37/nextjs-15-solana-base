// Settings
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 60000;

export const BASE_SOURCE = "/dapp-service/";

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_NOT_MODIFIED = 304;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;

// Auth endpoint
export const GET_NONCE = "/auth/nonce";
export const POST_VERIFY = "/auth/verify";

// Other variables
export const DEFAULT_PAGE_SIZE = 10;

// PYTH services
export const GET_LATEST_PRICE = "/v2/updates/price/latest";
