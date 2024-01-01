import { Workbook } from "exceljs";

const workbook = new Workbook();
const sheet = workbook.addWorksheet("My Sheet", {
  properties: { tabColor: { argb: "FFC0000" } },
});

console.log("finished");
