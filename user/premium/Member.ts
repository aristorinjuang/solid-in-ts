import Guest from '../Guest';
import PremiumUser from './PremiumUser';
import Repository from '../Repository';

export default class Member extends Guest implements PremiumUser {
  constructor(r: Repository) {
    super(r);
  }

  get shapePerimeters(): number {
    return this._repo.shapePerimeters(this)
  }

  get averageShapePerimeter(): number {
    return this._repo.shapePerimeters(this) / this._repo.shapes(this).length
  }
}