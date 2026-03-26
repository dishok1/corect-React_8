import harry from "./person/harry.png";
import luk from "./person/luk.png";
export const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const PERSONS = [
  {
    id: 1,
    personImage: harry,
    personName: "Harry",
    personLastName: "Potter",
    isOnLine: true,
  },
  {
    id: 2,
    personImage: luk,
    personName: "luk",
    personLastName: "Skywalker",
    isOnLine: false,
  },
];
