
/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%%
"#".*\n                 /* skip */
[\s\t\n]              /* skip */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"import"              return 'IMPORT'
"'".*"'"              return 'STRING'
[a-z]+                return 'VAR'
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
    : statement statements
        {$$ = `${$1}${$2}`;}
    | statement ',' statements
        {$$ = `${$1}${$3}`;}
    | EOF
    ;

statement 
    : assignment
        {$$ = $1;}
    ;

assignment
    : assignConst
        {$$ = $1;}
    | assignVariable
        {$$ = $1;}
    | assignVariable2
        {$$ = $1;}
    | assignFunction
        {$$ = $1;}
    | assignObj
        {$$ = $1;}
    | assignImport
        {$$ = $1;}
    ;

assignConst
    : VAR ':' e
        {$$ = `const ${$1} = ${$3};\n`; /* ES2015(ES6) 新增const */}
    ;

assignVariable
    : VAR '!' ':' e
        {$$ = `let ${$1} = ${$4};\n`; /* ES2015(ES6) 新增let */}
    ;

assignVariable2
    : VAR '?' ':' e
        {$$ = `${$1} = ${$4};\n`;}
    ;

assignFunction
    : VAR '(' ')' ':' e
        {$$ = `const ${$1} = () => {\n  return ${$5};\n};\n`;}
    ;

assignObj 
    : '{' VAR '}' ':' e 
        {$$ = `const ${$2} = (${$5}).${$2};\n`;}
    ;

assignImport
    : VAR ':' IMPORT '(' STRING ')'
        {$$ = `import ${$1} from ${$5};\n`;}
    ;

expressions
    : e EOF
        {$$ = $1;}
    ;

e
    : e '+' e
        {$$ = $1+' + '+$3;}
    | e '-' e
        {$$ = $1+' - '+$3;}
    | e '*' e
        {$$ = $1+' * '+$3;}
    | e '/' e
        {$$ = $1+' / '+$3;}
    | e '%'
        {$$ = $1+' / 100';}
    | '(' e ')'
        {$$ = `(${$2})`;}
    | NUMBER
        {$$ = String(yytext);}
    | VAR
        {$$ = String(yytext);}
    ;

