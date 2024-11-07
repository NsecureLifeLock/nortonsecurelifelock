const csv = require('csv-parser');
const fs = require('fs');

// Assuming your form data is in a JSON format
const formData = {
  firstName: 'John',
  lastName: 'Doe',
  // ... other fields
};

const csvData = [];
Object.keys(formData).forEach(key => {
  csvData.push({
    field: key,
    value: formData[key]
  });
});

fs.writeFileSync('refund_data.csv', csvData.join('\n'));
