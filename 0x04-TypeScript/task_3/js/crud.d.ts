import { RowID, RowElement } from "./interface";
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): void;
