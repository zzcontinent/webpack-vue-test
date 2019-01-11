// module.exports = function say() {
//     console.log('hello world');
// }

export default function () {
    return new Promise((resolve, reject) => {
        // reject('not ok');
        resolve('util export default methods ok');
    })
}