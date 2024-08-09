function firstChar(str) {
   const trimmedStr = str.trim();
    
    // Check if the trimmed string is empty
    if (trimmedStr.length === 0) {
        return ''; // Return empty string if no non-space characters found
    }
    
    // Return the first character of the trimmed string
    return trimmedStr.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
