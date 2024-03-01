import React, { ChangeEventHandler, useState } from "react";

// ТИПИЗАЦИЯ АРГУМЕНТОВ
export default function indexReactTypes(a: string, d: number) {
  return <div>indexReactTypes</div>;
}

//можно экспортировать
export interface indexReactTypesProps {
  a: string;
  b: number;
  renderFunction: (item: number) => void;
}
export default function indexReactTypes({
  a,
  b,
  renderFunction,
}: indexReactTypesProps) {
  renderFunction(b);
  return <div>indexReactTypes</div>;
}

//вариант 2
export default function indexReactTypes({ a, b }: { a: string; b: number }) {
  return <div>indexReactTypes</div>;
}

// типизация return
// void ничего
export default function indexReactTypes(): void {
  console.log(234);
}

// inputHandler
export default function indexReactTypes({ a, b }: { a: string; b: number }) {
  const asd = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return <input onChange={asd} />;
}
// selectHandler
export default function indexReactTypes({ a, b }: { a: string; b: number }) {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {};
  return (
    <select onChange={onChange}>
      <option selected disabled>
        Choose one
      </option>
      <option value="blue">Blue</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
    </select>
  );
}

//generic
/* export interface ReactTypesProps<T> {
  a: T;
  b: string;

}
const value:ReactTypesProps<string> = {a:'123', b:'123'}
console.log(value) */

/* // useState
export default function indexReactTypes() {
  const [first, setFirst] = useState<number[]>([])
  return (
    <select >
      <option selected disabled>
        Choose one
      </option>

    </select>
  );
} */
