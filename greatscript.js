/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var greatscript = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,8],$V2=[1,9],$V3=[1,18],$V4=[1,23],$V5=[1,22],$V6=[1,20],$V7=[1,27],$V8=[1,17],$V9=[1,29],$Va=[5,6,11,35],$Vb=[1,33],$Vc=[1,30],$Vd=[1,31],$Ve=[1,32],$Vf=[1,34],$Vg=[1,37],$Vh=[5,6,11,13,22,35,42,44,46,48,49,50,51],$Vi=[5,6,11,35,46,48,49,50,51],$Vj=[2,57],$Vk=[1,42],$Vl=[1,39],$Vm=[1,40],$Vn=[1,41],$Vo=[1,45],$Vp=[1,51],$Vq=[1,59],$Vr=[1,65],$Vs=[1,78],$Vt=[1,80],$Vu=[6,33,35],$Vv=[2,35],$Vw=[5,6,11,35,43],$Vx=[1,83],$Vy=[1,85],$Vz=[1,89],$VA=[5,6,11,13,22,35,42,44,48,49],$VB=[5,6,11,13,22,35,42,44,46,48,49,50],$VC=[2,60],$VD=[2,30],$VE=[1,105],$VF=[6,11],$VG=[1,106],$VH=[1,109],$VI=[42,43],$VJ=[22,44],$VK=[1,121],$VL=[1,122],$VM=[1,138];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"start":3,"codes":4,"EOF":5,",":6,"code":7,"assignment":8,"expression":9,"(":10,")":11,"IF":12,"?":13,"WHILE":14,"assignConst":15,"assignVariable":16,"assignFunction":17,"assignDestruct":18,"assignArr":19,"assignImport":20,"assignJSX":21,"VAR":22,":":23,"struct":24,"#":25,"!":26,"assignFunction_":27,"leaveBlock":28,"enterBlock":29,"params":30,"[":31,"VarList":32,"]":33,"{":34,"}":35,"importMulti":36,"importBase":37,"IMPORT":38,"STRING":39,"tagBegin":40,"tagEnd":41,"`":42,"<":43,">":44,"tagParams":45,"/":46,"tagParam":47,"+":48,"-":49,"*":50,"%":51,"NUMBER":52,"funcExec":53,"expList":54,"lambda":55,"param":56,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:",",10:"(",11:")",12:"IF",13:"?",14:"WHILE",22:"VAR",23:":",25:"#",26:"!",31:"[",33:"]",34:"{",35:"}",38:"IMPORT",39:"STRING",42:"`",43:"<",44:">",46:"/",48:"+",49:"-",50:"*",51:"%",52:"NUMBER"},
productions_: [0,[3,2],[3,1],[4,3],[4,1],[7,1],[7,1],[7,3],[7,6],[7,6],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[15,3],[15,3],[15,5],[15,5],[15,3],[15,5],[16,4],[16,6],[17,2],[27,6],[27,7],[27,8],[27,9],[29,0],[28,0],[19,5],[18,5],[32,3],[32,1],[20,1],[36,3],[36,5],[36,1],[37,6],[37,8],[21,2],[21,3],[21,5],[40,3],[40,4],[41,4],[45,2],[45,1],[47,3],[9,3],[9,3],[9,3],[9,3],[9,2],[9,1],[9,1],[9,1],[9,1],[53,3],[53,4],[54,3],[54,1],[55,4],[55,6],[55,5],[55,7],[30,3],[30,1],[56,3],[56,1],[24,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 var res = $$[$0-1] + zws_code_tail; console.log(res); return res; 
break;
case 3:
this.$ = `${$$[$0-2]}${$$[$0]}`
break;
case 4: case 35: case 49:
this.$ = `${$$[$0]}`
break;
case 5:
this.$ = '  '.repeat(zws_block_layer) + $$[$0];
break;
case 6:
this.$ = '  '.repeat(zws_block_layer) + `zws_code_return = ${$$[$0]};\n`; zws_code_return='zws_code_return';
break;
case 7:
this.$ = `${$$[$0-1]}`;
break;
case 8:
this.$ = `if(${$$[$0-4]}){\n${$$[$0-2]}}`;
break;
case 9:
this.$ = `while(${$$[$0-4]}){\n${$$[$0-2]}}`;
break;
case 10: case 11: case 12: case 13: case 14: case 15: case 39: case 58: case 63: case 69:
this.$ = $$[$0];
break;
case 16:
this.$ = `zws_code_return = ${$$[$0]};\n`;
break;
case 17:
this.$ = `${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-2]} = ${$$[$0]};\n`; zws_tmp = zws_code_return = $$[$0-2]; /* ES2015(ES6) 新增const */
break;
case 18:
this.$ = `${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-2]} = ${$$[$0]};\n`; zws_tmp = zws_code_return = $$[$0-2];
break;
case 19: case 20:
this.$ = `${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-4]} = ${$$[$0]};\n`; zws_tmp = zws_code_return = $$[$0-4];
break;
case 21:
this.$ = `${$$[$0]}${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-2]} = ${zws_tmp};\n`; zws_code_return = $$[$0-2];
break;
case 22:
this.$ = `${$$[$0]}${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-4]} = ${zws_tmp};\n`; zws_code_return = $$[$0-4];
break;
case 23:
this.$ = `${zws_block_layer === 0? 'export ' : ''}let ${$$[$0-3]} = ${$$[$0]};\n`; /* ES2015(ES6) 新增let */
break;
case 24:
this.$ = `${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-5]} = ${$$[$0]};\n`;
break;
case 25:
this.$ = $$[$0-1];
break;
case 26:
this.$ = `${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-5]} = () => ${$$[$0]};\n`;
break;
case 27:
this.$ = `${zws_block_layer === 0? 'export ' : ''}const ${$$[$0-6]} = (${$$[$0-4]}) => ${$$[$0]};\n`;
break;
case 28:
this.$ = `${
                zws_block_layer === 0? 'export ' : ''
               }const ${
                $$[$0-7]
               } = () => {\n${
                $$[$0-1]
               }${
                '  '.repeat(zws_block_layer)
               }return ${
                zws_code_return
               };\n${
                '  '.repeat(zws_block_layer-1)
               }};\n`;
break;
case 29:
this.$ = `${
                zws_block_layer === 0? 'export ' : ''
               }const ${
                $$[$0-8]
               } = (${
                $$[$0-6]
               }) => {\n${
                $$[$0-1]
               }${
                '  '.repeat(zws_block_layer)
               }return ${
                zws_code_return
               };\n${
                '  '.repeat(zws_block_layer-1)
               }};\n`;
break;
case 30:
zws_block_layer += 1;
break;
case 31:
zws_block_layer -= 1;
break;
case 32:
this.$ = `const [${$$[$0-3]}] = ${$$[$0]};\n`;
break;
case 33:
this.$ = `const {${$$[$0-3]}} = ${$$[$0]};\n`;
break;
case 34: case 68:
this.$ = `${$$[$0-2]}, ${$$[$0]}`
break;
case 36:
this.$ = `import ${$$[$0]}\n`;
break;
case 37:
this.$ = `${1}, ${$$[$0]}`
break;
case 38:
this.$ = `{${$$[$0-3]}}, ${$$[$0]}`
break;
case 40:
this.$ = `${$$[$0-5]} from ${$$[$0-1]};\n`;
break;
case 41:
this.$ = `{${$$[$0-6]}} from ${$$[$0-1]};\n`;
break;
case 42:
this.$ = `${$$[$0-1]}${$$[$0]}`
break;
case 43:
this.$ = `${$$[$0-2]}${$$[$0-1]}${$$[$0]}`
break;
case 44:
this.$ = `${$$[$0-4]}{${$$[$0-2]}}${$$[$0]}`
break;
case 45:
this.$ = `<${$$[$0-1]}>`
break;
case 46:
this.$ = `<${$$[$0-2]} ${$$[$0-1]}>`
break;
case 47:
this.$ = `</${$$[$0-1]}>`
break;
case 48:
this.$ = `${$$[$0-1]} ${$$[$0]}`
break;
case 50:
this.$ = `${$$[$0-2]}={${$$[$0]}}`
break;
case 51:
this.$ = $$[$0-2]+' + '+$$[$0];
break;
case 52:
this.$ = $$[$0-2]+' - '+$$[$0];
break;
case 53:
this.$ = $$[$0-2]+' * '+$$[$0];
break;
case 54:
this.$ = $$[$0-2]+' / '+$$[$0];
break;
case 55:
this.$ = $$[$0-1]+' / 100';
break;
case 56: case 57: case 59:
this.$ = String(yytext);
break;
case 60:
this.$ = `${$$[$0-2]}()`;
break;
case 61:
this.$ = `${$$[$0-3]}(${$$[$0-1]})`;
break;
case 62:
this.$ = `${$$[$0-2]}, ${$$[$0]}`;
break;
case 64:
this.$ = `() => ${$$[$0]}`
break;
case 65:
this.$ = `() => {${$$[$0-1]}}`
break;
case 66:
this.$ = `(${$$[$0-3]}) => ${$$[$0]}`
break;
case 67:
this.$ = `(${$$[$0-5]}) => {${$$[$0-1]}}`
break;
case 70:
this.$ = `${$$[$0-2]}: ${$$[$0]}`
break;
case 71:
this.$ = $$[$0]
break;
case 72:
this.$ = `{${$$[$0-1]}}`
break;
}
},
table: [{3:1,4:2,5:[1,3],7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{1:[3]},{5:[1,28],6:$V9},{1:[2,2]},o($Va,[2,4]),o($Va,[2,5]),o($Va,[2,6],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{4:35,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{9:36,22:$Vg,39:$V6,52:$V8,53:19},{9:38,22:$Vg,39:$V6,52:$V8,53:19},o($Va,[2,10]),o($Va,[2,11]),o($Va,[2,12]),o($Va,[2,13]),o($Va,[2,14]),o($Va,[2,15]),o($Va,[2,16]),o($Vh,[2,56]),o($Vi,$Vj,{10:$Vk,23:$Vl,25:$Vm,26:$Vn}),o($Vh,[2,58]),o($Vh,[2,59]),o($Va,[2,31],{28:43}),{22:$Vo,32:44},{22:$Vo,32:46},o($Va,[2,36]),{21:48,40:25,41:47,42:[1,49],43:[1,50]},o($Va,[2,39]),{22:$Vp},{1:[2,1]},{7:52,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{9:53,22:$Vg,39:$V6,52:$V8,53:19},{9:54,22:$Vg,39:$V6,52:$V8,53:19},{9:55,22:$Vg,39:$V6,52:$V8,53:19},{9:56,22:$Vg,39:$V6,52:$V8,53:19},o($Vh,[2,55]),{6:$V9,11:[1,57]},{13:[1,58],46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf},o($Vh,$Vj,{10:$Vq}),{13:[1,60],46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf},{9:61,15:63,22:[1,66],24:62,34:[1,67],37:64,38:$Vr,39:$V6,52:$V8,53:19},{22:[1,68]},{23:[1,69],25:[1,70]},{9:74,10:$Vs,11:[1,71],22:[1,76],30:73,39:$V6,52:$V8,53:19,54:72,55:77,56:75},o($Va,[2,25]),{6:$Vt,35:[1,79]},o($Vu,$Vv),{6:$Vt,33:[1,81]},o($Vw,[2,42]),{41:82,43:$Vx},{9:84,22:$Vg,39:$V6,52:$V8,53:19},{22:$Vp,46:$Vy},{22:$Vz,44:[1,86],45:87,47:88},o($Va,[2,3]),o($VA,[2,51],{46:$Vb,50:$Ve,51:$Vf}),o($VA,[2,52],{46:$Vb,50:$Ve,51:$Vf}),o($VB,[2,53],{51:$Vf}),o($VB,[2,54],{51:$Vf}),o($Va,[2,7]),{10:[1,90]},{9:74,11:[1,91],22:$Vg,39:$V6,52:$V8,53:19,54:72},{10:[1,92]},o($Va,[2,17],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($Va,[2,18]),o($Va,[2,21]),o($Va,[2,37]),{10:[1,93]},o($Vi,$Vj,{10:$Vq,23:[1,94],25:$Vm}),{4:95,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:[1,97],27:21,31:$V4,32:96,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{23:[1,98]},{9:99,22:$Vg,39:$V6,52:$V8,53:19},{22:[1,100]},o($Vi,$VC,{29:101,23:$VD}),{6:[1,103],11:[1,102]},{6:$VE,11:[1,104]},o($VF,[2,63],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($VF,[2,69]),o([6,11,46,48,49,50,51],$Vj,{10:$Vq,25:$VG}),o($VF,[2,71]),{10:$Vs,11:[1,107],22:$VH,30:108,55:77,56:75},{23:[1,110]},{22:[1,111]},{23:[1,112]},o($Vw,[2,43]),{46:$Vy},{42:[1,113],46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf},{22:[1,114]},o($VI,[2,45]),{22:$Vz,44:[1,115],47:116},o($VJ,[2,49]),{23:[1,117]},{4:118,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},o($Vh,$VC),{4:119,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{39:[1,120]},{9:61,15:63,22:$VK,24:62,34:$VL,38:$Vr,39:$V6,52:$V8,53:19},{6:$V9,35:[1,123]},{6:$Vt,35:[1,124]},o([6,35,46,48,49,50,51],$Vv,{10:$Vk,23:$Vl,25:$Vm,26:$Vn}),{9:125,15:127,22:$VK,24:126,34:$VL,39:$V6,52:$V8,53:19},o($Va,[2,23],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{23:[1,128]},{23:[1,129]},o($Vh,[2,61]),{9:130,22:$Vg,39:$V6,52:$V8,53:19},{23:$VD,29:131},{10:$Vs,22:$VH,55:77,56:132},{22:[1,133]},{23:[1,134]},{6:$VE,11:[1,135]},{25:$VG},{9:136,22:[1,139],34:[1,140],37:137,38:$VM,39:$V6,52:$V8,53:19},o($Vu,[2,34]),{9:141,22:$Vg,39:$V6,52:$V8,53:19},{41:142,43:$Vx},{44:[1,143]},o($VI,[2,46]),o($VJ,[2,48]),{9:144,22:$Vg,39:$V6,52:$V8,53:19},{6:$V9,11:[1,145]},{6:$V9,11:[1,146]},{11:[1,147]},o($Vi,$Vj,{10:$Vq,23:[1,148],25:$Vm}),{4:95,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},o($Va,[2,72]),{23:[1,149]},o($Va,[2,19],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($Va,[2,20]),o($Va,[2,22]),{9:150,22:$Vg,39:$V6,52:$V8,53:19},{9:151,10:[1,152],22:$Vg,39:$V6,52:$V8,53:19},o($VF,[2,62],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{23:[1,153]},o($VF,[2,68]),o($VF,[2,70]),{9:154,10:[1,155],22:$Vg,39:$V6,52:$V8,53:19},{23:[1,156]},o($Va,[2,33],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($Va,[2,38]),{10:[1,157]},o($Vi,$Vj,{10:$Vq,23:[1,158]}),{22:$Vo,32:96},o($Va,[2,32],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($Vw,[2,44]),o($Vw,[2,47]),o($VJ,[2,50],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($Va,[2,8]),o($Va,[2,9]),o($Va,[2,40]),{9:61,15:63,22:$VK,24:62,34:$VL,39:$V6,52:$V8,53:19},{38:$VM},o($Va,[2,24],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),o($Va,[2,26],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{4:159,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{9:160,10:[1,161],22:$Vg,39:$V6,52:$V8,53:19},o($VF,[2,64],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{4:162,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{9:163,10:[1,164],22:$Vg,39:$V6,52:$V8,53:19},{39:[1,165]},{38:$Vr},{6:$V9,11:[1,166]},o($Va,[2,27],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{4:167,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{6:$V9,11:[1,168]},o($VF,[2,66],{46:$Vb,48:$Vc,49:$Vd,50:$Ve,51:$Vf}),{4:169,7:4,8:5,9:6,10:$V0,12:$V1,14:$V2,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:$V3,27:21,31:$V4,34:$V5,36:24,37:26,39:$V6,40:25,43:$V7,52:$V8,53:19},{11:[1,170]},o($Va,[2,28]),{6:$V9,11:[1,171]},o($VF,[2,65]),{6:$V9,11:[1,172]},o($Va,[2,41]),o($Va,[2,29]),o($VF,[2,67])],
defaultActions: {3:[2,2],28:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


var zws_tmp = '';
var zws_code_tail = 'var zws_code_return;\n';
var zws_code_return = '';
var zws_block_layer = 0;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip */
break;
case 1:/* skip */
break;
case 2:return 12
break;
case 3:return 14
break;
case 4:return 38
break;
case 5:return 22
break;
case 6:return 52
break;
case 7:return 39
break;
case 8:return 'PI'
break;
case 9:return 'E'
break;
case 10:return 5
break;
case 11:return yy_.yytext[0]
break;
}
},
rules: [/^(?:[\s\t])/,/^(?:\/\/.*\n)/,/^(?:if\b)/,/^(?:while\b)/,/^(?:import\b)/,/^(?:[a-zA-Z]+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:'.*')/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = greatscript;
exports.Parser = greatscript.Parser;
exports.parse = function () { return greatscript.parse.apply(greatscript, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}