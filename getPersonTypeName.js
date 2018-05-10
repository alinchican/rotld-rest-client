const personTypes = {
  p: "person",
  ap: "authorized person",
  j: "juridical person",
  nc: "non-commercial",
  c: "commercial",
  gi: "government institution",
  pi: "public institution",
  o: "other"
};

const getPersonTypeName = personType => {
  if (typeof personType !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  if (!personType) {
    throw new TypeError("Can't decode an empty person type.");
  }

  if (!Object.keys(personTypes).includes(personType)) {
    throw new Error(
      `Person type is invalid. Must be one of ${Object.keys(personTypes).join(
        ", "
      )}.`
    );
  }

  return personTypes[personType];
};

module.exports = getPersonTypeName;
