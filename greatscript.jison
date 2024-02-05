
/* description: Parses greatscript. */

/* lexical grammar */
%lex
%%
[\s\t]                {return yytext[0]==='\n' ? 'ENTER' : undefined}
"#".*\n                 /* skip */
\n                    {console.log('zws n');return 'ENTER'}
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
    : statements
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

statements
    : statement ENTER statements
        {$$ = `${$1}${$3}`;}
    | statement ',' statements
        {$$ = `${$1}${$3}`;}
    | EOF
    ;

statement 
    : assignment
        {$$ = $1;}
    | expression
        {$$ = $1;}
    ;

assignment
    : assignConst
        {$$ = $1;}
    | assignVariable
        {$$ = $1;}
    | assignVariable2
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
    ;

assignVariable
    : VAR '!' ':' expression
        {$$ = `export let ${$1} = ${$4};\n`; /* ES2015(ES6) 新增let */}
    ;

assignVariable2
    : VAR '?' ':' expression
        {$$ = `${$1} = ${$4};\n`;}
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
    | '(' statements ')'
        {$$ = `(${$2})`;}
    | NUMBER
        {$$ = String(yytext);}
    | VAR
        {$$ = String(yytext);}
    ;

