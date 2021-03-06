import { tokenize, token } from "../tokenizer";

describe("tokenizer", () => {
  it("should successfully tokenize", () => {
    const input = `function hello(message) {
  console.log(message);
}`;

    expect(tokenize(input)).toEqual([
      token.function(),
      token.identifier("hello"),
      token.leftParen(),
      token.identifier("message"),
      token.rightParen(),
      token.leftCurly(),
      token.identifier("console"),
      token.dot(),
      token.identifier("log"),
      token.leftParen(),
      token.identifier("message"),
      token.rightParen(),
      token.semicolon(),
      token.rightCurly(),
    ]);
  });

  it("should tokenize string literals", () => {
    const input = `print('hello!')`;
    expect(tokenize(input)).toEqual([
      token.identifier("print"),
      token.leftParen(),
      token.stringLiteral("hello!"),
      token.rightParen(),
    ]);
  });
});
