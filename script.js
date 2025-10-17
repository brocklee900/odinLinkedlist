
import { createLinkedList } from "./linkedList.js";

console.log("woah");

let l = createLinkedList();

console.log(l);

l.append(34);
l.append(345);
l.append("wowee");
l.append(111);
l.append(33333);

console.log(l.toString());