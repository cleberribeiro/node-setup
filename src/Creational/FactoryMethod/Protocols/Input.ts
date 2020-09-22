export interface Input {
  readonly type?: string;
  readonly name?: string;
  readonly id?: string;
  readonly styleClass?: string;
  readonly value?: string;
  render(): void;
}
