
/* description: Parses greatscript. */

/* lexical grammar */
%lex
%%
[\s\t] /* skip */
"//".*\n                 /* skip */
'if' return 'IF'
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

code
    : assignment
        {$$ = $1;}
    | expression
        {$$ = $1;}
    | '(' codes ')'
        {$$ = `${$2}`;}
    | IF expression '(' codes ')'
        {$$ = `if(${$2}){\n${$4}}`;}
    ;

codes
    : code ',' codes
        {$$ = `${$1}${$3}`}
    | code 
        {$$ = `${$1}\n`}
    ;

assignment
    : assignConst
        {$$ = $1;}
    | assignVariable
        {$$ = $1;}
    | assignImport
        {$$ = $1;}
    | assignFunction
        {$$ = $1;}
    | assignObj
        {$$ = $1;}
    ;

assignConst
    : VAR ':' expression
        {$$ = `export const ${$1} = ${$3};\n`; /* ES2015(ES6) 新增const */}
    | VAR '#' VAR ':' expression
        {$$ = `export const ${$1} = ${$5};\n`;}
    ;

assignVariable
    : VAR '!' ':' expression
        {$$ = `export let ${$1} = ${$4};\n`; /* ES2015(ES6) 新增let */}
    | VAR '!' '#' VAR ':' expression
        {$$ = `export const ${$1} = ${$5};\n`;}
    ;

assignFunction
    : VAR '(' ')' ':' expression
        {$$ = `export const ${$1} = () => {\n  return ${$5};\n};\n`;}
    ;

assignObj 
    : '{' VAR '}' ':' expression 
        {$$ = `const ${$2} = (${$5}).${$2};\n`;}
    ;

assignImport
    : VAR ':' IMPORT '(' STRING ')'
        {$$ = `import ${$1} from ${$5};\n`;}
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
    ;

