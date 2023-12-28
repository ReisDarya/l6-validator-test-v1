class NumberSchema {
    isValid(data) {
      if (typeof data !== 'number') {
        return false;
      }
      return true;
    }
  }
  
  export default NumberSchema;