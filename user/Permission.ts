import User from './User';
import Shape from '../shape/Shape';

export const HasPermission = (u: User, s: Shape): boolean => {
  if (u.constructor.name != 'Guest') {
    return true
  }
  switch (s.constructor.name) {
    case 'Circle':
    case 'Square':
      return true
  }
  return false
}