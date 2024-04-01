
/* description: Parses greatscript. */

/* lexical grammar */
%lex
%%
[\s\t]                /* skip */
"//".*\n              /* skip */
'if'                  return 'IF'
'while'               return 'WHILE'
"import"              return 'IMPORT'
[a-zA-Z]+             return 'VAR'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"'".*"'"              return 'STRING'
"PI"                  return 'PI'
"E"                   return 'E'
<<EOF>>               return 'EOF'
.                     return yytext[0]

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS

%start start

%% /* language grammar */

start
    : expressions EOF
        { console.log(prefix(codeRes)); return prefix(codeRes); }
    | EOF
    ;

expressions
    : expression ',' expressions
        {$$ = `${$1}${$3}`}
    | expression 
        {$$ = `${$1}`}
    ;

expression
    : assignment
        {$$ = $1;}
    | literal
        { /* 理论上这里并不需要做什么 */ }
    | literal '+' literal
    | '(' expressions ')'
    | funcExec
    ;

literal
    : VAR
        {literal($1);}
    | NUMBER
        {literal($1);}
    | STRING
        {literal($1);}
    ;

assignment
    : assignConst
    | assignVariable
    | assignFunction
    ;

assignConst
    : VAR ':' expression
        {assignConst($1);}
    | VAR '#' VAR ':' expression
        {assignConst($1);}
    ;

assignVariable
    : VAR '!' ':' expression
        {assignVariable($1);}
    | VAR '!' '#' VAR ':' expression
        {assignVariable($1);}
    ;

assignFunction
    : VAR '(' ')' ':' expression
    | VAR '(' params ')' ':' expression
    ;

params 
    : params ',' param
    | param
    ;


param
    : VAR '#' VAR
    | lambda
    ;

lambda
    : '(' ')' ':' expression
    | '(' params ')' ':' expression
    ;

funcExec
    : VAR '(' ')'
    | VAR '(' expList ')'
    ;

expList
    : expList ',' expression
    | expression
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
    append(`const ${VAR} = js$tmpRes;\n\n`);
}

function assignVariable(VAR) {
    append(`let ${VAR} = js$tmpRes;\n\n`);
}

function prefix(code) {
    return 'var js$tmpRes;\n' + code;
}
