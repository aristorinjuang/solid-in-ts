import Guest from '../Guest';
import PremiumUser from './PremiumUser';
import Repository from '../Repository';

export default class Member extends Guest implements PremiumUser {
  constructor(r: Repository) {
    super(r);
  }

  get shapeCircumferences(): number {
    return this._repo.shapeCircumference(this)
  }

  get averageShapeCircumference(): number {
    return this._repo.shapeCircumference(this) / this._repo.shapes(this).length
  }
}