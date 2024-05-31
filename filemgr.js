const fs = require("fs/promises")
const path = require("path")

const jsonFile = path.join(__dirname, 'Node', 'listdata.json');

async function ReadData() {
  try {
    // Make sure the file exists
    await fs.access(jsonFile);
    // Read the file
    const data = await fs.readFile(jsonFile, 'utf-8');
    // convert the buffer to a json object and return it
    console.log('JSON file read successfully.');
    return JSON.parse(data);
  } catch (error) {
    console.error('ReadData() error');
    return null;
  }
}

async function WriteData(dataOut) {
  try {
    // Write the file
    const data = JSON.stringify(dataOut);
    await fs.writeFile(jsonFile, data, 'utf-8');

    console.log('JSON file written successfully.');
  } catch (error) {
    console.error('WriteData() error');
  }
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;
