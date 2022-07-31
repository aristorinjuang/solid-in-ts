import Equilateral from './Equilateral';

export default class Circle implements Equilateral {
  private _radius: number

  constructor() {
    this._radius = 0
  }

  set a(a: number) {
    this._radius = a
  }

  public area(): number {
    return Math.PI * Math.pow(this._radius, 2)
  }

  public perimeter(): number {
    return 2 * Math.PI * this._radius
  }
}