
function some(array, count) {
  var rejected = [];
  var result = [], counter = 0;

  if (!(array instanceof Array && array.length >= count)) {
    throw new Error;
   }

  return new Promise((resplve, reject) => {
    function finaly() {
      if(array.length === counter) {
        resolve(result);
      }
    }

       array.forEach(value => {
          if (typeof value.then == "function") {
            value.then(value => {
              if (result.length < count) {
                result.push(value)
                counter++
                finaly()
              }
            }).catch(err => rejected.push(err))
         } else if (result.length < count) {
          result.push(value)
          counter++
          finaly()
         }
      })
   })
 }


 function map(array, func){
   if(!(array instanceof Array)){
       throw new Error;
     }

        return new Promise((resolve, reject) => {
        var isRejected = false;
        var result = [];

         array.forEach(value => {
            if(typeof value.then == "function"){
              value
               .then(value => result.push(fn(value)))
                  .catch(isRejected = true);
                    }else {
                     result.push(fn(value));
                  }
                })
              isRejected ? rej('Rejected?') : res(result);
           })
         }



function reduce(array, func) {
  if (!(array instanceof Array))
    throw new Error;

     return new Promise((resolve, reject) => {
        var total = 0,
          counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i].then == "function") {
          count++;
               array[i].then(val => {
                 total += func(val);
                 !--count && res(total);
               })
                .catch(rej)

                  } else {
                    total += func(array[i]);
                    !count && resolve(total);
              }
            }
          }
      }
