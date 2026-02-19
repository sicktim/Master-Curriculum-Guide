const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data', 'Continuity-25A');

// Struck-through event codes to remove
const REMOVE_CF = new Set(['CF 6754FP']);
const REMOVE_FQ = new Set(['FQ8132S', 'FQ 8132S', 'FQ 8155FA', 'FQ 8155R', 'FQ 8953F', 'FQ 9151F', 'FQ 9151R', 'FQ 9552F']);

// --- Fix CF: remove struck-through events ---
const cf = JSON.parse(fs.readFileSync(path.join(DATA, 'continuity-CF.json'), 'utf8'));
let cfRemoved = 0;
cf.sections.forEach(sec => {
  const before = sec.events.length;
  sec.events = sec.events.filter(ev => !REMOVE_CF.has(ev.eventCode));
  cfRemoved += before - sec.events.length;
});
fs.writeFileSync(path.join(DATA, 'continuity-CF.json'), JSON.stringify(cf, null, 2));
console.log(`CF: removed ${cfRemoved} struck-through events`);

// --- Fix FQ: drop old FLYING QUALITIES sheet, remove struck-through, normalize to sections format ---
const fq = JSON.parse(fs.readFileSync(path.join(DATA, 'continuity-FQ.json'), 'utf8'));
const fqEvents = fq.sheets['FQ'].events;

// Helper: check if any code in an event matches the removal set
function shouldRemove(eventCode, removeSet) {
  const codes = Array.isArray(eventCode) ? eventCode : [eventCode];
  return codes.some(c => removeSet.has(String(c).trim()));
}

const beforeFQ = fqEvents.length;
const cleanedEvents = fqEvents.filter(ev => !shouldRemove(ev.eventCode, REMOVE_FQ));
console.log(`FQ: removed ${beforeFQ - cleanedEvents.length} struck-through events, dropped FLYING QUALITIES tab`);

// Group into sections by the section field (if present)
const sectionMap = new Map();
cleanedEvents.forEach(ev => {
  const secName = ev.section || 'Flying Qualities';
  if (!sectionMap.has(secName)) sectionMap.set(secName, []);
  sectionMap.get(secName).push(ev);
});

const sections = [];
for (const [name, events] of sectionMap) {
  sections.push({ name, events });
}

const fqOut = {
  sheet: 'FQ',
  classCode: '25A',
  extractedAt: '2026-02-19',
  sections,
  summary: {
    totalEvents: cleanedEvents.length,
    totalSections: sections.length
  }
};
fs.writeFileSync(path.join(DATA, 'continuity-FQ.json'), JSON.stringify(fqOut, null, 2));

// --- Report totals ---
const files = ['continuity-CF.json', 'continuity-FQ.json', 'continuity-PF.json', 'continuity-SY.json', 'continuity-TF.json'];
let total = 0;
files.forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'));
  let c = 0;
  if (d.sections) d.sections.forEach(s => c += s.events.length);
  total += c;
  console.log(`  ${f}: ${c} events`);
});
console.log(`Total: ${total} events`);
