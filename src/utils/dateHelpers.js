import { format } from "date-fns";

function getDateStrings(dateSelected) {
  const inputDate = dateSelected;
  const year = +inputDate.substring(0, 4);
  const month = +inputDate.substring(5, 7) - 1;
  const day = +inputDate.substring(8, 10);
  return { year, month, day };
}

export const formatDate = (dateSelected) => {
  if (dateSelected) {
    const { year, month, day } = getDateStrings(dateSelected);
    const inputDate = dateSelected;
    const today = format(new Date(), "yyyy-MM-dd");
    if (today !== inputDate) {
      return format(new Date(year, month, day), "MMM yyyy");
    } else {
      return `Present`;
    }
  }
};

export function createDateObject(dateSelected) {
  const { year, month, day } = getDateStrings(dateSelected);
  return new Date(year, month, day);
}
