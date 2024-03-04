// типы string number boolean null  undefined

//string[]  пример ['qwe','qwr','asd']
//let x: "hello"|'asdf'|'aaaa' = "aaaa";
//let myName: string = "Alice";
//let myName = 2; сам задаст тип

/* function greet(name: string,nameSecond: number) {
  console.log("Hello, " + name.toUpperCase() + "!!");
} */

// то что возвращает функция
/* function getFavoriteNumber(): number {
  return 26;
} */

//void ничего не возвращать
/* function getFavoriteNumber(): void {

} */

//Union Types
/* function printId(id: number | string) {

  console.log("Your ID is: " + id);
} */

//нужна проверка типа typeof
/* function printId(id: number | string) {
  if (typeof id === "number") {
    // In this branch, id is of type 'string'
    console.log(id);
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
} */

/* // type
type Point = {
  id: number;
  value: string;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.id);
  console.log("The coordinate's y value is " + pt.value);
} */
//type ID = number | string;

/*  interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
 type ID = Point | string; */

/*  //расширение интерфейсов
 interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
 */

// поменять тип вручную(стараться так не делать )
/* function getFavoriteNumber(): number {
  return '123' as unknown  as number;
}
 */

function getFavoriteNumber(): number {
  //не проверять следующую строку (стараться так не делать )
  // @ts-ignore
  return "123";
}

//пишется вначале отменяет проверку тс
// @ts-nocheck
