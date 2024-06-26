
/* description: 注释 */

/* lexical grammar */
%lex
%%
[\s\t]                /* skip */
\/\/.*\n              /* skip */
number                return 'RESERVED_NUMBER'
[a-zA-Z]+             return 'VAR'
[0-9]+                return 'NUMBER'
<<EOF>>               return 'EOF'
.                     return yytext[0]

/lex

%start start

%% /* language grammar */

start
    : statements EOF
        { console.log(prefix(codeRes)); return prefix(codeRes); }
    | EOF
    ;

statements
    : statements ',' statement
    | statement
    ;

statement
    : assignment
    ;

assignment
    : assignBegin assignEnd
        {append($1);}
    | assignBegin assignment
        {append($1);}
    ;

assignBegin
    : VAR ':' 
        {$$ = assignConst($1);}
    | VAR '#' RESERVED_NUMBER ':'
        {$$ = assignConst($1);}
    | VAR '?' ':'
        {$$ = assignVariable($1);}
    | VAR '?' '#' RESERVED_NUMBER ':'
        {$$ = assignVariable($1);}
    ;

assignEnd
    : expression
    | VAR '#' RESERVED_NUMBER
        {literal($1);}
    | NUMBER '#' RESERVED_NUMBER
        {literal($1);}
    ;

expression
    : literal
    ;

literal
    : VAR
        {literal($1);}
    | NUMBER
        {literal($1);}
    ;

%%

var codeRes = ''; // 代码整体
var js$tmpRes; // 暂时输出结果

function append(c) {
    codeRes += c;
}

function literal(l) {
    append(`js$tmpRes = ${l};\n`);
}

function assignConst(VAR) {
    return (`const ${VAR} = js$tmpRes;\n`);
}

function assignVariable(VAR) {
    return (`let ${VAR} = js$tmpRes;\n`);
}

function prefix(code) {
    return 'var js$tmpRes;\n' + code;
}
