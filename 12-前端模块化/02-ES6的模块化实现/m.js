import {name,age} from "./a.js";

console.log(name);

console.log(age);

import {sum} from "./a.js";

console.log(sum(10, 23));

import {Person} from  "./a.js";

let person = new Person();
person.run();

import addr from "./a.js"

console.log(addr);
//导入的数据过多的情况下 使用  *  代替   然后起别名 as
import * as  mm from "./a.js";

console.log(mm.age);