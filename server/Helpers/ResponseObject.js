import HttpStatus from 'http-status';

class ResponseObject {

  constructor(statusCode, message, data) {
    this.Error = false;
    this.Success = false;
    this.message = message;
    this.data = data;

    if ((statusCode === 200) || (statusCode === 201)) {
      this.Success = {
        code: statusCode,
        type: HttpStatus[statusCode],
        message: this.message,
        data: this.data
      };
    } else {
      this.Error = {
        code: statusCode,
        type: HttpStatus[statusCode],
        message: this.message,
      };
    }

    this.responseObject = {
      error: this.Error,
      success: this.Success
    };

    return this.responseObject;
  }
}

export default ResponseObject;
