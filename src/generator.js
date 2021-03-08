import { NextWeek } from "@material-ui/icons"

function* inter(){
    yield 'redux saga'
}
function* funct(){
    yield 'xin chao'
    const b = inter()
    yield* inter()
    yield 'ket thuc'
}
const a = funct() // iterator
// console.log(funct().next());
// console.log(funct().next());
console.log(a.next());
console.log(a.next());
console.log(a.next());