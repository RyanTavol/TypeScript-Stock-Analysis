//npx ts-node src/index.ts

import { Stock } from "../include/Stock";

console.log("hello");
console.log("test");

const testStock = new Stock("Apple", "apl", [1,2,3]);
console.log(testStock.toString());