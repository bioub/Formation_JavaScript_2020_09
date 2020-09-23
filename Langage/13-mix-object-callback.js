class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  helloAsync() {
    setTimeout(() => {
      // console.log(this);
      console.log(`Hello ${this.name}`);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.hello(); // Hello Romain
romain.helloAsync(); // Hello undefined
