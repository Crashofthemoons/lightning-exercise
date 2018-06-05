// Exercise: Using Javascript, create a variable to hold your last name. Then, if your last name has 7 or more letters, console log "I can't pronounce this last name". If your last name has less than 7 characters, console log your last name.
// Challenge: Create a new repository on Github and push the code your wrote up to Github.

const lastName = "Lawson"


if (lastName.length >= 7) {
    console.log("I cant pronounce this last name")
} else {
    console.log(lastName)
}

// 1. Write a function that takes two arguments. This function should return the concatenated value of the two arguments.

// 2. Call the function with your first name and last name as the two arguments.

// 3. Console log the return value.

const fullName = (firs, last) => {
    return `${first} ${last}`
}

console.log(fullName('Jenn', 'Lawson'))
