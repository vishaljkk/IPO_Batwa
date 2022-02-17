const uploadFile = require("../middleware/upload");
const fs = require('fs');
PDFParser = require("pdf2json");

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", errData => console.log(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        console.log(pdfData);
        res.status(200).send({
          message: "Uploaded the file successfully: " + req.file,
        });
    });
    // pdfParser.loadPDF(__basedir + "/uploads/" + file.originalname);
    
  } catch (err) {

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file}. ${err}`,
    });
  }
};

module.exports = {
    upload
};