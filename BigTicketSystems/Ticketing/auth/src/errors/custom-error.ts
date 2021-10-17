export abstract class CustomError extends Error {
  abstract statusCode: number;

  //throw new Error('some error') --- will printout logs in server --  to make it work take message as parameter and send to super() here super is Error
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
