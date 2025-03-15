// Prompt the user for the max limit of the loops.
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));


  // Use double loop to iterate and print the map
  for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
      // Calculate the added value
      const addedValue = i + j;

      // Log the loop points and added value to the console
      console.log(`[${i}] [${j}] Added value is ${addedValue}`);
    }
  }
