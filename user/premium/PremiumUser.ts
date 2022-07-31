import User from '../User';

export default interface PremiumUser extends User {
  get shapePerimeters(): number
  get averageShapePerimeter(): number
}