function scheduleFrontDoor() {
  
  // Open calendar

  var sheet = SpreadsheetApp.getActiveSheet();
  var calendarId = sheet.getRange("B1").getValue();
  var eventCal = CalendarApp.getCalendarById(calendarId);

  // get schedule from sheet

  var schedule = sheet.getRange("B6:E83").getValues();

  for (x=0; x < schedule.length; x++ ){

    var shift = schedule[x] ;

    var startTime = shift[0];
    var endTime = shift[1];
    var frontDoorPerson = shift[3];

    eventCal.createEvent(frontDoorPerson, startTime, endTime) ;
  
  }
}

// this seemed to fix the "An unknown error has occurred, please try again later." issue.  https://stackoverflow.com/questions/72995965/simple-function-suddenly-throws-an-unknown-error-has-occurred-please-try-again/72997432#72997432
