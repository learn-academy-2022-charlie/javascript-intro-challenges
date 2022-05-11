// 1. Write the code that will log the outcome of 34 added to 71.
console.log(34+71)
// 2. Write the code that will log the outcome of 67 subtracted from 123.
console.log(123-67)
// 3. Write the code that will log the outcome of 56 multiplied by 23.
console.log(56*23)
// 4. Write the code that will log the outcome of 45 divided by 5.
console.log(45/5)
// 5. Write the code that will log the outcome of 5 to the power of 7.
console.log(5**7)
// 6. Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33%6)
// 7. Write the code that will log the length of a string containing your name.
console.log("stephen".length)
// 8. Write the code that will log whether your string includes the letter "e"?
console.log("stephen".includes("e"))
// 9. Write the code that will log the character at the first index of the string.
console.log("stephen"[0])
// 10. Write the code that will log the string in all uppercase letters.
console.log("stephen".toUpperCase())


// ||== Answers Should Be True or False ==|| //
console.log("\n ||=== Answers Should Be true or false ====|| \n")

// 11. Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)
// 12. Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// 13. Does 5 strictly equal "5"?
console.log(5 === "5")
// 14. Does !3 strictly equal 3?
console.log(!3 === 3)
// 15. Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)
// 16. Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)
// 17. Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))
// 18. Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))
// 19. Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")
// 20. Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")

// ||== Consider the Variables ==|| //
console.log("\n||=== Consider the Variables                                   ====||")
console.log("||=== var theQuestion = \"life, the universe, and everything\"   ====||")
console.log("||=== var theAnswer = 42                                       ====||\n")

var theQuestion = "life, the universe, and everything"
var theAnswer = 42

// 21. Write the code that will log theAnswer divided by 2.
console.log(theAnswer/2)
// 22. Write the code that will log the length of theQuestion.
console.log(theQuestion.length)
// 23. Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f"))
// 24. Write the code that will log the concatenation of the two variables.
console.log(theAnswer+theQuestion)
// 25. Write the code that will log "the universe".
console.log(theQuestion.slice(6,18))
// 26. Write the code that will log the character "l" from theQuestion.
console.log(theQuestion[0])
// 27. Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log(theQuestion.length > theAnswer)
