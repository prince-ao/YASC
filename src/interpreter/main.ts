import { parse } from "./lexer";
import {ASTNode, token} from "./defs"
import {binexpr} from "./expression"
import { interpretAST } from "./interpret";

export const calculate = (s: string) => {
  let x: token[] = parse(s)
  let y: ASTNode | undefined = binexpr(x, 0)
  let p: ASTNode = {
    op: 0,
    left: undefined,
    right: undefined,
    intvalue: 0
  }
  return interpretAST(y || p);
}
