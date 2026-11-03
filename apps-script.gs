// Google Apps Script — paste into Extensions > Apps Script of a Google Sheet,
// then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
// Paste the /exec URL into the app under Setup > Parent report. Keep the URL private.
function clean(v) {
  if (typeof v === "string" && /^[=+\-@]/.test(v)) return "'" + v;
  return v;
}
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName("log") || ss.insertSheet("log");
  if (sh.getLastRow() === 0) {
    sh.appendRow(["received", "date", "name", "streak", "xp", "mastered", "seen", "total", "due",
                  "today questions", "today accuracy %", "today new", "today xp",
                  "weak items (misses)", "backup code"]);
    sh.setFrozenRows(1);
  }
  sh.appendRow([new Date(), d.date, d.name, d.streak, d.xp, d.mastered, d.seen, d.total, d.due,
                d.todayQ, d.todayAcc, d.todayNew, d.todayXP, d.weak, d.backup].map(clean));
  return ContentService.createTextOutput("ok");
}
function doGet() { return ContentService.createTextOutput("Report endpoint is live."); }
