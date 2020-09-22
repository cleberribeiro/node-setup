import { WindowsInput } from "./WindowsInput";

describe("Implementação FactoryMethod Input Windows", () => {
  test("deverá retornar a implementação da interface Input", () => {
    const windowInput = new WindowsInput();
    expect(windowInput).toBeInstanceOf(WindowsInput);
  });
});
