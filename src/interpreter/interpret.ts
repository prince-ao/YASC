import { ASTNode, ASTTokens } from "./defs";

export const interpretAST = (x: ASTNode) => {
  let leftval: number = 0, rightval: number = 0;

  if(x.left !== undefined){
    leftval = interpretAST(x.left);
  }
  if(x.right !== undefined){
    rightval = interpretAST(x.right);
  }

  switch(x.op){
    case ASTTokens.A_ADD:
      return (leftval + rightval);
    case ASTTokens.A_SUBTRACT:
      return (leftval - rightval);
    case ASTTokens.A_DIVIDE:
      return (leftval / rightval);
    case ASTTokens.A_MULTIPLY:
      return (leftval * rightval);
    case ASTTokens.A_INTLIT:
      return (x.intvalue)
  }
  return 0;
}