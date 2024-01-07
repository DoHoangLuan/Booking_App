export interface ResponseAPI<T> {
  message: string;
  error: string;
  data: T;
}
