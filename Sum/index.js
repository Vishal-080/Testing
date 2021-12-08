// const sum = (a,b) => {
//     return a+b;
// }

function sum(data){
    var total = 0;
    for (var i = 0; i < data.length; i++){
        total += data[i];
    }
    //console.log(total);
    return total;
}

module.exports = sum;