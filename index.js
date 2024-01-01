const ExcelJS = require("exceljs");

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet("My Sheet", {
  properties: { tabColor: { argb: "FFC0000" } },
});

console.log("finished");
