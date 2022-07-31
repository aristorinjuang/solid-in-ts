import Equilateral from './shape/equilateral/Equilateral';
import Circle from './shape/equilateral/Circle';
import Square from './shape/equilateral/Square';
import Repository from './user/Repository';
import Memory from './user/memory/Memory';
import User from './user/User';
import Guest from './user/Guest';
import NonEquilateral from './shape/equilateral/non/NonEquilateral';
import Rectangle from './shape/equilateral/non/Rectangle';
import PremiumUser from './user/premium/PremiumUser';
import Member from './user/premium/Member';

let s1: Equilateral = new Circle();
s1.a = 5
console.log('s1.area()', s1.area())

let s2: Equilateral = new Square();
s2.a = 4
console.log('s2.area()', s2.area())

let db: Repository = new Memory();

let u1: User = new Guest(db);
u1.addShape(s1)
u1.addShape(s2)

console.log('u1.averageShapeArea', u1.averageShapeArea)
console.log('u1.shapeAreas', u1.shapeAreas)

let s3: NonEquilateral = new Rectangle();
s3.a = 6
s3.b = 7
console.log('s3.area()', s3.area())
console.log('s3.perimeter()', s3.perimeter())

let u2: PremiumUser = new Member(db);
u2.addShape(s1)
u2.addShape(s2)
u2.addShape(s3)

console.log('u2.averageShapeArea', u2.averageShapeArea)
console.log('u2.shapeAreas', u2.shapeAreas)
console.log('u2.averageShapePerimeter', u2.averageShapePerimeter)
console.log('u2.shapePerimeters', u2.shapePerimeters)