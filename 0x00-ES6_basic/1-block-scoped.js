export default function taskBlock(trueOrFalse) {
  let task = false; // Using let instead of var for block-scoping
  let task2 = true; // Using let instead of var for block-scoping

  if (trueOrFalse) {
    let task = true; // Using let instead of var for block-scoping
    let task2 = false; // Using let instead of var for block-scoping
  }

  return [task, task2];
}
