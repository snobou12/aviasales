export const sortFunction = (sortByTrans, sortByFunc, data) => {
  console.log(data);
  let sortedTickets = data.slice();

  if (sortByFunc === 0) {
    sortedTickets.sort((firstObj, secondObj) => firstObj.price - secondObj.price);
  }
  if (sortByFunc === 1) {
    sortedTickets.sort(
      (firstObj, secondObj) => firstObj.segments[0].duration - secondObj.segments[0].duration,
    );
  }
  if (sortByFunc === 2) {
    sortedTickets = sortedTickets.filter(
      (obj) => obj.price < 40000 && obj.segments[0].duration < 1400,
    );
  }

  let countOfCheckBox = 0;
  for (let i = 0; i < 4; i++) {
    if (sortByTrans[i] === true) {
      countOfCheckBox++;
    }
  }
  if (countOfCheckBox === 1) {
    if (sortByTrans[0]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length === 0 && obj.segments[1].stops.length === 0,
      );
    }
    if (sortByTrans[1]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length === 1 && obj.segments[1].stops.length === 1,
      );
    }
    if (sortByTrans[2]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length === 2 && obj.segments[1].stops.length === 2,
      );
    }
    if (sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length === 3 && obj.segments[1].stops.length === 3,
      );
    }
  } else if (countOfCheckBox === 2) {
    if (sortByTrans[0] && sortByTrans[1]) {
      sortedTickets = sortedTickets.filter(
        (obj) =>
          obj.segments[0].stops.length != 2 &&
          obj.segments[1].stops.length != 2 &&
          obj.segments[0].stops.length != 3 &&
          obj.segments[1].stops.length != 3,
      );
    }
    if (sortByTrans[0] && sortByTrans[2]) {
      sortedTickets = sortedTickets.filter(
        (obj) =>
          obj.segments[0].stops.length != 1 &&
          obj.segments[1].stops.length != 1 &&
          obj.segments[0].stops.length != 3 &&
          obj.segments[1].stops.length != 3,
      );
    }
    if (sortByTrans[0] && sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) =>
          obj.segments[0].stops.length != 1 &&
          obj.segments[1].stops.length != 1 &&
          obj.segments[0].stops.length != 2 &&
          obj.segments[1].stops.length != 2,
      );
    }
    if (sortByTrans[1] && sortByTrans[2]) {
      sortedTickets = sortedTickets.filter(
        (obj) =>
          obj.segments[0].stops.length != 0 &&
          obj.segments[1].stops.length != 0 &&
          obj.segments[0].stops.length != 3 &&
          obj.segments[1].stops.length != 3,
      );
    }
    if (sortByTrans[1] && sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) =>
          obj.segments[0].stops.length != 0 &&
          obj.segments[1].stops.length != 0 &&
          obj.segments[0].stops.length != 2 &&
          obj.segments[1].stops.length != 2,
      );
    }
    if (sortByTrans[2] && sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) =>
          obj.segments[0].stops.length != 0 &&
          obj.segments[1].stops.length != 0 &&
          obj.segments[0].stops.length != 1 &&
          obj.segments[1].stops.length != 1,
      );
    }
  } else if (countOfCheckBox === 3) {
    if (sortByTrans[0] && sortByTrans[1] && sortByTrans[2]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length != 3 && obj.segments[1].stops.length != 3,
      );
    }
    if (sortByTrans[0] && sortByTrans[1] && sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length != 2 && obj.segments[1].stops.length != 2,
      );
    }
    if (sortByTrans[1] && sortByTrans[2] && sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length != 0 && obj.segments[1].stops.length != 0,
      );
    }
    if (sortByTrans[0] && sortByTrans[2] && sortByTrans[3]) {
      sortedTickets = sortedTickets.filter(
        (obj) => obj.segments[0].stops.length != 1 && obj.segments[1].stops.length != 1,
      );
    }
  }

  return sortedTickets;
};
