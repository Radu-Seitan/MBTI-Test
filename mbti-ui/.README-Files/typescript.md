## TypeScript

### Handbook

The TypeScript Handbook is intended to be a comprehensive document that explains TypeScript to everyday programmers.
[Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

In addition there's a great set of resources over at [Cheatsheet](https://github.com/typescript-cheatsheets/react) offering
examples and best practices ranging from basic to advanced.

### Omit<Type, Keys>

Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

Example:
```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
```
```
const todo: TodoPreview
```

```
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 
todoInfo;
```
```
const todoInfo: TodoInfo
```
