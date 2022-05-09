function doGet(e) {
  const ssURL = "<Your Google Sheet URL>";

  let ss = SpreadsheetApp.openByUrl(ssURL);

  let response = [];
  Logger.log(e);
  const sheetName = e.parameter.sheet;

  if (sheetName === "address") {
    let sheet = ss.getSheetByName(sheetName);

    let address = sheet.getDataRange().getValues();

    address.forEach((address, index) => {
      if (index !== 0) {
        response.push({
          province: address[0],
          district: address[1],
          subdistrict: address[2],
          postcode: address[3],
        });
      }
    });

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
      ContentService.MimeType.JSON
    );
  } else {
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
      ContentService.MimeType.JSON
    );
  }
}
