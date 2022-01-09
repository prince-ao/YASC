import { token,  ASTNode, ASTTokens, ScannerTokens} from "./defs"

const OpPrec: number[] = [0, 10, 10, 20, 20, 0];

var index: number = 0;

export const setIndex = (x: number) => { 
  index = x;
}

const arithop = (tokentype: number) => {
  switch (tokentype) {
    case ScannerTokens.T_PLUS:
      return (ASTTokens.A_ADD);
    case ScannerTokens.T_MINUS:
      return (ASTTokens.A_SUBTRACT);
    case ScannerTokens.T_STAR:
      return (ASTTokens.A_MULTIPLY);
    case ScannerTokens.T_SLASH:
      return (ASTTokens.A_DIVIDE);
  }
}

type bin = (x: token[], ptp: number) => ASTNode | undefined;

export const binexpr: bin = (x: token[], ptp: number) => {
  let left: ASTNode | undefined;
  let right: ASTNode | undefined;
  let tokentype: number;

  left = {
    op: ASTTokens.A_INTLIT,
    left: undefined,
    right: undefined,
    intvalue: x[index].intvalue
  }
  index++;


  tokentype = x[index].token;

  if(tokentype === ScannerTokens.T_EOF){
    return left;
  }

  while(OpPrec[tokentype] > ptp){
    index++;

    right = binexpr(x, OpPrec[tokentype]);


    left = {
      op: arithop(tokentype),
      left: left,
      right: right,
      intvalue: 0
    }

    tokentype = x[index].token;

    if(x[index].token === ScannerTokens.T_EOF){
      return left;
    }
  }

  return left;
}