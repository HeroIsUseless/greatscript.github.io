
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
        { console.log(addTail($1)); return addTail($1); }
    | EOF
    ;

expressions
    : expressions ',' expression
        {$$ = `${$1}${$3}`}
    | expression 
        {$$ = `${$1}`}
    ;

expression
    : assignment
        {$$ = $1;}
    | literal
        {$$ = toTmpRes($1);}
    ;

literal
    : VAR
        {$$ = $1;}
    | NUMBER
        {$$ = $1;}
    | STRING
        {$$ = $1;}
    ;

assignment
    : assignConst
        {$$ = $1;}
    ;

assignConst
    : VAR ':' expression
        {$$ = $1;}
    | VAR '#' VAR ':' expression
        {$$ = $1;}
    ;
%%

var zws_tmp = '';
var codeTail = 'var js$tmpRes;\n';
var js$tmpRes = '';
var zws_block_layer = 0;

function shouldAttachExportPrefix(code) {

}

function shouldAttachTab(code) {
    return '  '.repeat(zws_block_layer) + code;
}

function addPrefix(code) {

}

function addTail(code) {
    return code + codeTail;
}

function toTmpRes(code) {
    return (
`
js$tmpRes = ${code}
`
    )
}

function assignConst() {
    return (
`

`
    )
}