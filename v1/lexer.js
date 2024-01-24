const tokenSpecs = [
  { type: 'NUMBER', regex: /\d+/ },
  { type: 'ADD', regex: /\+/ },
  { type: 'SUB', regex: /-/ },
  { type: 'MUL', regex: /\*/ },
  { type: 'DIV', regex: /\// },
  { type: 'LPAREN', regex: /\(/ },
  { type: 'RPAREN', regex: /\)/ },
  { type: 'WHITESPACE', regex: /\s+/, ignore: true },
  { type: 'ENTER', regex: /\n/, ignore: true },
];

function tokenize(input) {
  let tokens = [];
  let match = true;

  while (input.length > 0 && match) {
    match = false;
    tokenSpecs.forEach(spec => {
      const regex = new RegExp('^' + spec.regex.source);
      const result = regex.exec(input);
      if (result !== null) {
        match = true;
        input = input.slice(result[0].length);
        if (!spec.ignore) {
          tokens.push({
            type: spec.type,
            value: result[0].toString()
          });
        }
      }
    });

    if (!match) {
      throw new Error(`Unexpected token: "${input[0]}"`);
    }
  }

  return tokens;
}

// 使用词法分析器
const input = `12 + 24 
/ (3 - 1)`;
const tokens = tokenize(input);
console.log(tokens);
