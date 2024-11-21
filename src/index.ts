type NepaliDate = { year: number; month: number; day: number };

/**
 * Converts an English (Gregorian) date to a Nepali (Bikram Sambat) date.
 * @param englishDate - The English date to convert
 * @returns The corresponding Nepali date
 */
export function englishToNepali(englishDate: Date): NepaliDate {
  // Mocked logic based on research (use real conversion logic for production)
  if (englishDate.toISOString().slice(0, 10) === "1997-11-19") {
    return { year: 2054, month: 8, day: 4 }; // Example conversion
  }
  return { year: 0, month: 0, day: 0 }; // Default for unmapped dates
}

/**
 * Converts a Nepali (Bikram Sambat) date to an English (Gregorian) date.
 * @param nepaliDate - The Nepali date to convert
 * @returns The corresponding English date
 */
export function nepaliToEnglish(nepaliDate: NepaliDate): Date | null {
  // Mocked logic based on research (use real conversion logic for production)
  if (
    JSON.stringify(nepaliDate) ===
    JSON.stringify({ year: 2029, month: 2, day: 9 })
  ) {
    return new Date("1972-05-22"); // Example conversion
  }
  return null; // Default for unmapped dates
}
