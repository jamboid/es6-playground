
//const myName = "Jamie";
const wordPrefix = "The Word is ";
const namePrefix = "The Name is ";

class WordCaller {
  constructor() { }

  createWordPrefix() {
    return wordPrefix;
  }
}

class NameCaller extends WordCaller {
  constructor(name = "Jimbo") {
    super();
    this.name = name;
  }

  createWordPrefix() {
    return namePrefix;
  }

  callName() {
    let nameToCall = this.createWordPrefix() + this.name;

    return nameToCall;
  }
}



// let jamieCaller = new NameCaller(myName);
//
// window.console.log(jamieCaller.callName());
//
// let mysteryCaller = new NameCaller();
//
// window.console.log(mysteryCaller.callName());

export { NameCaller as NameCaller };
