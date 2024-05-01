// Import required modules
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create and export constants for each Subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object with experienceTeachingC
export const cTeacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

// Set cTeacher as the teacher for Cpp subject
cpp.setTeacher(cTeacher);
console.log("C++:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set cTeacher as the teacher for Java subject
java.setTeacher(cTeacher);
console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set cTeacher as the teacher for React subject
react.setTeacher(cTeacher);
console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
