import NonEquilateral from './NonEquilateral';

export default class Rectangle implements NonEquilateral {
  private _length: number
  private _width: number

  constructor() {
    this._length = 0
    this._width = 0
  }

  set a(a: number) {
    this._length = a
  }

  set b(b: number) {
    this._width = b
  }

  public area(): number {
    return this._length * this._width
  }

  public perimeter(): number {
    return 2 * (this._length + this._width)
  }
}