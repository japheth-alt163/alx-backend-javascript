// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${newRowID}`);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, updatedRow);`);
console.log(`// Update row ${updatedRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(updatedRowID);
console.log(`CRUD.deleteRow(${updatedRowID});`);
console.log(`// Delete row id ${updatedRowID}`);
