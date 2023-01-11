const sampleObj={
    "first":1, 
    "secons":2,
    "third":{
      "foutrh":4,
      "fifth":5,
      "sixth":{
        "seventh":7,"eighth":8,"ninth":{
          "tenth":10
        }
      },
    },
    "Eleventh":11
  }
  
 Output : 1,2,4,5,7,8,10,11


function numbers (obj) {
    let newObj = obj

    let arr = [];
    for (let i = 0; i < newObj.length; i++) {
        let value =  newObj[i]
        arr.push(value)
    }

}

console.log(numbers(sampleObj))
