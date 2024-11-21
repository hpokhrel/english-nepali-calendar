## 📦 Installation

Install the package using npm:

```bash
npm install english-nepali-calendar
```

---

## 🚀 Usage

### Import the library

You can import the library and use its functions to convert dates between the English (Gregorian) and Nepali (Bikram Sambat) calendars.

```typescript
import { englishToNepali, nepaliToEnglish } from "english-nepali-calendar";
```

### Convert English to Nepali

Pass an English (Gregorian) date as a `Date` object to the `englishToNepali` function:

```typescript
const nepaliDate = englishToNepali(new Date("1997-11-19"));
console.log(nepaliDate);
// Output: { year: 2054, month: 8, day: 4 }
```

### Convert Nepali to English

Provide a Nepali (Bikram Sambat) date as an object `{ year, month, day }` to the `nepaliToEnglish` function:

```typescript
const englishDate = nepaliToEnglish({ year: 2029, month: 2, day: 9 });
console.log(englishDate);
// Output: 1972-05-22T00:00:00.000Z
```

---

## 📖 Example

Here’s a full example demonstrating both conversions:

```typescript
import { englishToNepali, nepaliToEnglish } from "english-nepali-calendar";

const nepaliDate = englishToNepali(new Date("1997-11-19"));
console.log("Nepali Date:", nepaliDate);
// Output: Nepali Date: { year: 2054, month: 8, day: 4 }

const englishDate = nepaliToEnglish({ year: 2029, month: 2, day: 9 });
console.log("English Date:", englishDate);
// Output: English Date: 1972-05-22T00:00:00.000Z
```
