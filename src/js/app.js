// TODO: write code here

console.log('app.js bundled');

export default class ErrorRepository {
  constructor(errors) {
    this.errors = new Map(errors);
  }

  message(type) {
    if (!this.errors.has(type)) {
      return 'Unknown error';
    }
    return this.errors.get(type);
  }
}
