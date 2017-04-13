export class HttpError extends Error {
  constructor(messgae, status) {
    super(messgae);
    this.name = this.constructor.name;
    this.messgae = messgae;
    this.status = status;
  }
}
