class ArraySchema {
    constructor() {
      this.call = false;
      this.custCall = null;
    }
  
    checkInteger(arr) {
      for (let i = 0; i < arr.length; i += 1) {
        if (!Number.isInteger(arr[i])) {
          return false;
        }
      }
      return true;
    }
  
    checkCustomRules(arr) {
      if (!this.custCall) {
        return true; // если нет кастома считаем что валидация прошла успешно
      }
  
      for (let i = 0; i < arr.length; i += 1) {
        if (!this.custCall(arr[i])) {
          return false;
        }
      }
      return true;
    }
  
    isValid(data) {
      if (!Array.isArray(data)) {
        return false;
      }
      if (this.call && !this.checkInteger(data)) {
        return false;
      }
      if (this.custCall && !this.checkCustomRules(data)) {
        return false;
      }
      return true;
    }
  
    allIntegers() {
      this.call = true;
      return this;
    }
  
    custom(rules) {
      this.custCall = rules;
      return this;
    }
  }
  export default ArraySchema;