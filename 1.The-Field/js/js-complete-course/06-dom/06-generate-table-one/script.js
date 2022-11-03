/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById('target');

    let table =  document.createElement('table');


    target.append(table);
    table.append('th')
    for (i = 0; i < 10; i++) {
        table.insertRow(0);
    }

})();