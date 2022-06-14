import Repository from '../Repository';
import Shape from '../../shape/Shape';
import User from '../User';

export default class Memory implements Repository {
  private _shapes: Map<bigint, Shape[]>
  private _shapeAreas: Map<bigint, number>
  private _shapeCircumferences: Map<bigint, number>

  constructor() {
    this._shapes = new Map<bigint, Shape[]>()
    this._shapeAreas = new Map<bigint, number>()
    this._shapeCircumferences = new Map<bigint, number>()
  }

  public addShape(u: User, s: Shape): void {
    if ((<Shape[]>this._shapes.get(u.id)) === undefined) {
      this._shapes.set(u.id, new Array<Shape>())
    }
    (<Shape[]>this._shapes.get(u.id)).push(s)

    if (this._shapeAreas.get(u.id) === undefined) {
      this._shapeAreas.set(u.id, 0)
    }
    this._shapeAreas.set(u.id, Number(this._shapeAreas.get(u.id)) + s.area())

    if (this._shapeCircumferences.get(u.id) === undefined) {
      this._shapeCircumferences.set(u.id, 0)
    }
    this._shapeCircumferences.set(u.id, Number(this._shapeCircumferences.get(u.id)) + s.circumference())
  }

  public shapes(u: User): Shape[] {
    return <Shape[]>this._shapes.get(u.id)
  }

  public shapeAreas(u: User): number {
    return Number(this._shapeAreas.get(u.id))
  }

  public shapeCircumference(u: User): number {
    return Number(this._shapeCircumferences.get(u.id))
  }
}