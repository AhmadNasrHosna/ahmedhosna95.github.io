---
title: JS30 - Day 07 - Array Cardio (2-2)
date: 2019-01-29
tags:
  - article
  - JavaScript
  - JS30 Challenge
---

Today I learned about some of the new array methods: `some()`, `.every()`, `.find()`, `.findIndex()` and spread operator `[...arr]`. It's very felxible when working with data.

``` javascript
Array.prototype.some(); // 1 
Array.prototype.every(); // 2
Array.prototype.find(); // 3
Array.prototype.findIndex(); // 4
[...arr] // 5
```
 
STARTER POINT:

``` javascript
const people = [
  { name: "Salma", year: 2003 },
  { name: "Mohamed", year: 2000 },
  { name: "Ahmed", year: 2004 },
  { name: "Fatima", year: 2007 },
  { name: "Omar", year: 2005 }
];

const comments = [
  { text: "Super Good", id: 438327 },
  { text: "I loved that, Thanks!", id: 158127 },
  { text: "Horaay! I did it.", id: 952511 },
  { text: "Nice Nice Nice", id: 441719 },
  { text: "It should be a lot of fun! ♥", id: 772218 }
];
```


### 1/ .some()
`.some()` method is - at least - looking for one item from the array items.

♦ Is at least one person 19 years old?

``` javascript/1
const currentYear = (new Date()).getFullYear();
const isAdult = people.some( person =>  currentYear - person.year >= 19);
console.log(isAdult); // true .. Because there's a person his age is already equal or greater than 19. 
```

### 2/ .every()
`.every()` method is checking for every single item of the array items.

♦ Is every person in the list 19 years old?

``` javascript/1
const currentYear = (new Date()).getFullYear();
const allAdults = people.every( person => currentYear - person.year >= 19 );
console.log(allAdults); // false .. Because not all persons in the list are adults.
```

### 3/ .find()
`.find()` method is like filter method, but instead returns just the one you are looking for.

♦ Find the comment with the id `441719`.

``` javascript/0
const comment = comments.find( comment => comment.id === 441719 );
console.log(comment); // logs {text: "Nice Nice Nice", id: 441719} 
```

### 4/ .findIndex()
`.findIndex()` method is looking for the index of the array item.

**♦ Find the comment with this id `158127` and delete it.**

``` javascript/0
const index = comments.findIndex( comment => comment.id === 158127 );
console.log(index); // logs 1

comments.splice(index, 1); // The item at index 1 is going to be deleted from the initial value of the original array.
console.log(comments); // logs (4) [{…}, {…}, {…}, {…}]
```

### 5/ Spread operator [...arr]

♦ Delete a comment from the comment list, then create a new array with the rest of comments without change the original array itself.

``` javascript/1-2
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.log(comments); // logs (5) [{…}, {…}, {…}, {…}, {…}]
console.log(newComments); // logs (4) [{…}, {…}, {…}, {…}]
```

There's an alternative way to merge arrays with each other using the `.concat()' method.

``` javascript/0
const newComments = (comments.slice(0, index)).concat(comments.slice(index + 1));
console.log(comments); // logs (5) [{…}, {…}, {…}, {…}, {…}]
console.log(newComments); // logs (4) [{…}, {…}, {…}, {…}]
```


This is the last part of a thread of two parts. you can read the first part [here](#).
