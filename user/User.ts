import Shape from '../shape/Shape';

export default interface User {
  get id(): bigint
  addShape(shape: Shape): void
  get shapeAreas(): number
  get averageShapeArea(): number
}