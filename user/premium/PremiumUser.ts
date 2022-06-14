import User from '../User';

export default interface PremiumUser extends User {
  get shapeCircumferences(): number
  get averageShapeCircumference(): number
}