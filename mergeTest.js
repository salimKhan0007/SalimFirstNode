const PDFMerger = require('pdf-merger-js');

const merger = new PDFMerger();
const mergerPDF = async (p1, p2,p3) => {

  await merger.add(p1); // merge only page 2
  await merger.add(p2); // merge only page 2
  await merger.add(p3); // merge only page 2

  const d = new Date().getTime();

  await merger.save(`public/${d}.pdf`); // save under given name and reset the internal document
  return d;
};

module.exports = { mergerPDF };