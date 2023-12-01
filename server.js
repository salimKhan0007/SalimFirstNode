const express = require('express');

const path = require('path');
const multer = require('multer');
const mergerPDF = require('./mergeTest.js');

const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });
app.use('/static',express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));

});
app.post('/merge',upload.array('pdfs',3), async (req, res) => {
  const d=await mergerPDF.mergerPDF(
  path.join(__dirname, req.files[0].path),
  path.join(__dirname, req.files[1].path),
  path.join(__dirname, req.files[2].path));
  // path.join(__dirname, req.files[1].path));
// res.rendirect("http://localhost:3000/public/merged.pdf");
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
  // res.redirect(`http://localhost:3000/static/${d}.pdf`);

})
 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
