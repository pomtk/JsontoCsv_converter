// using the 'flat' npm package that Take a nested Javascript object and flatten it, or unflatten an object with delimited keys.
const flatten=require('flat')
const fs=require('fs')
//example of json data
const jsonData = {
    "name": "John Doe",
    "personalInfo": {
       "age": 30,
       "gender": "male",
       "maritalStatus": "married"
    },
    "address": {
       "street": "123 Main St",
       "city": "Anytown",
       "state": "CA",
       "zip": "12345"
    },
    "hobbies": [
       "reading",
       "travelling",
       "music"
    ],
    "education": [
       {
          "degree": "Bachelor of Science",
          "major": "Computer Science",
          "year": 2016,
          "university": "California State University"
       },
       {
          "degree": "Master of Science",
          "major": "Artificial Intelligence",
          "year": 2018,
          "university": "Stanford University"
       }
    ],
    "workExperience": [
       {
          "company": "Google",
          "position": "Software Engineer",
          "startDate": "2016-06-01",
          "endDate": "2018-06-01"
       },
       {
          "company": "Apple",
          "position": "Machine Learning Engineer",
          "startDate": "2018-06-01",
          "endDate": "Present"
       }
    ]
 }
  const result=flatten(jsonData)
  console.log(typeof result)
  
  //function to convert the flattenobject to csv string type format
  function objectToCSV(obj) {
    let csvString = '';
    let headers = [];
    let values = [];

    for (let key in obj) {
        headers.push(key);
        values.push(obj[key]);
    }

    csvString += headers.join(',') + '\r\n';
    csvString += values.join(',') + '\r\n';

    return csvString;
}
const ans=objectToCSV(result)
const inputString=ans
const outputFile = 'test4.csv';
fs.writeFile(outputFile, inputString, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`The file was saved to ${outputFile}`);
  }
});
// function objToCSV(obj) {
//     const headers = new Set();
//     const rows = [];
  
//     Object.keys(obj).forEach(key => {
//       const parts = key.split(".");
//       if (parts.length === 2 && !isNaN(parts[1])) {
//         rows.push({ [parts[0]]: obj[key] });
//       } else {
//         headers.add(key);
//       }
//     });
  
//     const csvHeaders = Array.from(headers).map(header => {
//       return header.replace(/\./g, "__");
//     });
  
//     let csvRows = [];
//     let currentRow = {};
//     rows.forEach(row => {
//       const header = Object.keys(row)[0];
//       if (!currentRow[header]) {
//         currentRow[header] = [];
//       }
//       currentRow[header].push(row[header]);
//     });
  
//     csvRows = Object.keys(currentRow).reduce((rows, header) => {
//       const values = currentRow[header];
//       for (let i = 0; i < values.length; i++) {
//         if (!rows[i]) {
//           rows[i] = {};
//         }
//         rows[i][header] = values[i];
//       }
//       return rows;
//     }, []);
  
//     let csvString = csvHeaders.join(",") + "\n";
//     csvRows.forEach(row => {
//       let rowValues = csvHeaders.map(header => {
//         return row[header] || "";
//       });
//       csvString += rowValues.join(",") + "\n";
//     });
  
//     return csvString;
//   }


//const ans=objToCSV(result)
//console.log(ans)
