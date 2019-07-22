db.students.remove({});
db.students.insertMany([{
  "email": "mesrobk@gmail.com",
  "firstName": "Mesrob",
  "lastName": "Kyurkchyan",
  "password": "password",
  "learningTargets": [
    "Animation",
    "Game Development",
    "Filmmaking"
  ],
  "location": "Yerevan"
}, {
  "email": "anna.gigoyan.y@tumo.org",
  "firstName": "Anna",
  "lastName": "Gigoyan",
  "password": "password",
  "learningTargets": [
    "Game Development",
  ],
  "location": "Yerevan"
},

])

db.students.createIndex({ lastName: "text", firstName: "text", location: "text" })
db.students.createIndex({ learningTargets: 1})
