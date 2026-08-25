/**
 * TravelVista Ltd — Contact form → Google Sheet bridge.
 *
 * Setup:
 * 1. Create a new Google Sheet (e.g. "TravelVista Enquiries").
 * 2. In row 1, add these headers exactly:
 *    Timestamp | Name | Email | Phone | Service | Destination | Message
 * 3. Open Extensions → Apps Script, delete any starter code, and paste this
 *    entire file in.
 * 4. Click Deploy → New deployment → select type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize the permissions Google asks for, then copy the
 *    generated Web app URL.
 * 6. Put that URL in the project's .env.local as:
 *    GOOGLE_SHEETS_WEBHOOK_URL=<the copied URL>
 * 7. Restart the Next.js dev server (or redeploy) so it picks up the new
 *    environment variable.
 *
 * Every time someone submits the site's Contact form, a new row is appended
 * to this sheet in real time, and (if you open the sheet in Google Sheets'
 * "Notifications" menu → "Set notification rules") you can also get an
 * email the moment a new row is added.
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.service || "",
    data.destination || "",
    data.message || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
