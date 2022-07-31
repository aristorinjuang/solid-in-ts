import Repository from '../Repository';
import Shape from '../../shape/Shape';
import User from '../User';

export default class Memory implements Repository {
  private _shapes: Map<bigint, Shape[]>
  private _shapeAreas: Map<bigint, number>
  private _shapePerimeters: Map<bigint, number>

  constructor() {
    this._shapes = new Map<bigint, Shape[]>()
    this._shapeAreas = new Map<bigint, number>()
    this._shapePerimeters = new Map<bigint, number>()
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

    if (this._shapePerimeters.get(u.id) === undefined) {
      this._shapePerimeters.set(u.id, 0)
    }
    this._shapePerimeters.set(u.id, Number(this._shapePerimeters.get(u.id)) + s.perimeter())
  }

  public shapes(u: User): Shape[] {
    return <Shape[]>this._shapes.get(u.id)
  }

  public shapeAreas(u: User): number {
    return Number(this._shapeAreas.get(u.id))
  }

  public shapePerimeters(u: User): number {
    return Number(this._shapePerimeters.get(u.id))
  }
}