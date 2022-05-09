function doGet) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){
      result = search(formObject.searchtext);
  }
  return result;
}

function search(searchtext){
  var spreadsheetId = '1S1H35OzQJ0C00MrnYAVpSDLRHiDwjlRzZyu7mp2hZ_c';
  var dataRage  = 'Sheet1!B2:G';
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.indexOf(searchtext)) {
      ar.push(f);
    }
  });
  return ar;
}
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
