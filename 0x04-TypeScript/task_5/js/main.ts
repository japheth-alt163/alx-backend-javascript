// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "Major";
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "Minor";
}

// Define sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major"
  };
}

// Define sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor"
  };
}

// Test the functions
const subject1Major: MajorCredits = { credits: 30, brand: "Major" };
const subject2Major: MajorCredits = { credits: 20, brand: "Major" };
const subject1Minor: MinorCredits = { credits: 10, brand: "Minor" };
const subject2Minor: MinorCredits = { credits: 15, brand: "Minor" };

console.log("Sum of Major Credits:");
console.log(sumMajorCredits(subject1Major, subject2Major));

console.log("\nSum of Minor Credits:");
console.log(sumMinorCredits(subject1Minor, subject2Minor));
