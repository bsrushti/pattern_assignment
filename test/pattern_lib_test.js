const assert = require('assert');
const patternLib = require('../src/pattern_lib.js');  
const utilLib = require('../src/util_lib.js');  
const { generateRectangle } = patternLib; 
const { generateTriangle } = patternLib; 
const { generateDiamond } = patternLib; 
const { createDiamondObject } = utilLib;
const { createTriangleObject } = utilLib;
const { createRectangleObject } = utilLib;

/* Rectangle pattern tests */

let filled_4_5 = [ '****', 
                   '****',
                   '****',
                   '****',
                   '****' ]; 
assert.deepEqual(generateRectangle(createRectangleObject([,,"filled",5,4])),filled_4_5);

let filled_5_8 = [ '*****', 
                   '*****',
                   '*****',
                   '*****',
                   '*****',
                   '*****',
                   '*****',
                   '*****' ]; 
assert.deepEqual(generateRectangle(createRectangleObject([,,"filled",8,5])),filled_5_8);

let alternate_2_2 =[ '**',
                     '--' ];
assert.deepEqual(generateRectangle(createRectangleObject([,,"alternate",2,2])),alternate_2_2);

let alternate_3_4 =['***',
                    '---',
                    '***',
                    '---'];
assert.deepEqual(generateRectangle(createRectangleObject([,,"alternate",4,3])),alternate_3_4);

let alternate_4_4 =['****',
                    '----',
                    '****',
                    '----' ];
assert.deepEqual(generateRectangle(createRectangleObject([,,"alternate",4,4])),alternate_4_4);

let alternate_20_7 =[ '********************',
                      '--------------------',
                      '********************',
                      '--------------------',
                      '********************',
                      '--------------------', 
                      '********************' ];
assert.deepEqual(generateRectangle(createRectangleObject([,,"alternate",7,20])),alternate_20_7);

let hollow_2_2 = [ '**', '**' ];
assert.deepEqual(generateRectangle(createRectangleObject([,,"hollow",2,2])),hollow_2_2);

let hollow_4_3 = [ '****', '*  *', '****' ];
assert.deepEqual(generateRectangle(createRectangleObject([,,"hollow",3,4])),hollow_4_3);

let hollow_20_7 = [ '********************',
                    '*                  *',
                    '*                  *',
                    '*                  *',
                    '*                  *',
                    '*                  *',
                    '********************' ];
assert.deepEqual(generateRectangle(createRectangleObject([,,"hollow",7,20])),hollow_20_7);

/* Triangle pattern tests */

let right_4 =[ '   *',
               '  **',
               ' ***',
               '****' ];
assert.deepEqual(generateTriangle(createTriangleObject([,,"right",4])),right_4);

let right_7 =['      *',
              '     **',
              '    ***',
              '   ****',
              '  *****',
              ' ******',
              '*******' ];
assert.deepEqual(generateTriangle(createTriangleObject([,,"right",7])),right_7);

let left_6 =['*     ',
             '**    ',
             '***   ',
             '****  ',
             '***** ',
             '******'];
assert.deepEqual(generateTriangle(createTriangleObject([,,"left",6])),left_6);

let left_9 =[ '*        ',
              '**       ',
              '***      ',
              '****     ',
              '*****    ',
              '******   ',
              '*******  ',
              '******** ',
              '*********' ];
assert.deepEqual(generateTriangle(createTriangleObject([,,"left",9])),left_9);

/* Diamond pattern tests */

let filled_5 =[ '  *  ',
                ' *** ',
                '*****',
                ' *** ',
                '  *  '  ];
assert.deepEqual(generateDiamond(createDiamondObject([,,"filled",5])),filled_5);

let filled_9 =[ '    *    ',
                '   ***   ',
                '  *****  ',
                ' ******* ',
                '*********',
                ' ******* ',
                '  *****  ',
                '   ***   ',
                '    *    ' ];
assert.deepEqual(generateDiamond(createDiamondObject([,,"filled",9])),filled_9);

let hollow_5 = '';
hollow_5 += '  *  '+'\n';
hollow_5 += ' * * '+'\n';
hollow_5 += '*   *'+'\n';
hollow_5 += ' * * '+'\n';
hollow_5 += '  *  ';
assert.equal(generateDiamond(createDiamondObject([,,"hollow",5])),hollow_5);

let hollow_9 = '';
hollow_9 += '    *    '+'\n';
hollow_9 += '   * *   '+'\n';
hollow_9 += '  *   *  '+'\n';
hollow_9 += ' *     * '+'\n';
hollow_9 += '*       *'+'\n';
hollow_9 += ' *     * '+'\n';
hollow_9 += '  *   *  '+'\n';
hollow_9 += '   * *   '+'\n';
hollow_9 += '    *    ';
assert.equal(generateDiamond(createDiamondObject([,,"hollow",9])),hollow_9);

let angled_7 = '';
angled_7 += '   *   '+'\n'; 
angled_7 += '  / \\  '+'\n';
angled_7 += ' /   \\ '+'\n';
angled_7 += '*     *'+'\n';
angled_7 += ' \\   / '+'\n';
angled_7 += '  \\ /  '+'\n';
angled_7 += '   *   ';
assert.equal(generateDiamond(createDiamondObject([,,"angled",7])),angled_7);

let angled_13 = '';
angled_13 += '      *      '+'\n'; 
angled_13 += '     / \\     '+'\n';
angled_13 += '    /   \\    '+'\n';
angled_13 += '   /     \\   '+'\n';
angled_13 += '  /       \\  '+'\n';
angled_13 += ' /         \\ '+'\n';
angled_13 += '*           *'+'\n';
angled_13 += ' \\         / '+'\n';
angled_13 += '  \\       /  '+'\n';
angled_13 += '   \\     /   '+'\n';
angled_13 += '    \\   /    '+'\n';
angled_13 += '     \\ /     '+'\n';
angled_13 += '      *      ';
assert.equal(generateDiamond(createDiamondObject([,,"angled",13])),angled_13);
