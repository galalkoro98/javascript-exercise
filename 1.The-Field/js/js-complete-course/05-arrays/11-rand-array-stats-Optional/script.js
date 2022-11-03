/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', function () {
        let randomArr = Array(10).fill().map(()=> Math.floor(Math.random()* 100));
       // console.log(randomArr)
        randomArr.forEach((digit, index)=>{
            let x = index + 1;
            document.getElementById(`n-${x}`).innerHTML = digit;
        });

        document.getElementById('min').innerHTML = randomArr.reduce((a, b) =>Math.min(a, b));
        document.getElementById('max').innerHTML = randomArr.reduce((a, b) =>Math.max(a, b));

        let sum = randomArr.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        })
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = sum / randomArr.length;

        
    })

})();
