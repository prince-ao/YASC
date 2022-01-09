export enum ScannerTokens {
  T_EOF = 0, T_PLUS, T_MINUS, T_STAR, T_SLASH, T_INTLIT
}

export enum ASTTokens {
  A_ADD = 0, A_SUBTRACT, A_MULTIPLY, A_DIVIDE, A_INTLIT
}

export type token = {
  token: ScannerTokens,
  intvalue: number,
}

export type ASTNode = {
  op: ASTTokens | undefined,
  left: ASTNode | undefined,
  right: ASTNode | undefined,
  intvalue: number,
}