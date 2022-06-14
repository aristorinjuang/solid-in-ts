import User from './User';
import Shape from '../shape/Shape';

export default interface Repository {
  addShape(user: User, shape: Shape): void
  shapes(user: User): Shape[]
  shapeAreas(user: User): number
  shapeCircumference(user: User): number
}