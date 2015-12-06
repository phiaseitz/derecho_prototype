var currentUserPinData =  {
  group: "A",
  occupants: [
    {
    firstName: "Sophia",
    lastName: "Seitz",
    contactMethods: ["Email", "Text"],
    contactValues: [
      "sophia.seitz@students.olin.edu",
      "555-555-5555"
    ]
  },
  {
    firstName: "Tenzin",
    lastName: "Choetso",
    contactMethods: ["Email", "Text"],
    contactValues: [
      "tenzin.choetso@students.olin.edu",
      "555-555-5556"
    ]
  }
  ],
  hall: 1,
  room: 409,
  tags: [{label:"Partying", value: 0},
         {label: "Movies", value: 3}]
};

module.exports = currentUserPinData;
