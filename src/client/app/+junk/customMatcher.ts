export let myCustomMatchers = {
  // toBeAllowedToDrive matcher
  // Usage: expect(age).toBeAllowedToDrive();
  //        expect(age).not.toBeAllowedToDrive();
  toBeAllowedToDrive: () => ({
    compare: age => {
      let result = {}
      //result.pass = age>16

      //if (result.pass) {
        //result.message = `Expected ${age} to be allowed to drive`
      //} else 
        //result.message = `Expected ${age} to be allowed to drive, but it was not`;
      //}
      //return result
    }
  })
}
