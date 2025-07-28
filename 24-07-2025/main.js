// Task 1
const sym1 = Symbol("myKey");
const sym2 = Symbol("myKey");

const obj1 = {
   [sym1]: "Value for sym1",
   [sym2]: "Value for sym2",
};

console.log(obj1[sym1]);
console.log(obj1[sym2]);
console.log(Object.keys(obj1));
console.log(Object.getOwnPropertySymbols(obj1));

// Task 2
const shared1 = Symbol.for("session");
const shared2 = Symbol.for("session");
console.log(shared1 === shared2);

console.log(Symbol.keyFor(shared1));

const localSymbol = Symbol("session");
console.log(localSymbol === shared1);
console.log(Symbol.keyFor(localSymbol));

// Task 3
class AdminOnly {
   static [Symbol.hasInstance](obj) {
      return obj && obj.role === "admin";
   }
}

console.log({ role: "admin" } instanceof AdminOnly);
console.log({ role: "user" } instanceof AdminOnly);

// Task 4
const customArray = {
   0: "a",
   1: "b",
   length: 2,
   [Symbol.isConcatSpreadable]: true,
};

console.log([].concat(customArray));

customArray[Symbol.isConcatSpreadable] = false;
console.log([].concat(customArray));

// Task 5
const iterableObj = {
   data: [10, 20, 30],
   [Symbol.iterator]() {
      let index = 0;
      return {
         next: () => {
            console.log(`next called: index = ${index}`);
            if (index < this.data.length) {
               return { value: this.data[index++], done: false };
            } else {
               return { done: true };
            }
         },
      };
   },
};

for (const value of iterableObj) {
   console.log(value);
}

// Task 6
const reverseIterable = {
   items: ["one", "two", "three"],
   [Symbol.iterator]() {
      let index = this.items.length - 1;
      return {
         next: () => {
            if (index >= 0) {
               return { value: this.items[index--], done: false };
            }
            return { done: true };
         },
      };
   },
};

for (const val of reverseIterable) {
   console.log(val);
}

// Task 7
const genIterable = {
   data: [1, 2, 3, 4],
   skipEven: false,
   *[Symbol.iterator]() {
      for (const num of this.data) {
         if (this.skipEven && num % 2 === 0) continue;
         yield num;
      }
   },
};

console.log([...genIterable]);
genIterable.skipEven = true;
console.log([...genIterable]);

// Task 8
function range(start, end, step = 1) {
   return {
      [Symbol.iterator]() {
         let current = start;
         return {
            next() {
               const done = step > 0 ? current >= end : current <= end;
               if (done) return { done: true };
               const result = { value: current, done: false };
               current += step;
               return result;
            },
         };
      },
   };
}

console.log([...range(0, 5)]);
console.log([...range(5, 0, -2)]);

// Task 10
const nested = [1, [2, [3, 4], 5], 6];

function* flatten(array) {
   for (const item of array) {
      if (Array.isArray(item)) {
         yield* flatten(item);
      } else {
         yield item;
      }
   }
}

const lazyFlattened = {
   [Symbol.iterator]() {
      return flatten(nested);
   },
};

console.log([...lazyFlattened]);

// Project 1
class Money {
   constructor(amount) {
      this.amount = amount;
   }

   [Symbol.toPrimitive](hint) {
      if (hint === "string") return `$${this.amount}`;
      if (hint === "number") return this.amount;
      return this.amount;
   }
}

const cash = new Money(100);
console.log(`${cash}`);
console.log(cash + 50);

// Project 2
const Color = {
   RED: Symbol("RED"),
   GREEN: Symbol("GREEN"),
   BLUE: Symbol("BLUE"),
};

function getColorName(symbol) {
   for (const [key, value] of Object.entries(Color)) {
      if (value === symbol) return key;
   }
   return null;
}

const currentColor = Color.GREEN;

console.log(getColorName(currentColor));
