import { ScannerTokens, token } from "./defs";

export const parse = (x: string) => {
  let i: number = 0;
  let c: string = x[i];
  let arr: token[] = [];
  while(c !== "."){
    switch(c){
      case "+":
        arr.push({token: ScannerTokens.T_PLUS, intvalue: 0});
        break;
      case "-":
        arr.push({token: ScannerTokens.T_MINUS, intvalue: 0});
        break;
      case "*":
        arr.push({token: ScannerTokens.T_STAR, intvalue: 0});
        break;
      case "/":
        arr.push({token: ScannerTokens.T_SLASH, intvalue: 0});
        break;
      default:
        if(!isNaN(Number(c))){
          let num: number = 0;
          while(!isNaN(Number(c)) && c !== " "){
            num = num * 10 + Number(c);
            c = x[++i];
          }
          i--;
          arr.push({token: ScannerTokens.T_INTLIT, intvalue: num});
          break
        }
        console.log("Unrecognised character " + c);
    }
    c = x[++i];
    while(c === " "){
      c = x[++i];
    }
  }
  arr.push({token: ScannerTokens.T_EOF, intvalue: 0});
  return arr;
}