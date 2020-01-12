// Url

var url = "https://opensky-network.org/api/states/all";

//function getResult(urlPassed) {

// Return All States

$.getJSON( url , function(data) {

    //Returns all states to the console
    console.log(data);

    console.log(data.states.length);

    // var test = [];
    // test[0] = data.time;
    // test[1] = data.states[0];
    //
    // console.log(test);

    // Returns 1 states first value
    //console.log(data.states[0][2]);
});

// Return specific states

$.getJSON( url , function(data) {

  //var test = filterByProperty(data, "United States");


    var result = [];
    var resultStates = [];
    //var resObj = JSON.parse(data);
    //var count = 0;

    result['times'] = data.time;

    for(var i = 0; i < data.states.length; i++) {
      //for(var j = 0; j < 16; j++) {
        if(data.states[i][2] == 'United States') {
            for(var j = 0; j < data.states.length; j++) {
              console.log(data.states[j]);
              //result['times'] = data.time;
              // resultStates = data.states[j];
              // //result['states'] = data.states[i];
              // result['states'] = resultStates;
            }
          }
      //console.log(count);
    }
    //console.log(result[0].length);
    console.log(result);
});




// function filterByProperty(array, prop){
//     var filtered = [];
//     for(var i = 0; i < array.states.length; i++){
//
//         var obj = array.states[i];
//
//         for(var key in obj){
//             if(array.states[i][2] == 'United States'){
//                 var item = obj[key];
//                 filtered.push(item);
//             }
//         }
//
//     }
//     console.log(filtered);
//     return filtered;
// }


//result = getResult(url);

//console.log("Result: " + result);

// var response = '{ "9994921432": { "name": "the name", "ownerid": "543624" }, "9979509360": { "name": "some name", "ownerid": "765875" }, "9979524523": { "name": "some name", "ownerid": "215654" }, "9979524524": { "name": "some other name", "ownerid": "65893" } }';
// var json = [];
// var resObj = JSON.parse(response);
// for(var key in resObj) {
//   if(resObj[key].name == 'some name') {
//     json.push(resObj[key]);
//   }
// }
//
// console.log(json);
