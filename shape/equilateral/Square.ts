import Equilateral from './Equilateral';

export default class Square implements Equilateral {
  private _side: number

  constructor() {
    this._side = 0
  }

  set a(a: number) {
    this._side = a
  }

  public area(): number {
    return Math.pow(this._side, 2)
  }

  public perimeter(): number {
    return 4 * this._side
  }
}