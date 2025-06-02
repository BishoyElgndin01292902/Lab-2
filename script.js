// Step 2: If-else Condition
let number = 5; 

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


// Step 3: Switch Statement
let day = 1; 

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day. Please enter a number between 1 and 7.");
}

// Step 4: Loops (For, While, Do...While)
// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// While Loop
let i = 1;
while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

// Do...While Loop
let j = 1;
do {
  console.log("Do...While Loop:", j);
  j++;
} while (j <= 5);



// Step 5: Control Flow with break and continue

// Break Example: Stop loop at 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Break Loop Value:", i);
}

// Continue Example: Skip 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("Continue Loop Value:", i);
}



// Step 6: Scope and Context

let globalVar = "I'm global!";

function scopeExample() {
  let localVar = "I'm local!";
  console.log("Inside function:");
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

scopeExample();

console.log("Outside function:");
console.log(globalVar); // Accessible
// console.log(localVar); // Un-commenting this will cause an error: not accessible outside