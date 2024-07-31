export default function cleanSet(set, startString) {
  // Check if startString is an empty string
  if (startString === '') {
    return '';
  }

  // Initialize an array to hold the result
  const result = [];

  // Iterate over the set values
  for (const value of set) {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
    // Append the substring after startString to the result array
      result.push(value.slice(startString.length));
    }
  }

  // Join the result array with '-' and return the string
  return result.join('-');
}
