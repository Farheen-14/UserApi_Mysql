// ddmmyyyyhhmmss

// var d = new Date("220820221256622"); 
// console.log(d.getDate());
// console.log( d.toLocaleString());

// date.now - want in milisecond 

const data = []

const date = "22082022225622"

const splitDate = date.split('')
const getDate = splitDate.slice(0,2).join('')
const getMonth = splitDate.slice(2,4).join('')
const getYear = splitDate.slice(4,8).join('')
const getHour = splitDate.slice(8,10).join('')
const getMinute = splitDate.slice(10,12).join('')
const getSecond = splitDate.slice(12,14).join('')
data.push(getDate,getMonth,getYear,getHour,getMinute,getSecond)
const res = data.map(parseFloat)
console.log(res);
const setDate = new Date(...res)
console.log(setDate.getTime());


// const testDate = new Date(1590757517834);
// const testDate = new Date(220820221256622);
// const res1 = testDate[Symbol.toPrimitive]('default');
// console.log(res1);













// console.log(new Date(...res));

// console.log(res);
// data.push(getDate,getMonth,getYear,getHour,getMinute,getSecond)
// console.log(typeof(data));
// console.log(new Date(data));
// let data1 = [30-08-2022]

