export interface ErrorResponseModel {
  status: 200 | 201 | 202 | 204 | 304 | 400 | 401 | 403 | 404 | 429 | 500 | 502 | 503;
  message: string;
}
