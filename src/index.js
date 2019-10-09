export class UnusedClass {}

export default class Something {
  log() {
    console.log('Something');
  }
  log1(param) {
    console.log('Something', param);
  }
  log2(param1, param2) {
    console.log('Something', param1, param2);
  }
}

export class Helper {
  constructor(name) {
    this.name = name;
  }
}
