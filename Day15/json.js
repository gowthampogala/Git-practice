const jsonData = `{
  "studentId": 101,
  "name": "Arun Kumar",
  "age": 22,
  "isStudent": true,
  "skills": ["Java", "JavaScript", "SQL"],
  "address": {
    "city": "Bangalore",
    "state": "Karnataka",
    "pincode": 560001
  },
  "marks": {
    "java": 85,
    "javascript": 90,
    "sql": 78
  },
  "graduationYear": null
}`;
const javascript = JSON.parse(jsonData);
console.log(javascript);
console.log(javascript.studentId);
const convertToJson = JSON.stringify(javascript);
console.log(convertToJson);
