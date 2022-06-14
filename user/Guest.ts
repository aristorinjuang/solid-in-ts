import { v4 as uuidv4 } from 'uuid';
import Shape from '../shape/Shape';
import User from './User';
import Repository from './Repository';
import { HasPermission } from './Permission';

export default class Guest implements User {
  private _id: string
  protected _repo: Repository

  constructor(r: Repository) {
    this._id = uuidv4()
    this._repo = r
  }

  get id(): bigint {
    return BigInt('0x' + this._id.replace(/-/g, ''))
  }

  public addShape(s: Shape): void {
    if (!HasPermission(this, s)) {
      return
    }

    this._repo.addShape(this, s)
  }

  get shapeAreas(): number {
    return this._repo.shapeAreas(this)
  }

  get averageShapeArea(): number {
    return this._repo.shapeAreas(this) / this._repo.shapes.length
  }
}