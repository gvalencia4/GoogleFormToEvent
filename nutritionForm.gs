function createEvent() {
  var form = FormApp.getActiveForm();
  var cal = CalendarApp.getDefaultCalendar();
  var responses = form.getResponses();
  var len = responses.length;
  var last = len - 1;
  var items = responses[last].getItemResponses();
  var email = responses[last].getRespondentEmail();
  var name = items[0].getResponse();
  var bring = items[1].getResponse();
  var date = items[2].getResponse();
  Logger.log(date);
  var replace = date.replace(/-/g, "/");
  Logger.log(replace);
  var start = new Date(replace);
  Logger.log("start " + start);

  //Logger.log(newStart.getHours());
  //var endHours = 2 + 0 + start.getHours();

  //Logger.log(start.getDay());
  //var day = start.getDate();
  //var minutes = start.getMinutes();
  //var year = start.getFullYear();
  //var month = start.getMonth();
  //var hours = start.getHours();

  //var d = new Date(year, month, day, endHours, minutes);
  //Logger.log(d);

  var event = cal.createEvent("Class Party " + name + " brings " + bring, start, d)
    .addGuest(email)
    .setDescription(name + " you will be bringing " + bring + " to the party.");

  GmailApp.sendEmail(email, name + " a Google Calendar invite has been created for you", name + " You filled out the Google Form for the date of " + start + ". Check your Google Calendar to confirm that you received the invite.\n");

}
