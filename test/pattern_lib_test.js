const { rectanglePattern } = require('../src/pattern_lib.js'); 
const { trianglePattern } = require('../src/pattern_lib.js'); 
const { diamondPattern } = require('../src/pattern_lib.js'); 
const assert = require('assert');

/* Rectangle pattern tests */

let filled_4_5 = '';
filled_4_5 += '****'+'\n'
filled_4_5 += '****'+'\n';
filled_4_5 += '****'+'\n';
filled_4_5 += '****'+'\n';
filled_4_5 += '****'; 
assert.equal(rectanglePattern("filled",4,5),filled_4_5);

let filled_5_8 = '';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'+'\n';
filled_5_8 += '*****'; 
assert.equal(rectanglePattern("filled",5,8),filled_5_8);

let alternate_2_2 = '';
alternate_2_2 += '**'+'\n';
alternate_2_2 += '--';
assert.equal(rectanglePattern("alternating",2,2),alternate_2_2);

let alternate_3_4 = '';
alternate_3_4 += '***'+'\n';
alternate_3_4 += '---'+'\n';
alternate_3_4 += '***'+'\n';
alternate_3_4 += '---';
assert.equal(rectanglePattern("alternating",3,4),alternate_3_4);

let alternate_4_3 = '';
alternate_4_3 += '****'+'\n';
alternate_4_3 += '----'+'\n';
alternate_4_3 += '****'+'\n';
alternate_4_3 += '----';
assert.equal(rectanglePattern("alternating",4,3),alternate_4_3);

let alternate_20_7 = '';
alternate_20_7 += '********************' + '\n';
alternate_20_7 += '--------------------' + '\n';
alternate_20_7 += '********************' + '\n';
alternate_20_7 += '--------------------' + '\n';
alternate_20_7 += '********************' + '\n';
alternate_20_7 += '--------------------' + '\n'; 
alternate_20_7 += '********************' + '\n';
alternate_20_7 += '--------------------';
assert.equal(rectanglePattern("alternating",20,7),alternate_20_7);

let hollow_2_2 = '**\n**';
assert.equal(rectanglePattern("hollow",2,2),hollow_2_2);

let hollow_4_3 = '****\n*  *\n****';
assert.equal(rectanglePattern("hollow",4,3),hollow_4_3);

let hollow_20_7 = '';
hollow_20_7 += '********************' + '\n';
hollow_20_7 += '*                  *' + '\n';
hollow_20_7 += '*                  *' + '\n';
hollow_20_7 += '*                  *' + '\n';
hollow_20_7 += '*                  *' + '\n';
hollow_20_7 += '*                  *' + '\n';
hollow_20_7 += '********************';
assert.equal(rectanglePattern("hollow",20,7),hollow_20_7);

/* Triangle pattern tests */

let right_4 = '';
right_4 += '    *' + '\n';
right_4 += '   **' + '\n';
right_4 += '  ***' + '\n';
right_4 += ' ****';
assert.equal(trianglePattern("right",4),right_4);

let right_7 = '';
right_7 += '       *'+'\n';
right_7 += '      **'+'\n';
right_7 += '     ***'+'\n';
right_7 += '    ****'+'\n';
right_7 += '   *****'+'\n';
right_7 += '  ******'+'\n';
right_7 += ' *******';
assert.equal(trianglePattern("right",7),right_7);

let left_6 = '';
left_6 += '*'+'\n';
left_6 += '**'+'\n';
left_6 += '***'+'\n';
left_6 += '****'+'\n';
left_6 += '*****'+'\n';
left_6 += '******';
assert.equal(trianglePattern("left",6),left_6);

let left_9 = '';
left_9 += '*'+'\n';
left_9 += '**'+'\n';
left_9 += '***'+'\n';
left_9 += '****'+'\n';
left_9 += '*****'+'\n';
left_9 += '******'+'\n';
left_9 += '*******'+'\n';
left_9 += '********'+'\n';
left_9 += '*********';
assert.equal(trianglePattern("left",9),left_9);

/* Diamond pattern tests */

let filled_5 = '';
filled_5 += '   *'+'\n';
filled_5 += '  ***'+'\n';
filled_5 += ' *****'+'\n';
filled_5 += '  ***'+'\n';
filled_5 += '   *';
assert.equal(diamondPattern("filled",5),filled_5);

let filled_9 = '';
filled_9 += '     *'+'\n';
filled_9 += '    ***'+'\n';
filled_9 += '   *****'+'\n';
filled_9 += '  *******'+'\n';
filled_9 += ' *********'+'\n';
filled_9 += '  *******'+'\n';
filled_9 += '   *****'+'\n';
filled_9 += '    ***'+'\n';
filled_9 += '     *';
assert.equal(diamondPattern("filled",9),filled_9);

let hollow_5 = '';
hollow_5 += '   *'+'\n';
hollow_5 += '  * *'+'\n';
hollow_5 += ' *   *'+'\n';
hollow_5 += '  * *'+'\n';
hollow_5 += '   *';
assert.equal(diamondPattern("hollow",5),hollow_5);

let hollow_9 = '';
hollow_9 += '     *'+'\n';
hollow_9 += '    * *'+'\n';
hollow_9 += '   *   *'+'\n';
hollow_9 += '  *     *'+'\n';
hollow_9 += ' *       *'+'\n';
hollow_9 += '  *     *'+'\n';
hollow_9 += '   *   *'+'\n';
hollow_9 += '    * *'+'\n';
hollow_9 += '     *';
assert.equal(diamondPattern("hollow",9),hollow_9);

let angled_7 = '';
angled_7 += '    *'+'\n'; 
angled_7 += '   / \\'+'\n';
angled_7 += '  /   \\'+'\n';
angled_7 += ' *     *'+'\n';
angled_7 += '  \\   /'+'\n';
angled_7 += '   \\ /'+'\n';
angled_7 += '    *';
assert.equal(diamondPattern("angled",7),angled_7);

let angled_13 = '';
angled_13 += '       *'+'\n'; 
angled_13 += '      / \\'+'\n';
angled_13 += '     /   \\'+'\n';
angled_13 += '    /     \\'+'\n';
angled_13 += '   /       \\'+'\n';
angled_13 += '  /         \\'+'\n';
angled_13 += ' *           *'+'\n';
angled_13 += '  \\         /'+'\n';
angled_13 += '   \\       /'+'\n';
angled_13 += '    \\     /'+'\n';
angled_13 += '     \\   /'+'\n';
angled_13 += '      \\ /'+'\n';
angled_13 += '       *';
assert.equal(diamondPattern("angled",13),angled_13);



