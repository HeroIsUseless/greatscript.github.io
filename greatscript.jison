
/* description: Parses greatscript. */

/* lexical grammar */
%lex
%%
[\s\t] /* skip */
"//".*\n                 /* skip */
'if' return 'IF'
'while' return 'WHILE'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"import"              return 'IMPORT'
"'".*"'"              return 'STRING'
[a-zA-Z]+                return 'VAR'
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
    : codes EOF
        { console.log($1); return $1; }
    | EOF
    ;

codes
    : codes ',' code
        {$$ = `${$1}${$3}`}
    | code 
        {$$ = `${$1}\n`}
    ;

code
    : assignment
        {$$ = $1;}
    | expression
        {$$ = `${$1};`;}
    | '(' codes ')'
        {$$ = `${$2}`;}
    | IF expression '(' codes ')'
        {$$ = `if(${$2}){\n${$4}}`;}
    | WHILE expression '(' codes ')'
        {$$ = `while(${$2}){\n${$4}}`;}
    ;

assignment
    : assignConst
        {$$ = $1;}
    | assignVariable
        {$$ = $1;}
    | assignFunction
        {$$ = $1;}
    | assignObj
        {$$ = $1;}
    | assignArr
        {$$ = $1;}
    | assignImport
        {$$ = $1;}
    | assignJSX
        {$$ = $1;}
    ;

assignConst
    : VAR ':' expression
        {$$ = `export const ${$1} = ${$3};\n`; zws_tmp = $1; /* ES2015(ES6) 新增const */}
    | VAR '#' VAR ':' expression
        {$$ = `export const ${$1} = ${$5};\n`; zws_tmp = $1;}
    | VAR ':' assignConst
        {$$ = `${$3}export const ${$1} = ${zws_tmp};\n`}
    | VAR '#' VAR ':' assignConst
        {$$ = `${$5}export const ${$1} = ${zws_tmp};\n`}
    ;

assignVariable
    : VAR '!' ':' expression
        {$$ = `export let ${$1} = ${$4};\n`; /* ES2015(ES6) 新增let */}
    | VAR '!' '#' VAR ':' expression
        {$$ = `export const ${$1} = ${$6};\n`;}
    ;

assignFunction
    : VAR '(' ')' ':' expression
        {$$ = `export const ${$1} = () => ${$5};\n`;}
    | VAR '(' ')' ':' '(' codes ')'
        {$$ = `export const ${$1} = () => {\n return ${$6}\n};\n`;}
    ;

assignArr 
    : '[' VarList ']' ':' expression 
        {$$ = `const ${$2} = (${$5}).${$2};\n`;}
    ;

assignObj 
    : '{' VarList '}' ':' expression 
        {$$ = `const ${$2} = (${$5}).${$2};\n`;}
    ;

VarList
    : VarList ',' VAR 
        {$$ = `${$1}, ${$3}`}
    | VAR
        {$$ = `${$1}`}
    ;

assignImport
    : importMulti
        {$$ = `import ${$1}\n`;}
    ;

importMulti
    : VAR ':' importBase
        {$$ = `${1}, ${$3}`}
    | '{' VarList '}' ':' importBase
        {$$ = `{${$2}}, ${$5}`}
    | importBase
        {$$ = $1;}
    ;

importBase
    : VAR ':' IMPORT '(' STRING ')'
        {$$ = `${$1} from ${$5};\n`;}
    | '{' VarList '}' ':' IMPORT '(' STRING ')'
        {$$ = `{${$2}} from ${$7};\n`;}
    ;

assignJSX
    : tagBegin tagEnd 
        {$$ = `${$1}${$2}`}
    | tagBegin assignJSX tagEnd 
        {$$ = `${$1}${$2}${$3}`}
    ;

tagBegin
    : '<' VAR '>'
        {$$ = `<${$2}>`}
    | '<' VAR tagParams '>'
        {$$ = `<${$2} ${$3}>`}
    ;

tagEnd
    : '<' '/' VAR '>'
        {$$ = `</${$3}>`}
    ;

tagParams
    : tagParams tagParam
        {$$ = `${$1} ${$2}`}
    | tagParam
        {$$ = `${$1}`}
    ;

tagParam
    : VAR ':' expression
        {$$ = `${$1}={${$3}}`}
    ;

expression
    : expression '+' expression
        {$$ = $1+' + '+$3;}
    | expression '-' expression
        {$$ = $1+' - '+$3;}
    | expression '*' expression
        {$$ = $1+' * '+$3;}
    | expression '/' expression
        {$$ = $1+' / '+$3;}
    | expression '%'
        {$$ = $1+' / 100';}
    | NUMBER
        {$$ = String(yytext);}
    | VAR
        {$$ = String(yytext);}
    | STRING
        {$$ = String(yytext);}
    ;

%%

var zws_tmp = '';
