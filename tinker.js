
const str = "I am the alpha";

function run(){
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
};
var j = str.length;
while (j--) {
  console.log(str.charAt(i));
 };
};
run();

// const numbers = [1,2,3,4,5,6,7,8,9,0];
// const qwerty = ['q','w','e','r','t','y','u','i','p'];
// const asdf = ['a','s','d','f','g','h','j','k','l'];
// const zxc = ['z','x','c','v','b','n','m'];

// function allRow(arr) {

// for (let i = 0; i < arr.length; i++) {
//     let numbersArr = numbers;
//     let qwertyArr = qwerty;
//     let asdfArr = asdf;
//     let zxcArr = zxc;
//     let resultsArray = []
//     let word = arr[i].toLowerCase().toString.split('');
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] in numbersArr) {
//                 numbersArr.pop(word[j]);
//             } else if (word[j] in qwertyArr) {
//                 qwertyArr.pop(word[j])
//             } else if (word[j] in asdfArr) {
//                 asdfArr.pop(word[j])
//             } else if (word[j] in zxcArr) {
//                 zxcArr.pop(word[j])
//             }
//         }
//         if (numbersArr.length = 0) {
//             resultsArray.push(arr[i].join(',') + " numbers ,");
//         } else if (qwertyArr.length = 0) {
//             resultsArray.push(arr[i].join (',') + " qwerty ,");
//         } else if (qwertyArr.length = 0) {
//             asdfArray.push(arr[i].join (',') + " asdf ,");
//         } else if (qwertyArr.length = 0) {
//             zxcArray.push(arr[i].join (',') + " zxc ,");
//         }
//     };
// };



// allRow(['Hello','Alaska','Dad','Peace']);






