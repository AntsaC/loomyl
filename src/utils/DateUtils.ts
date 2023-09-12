import { format } from "date-fns";

const parse = (date: string) =>
  format(Date.parse(date), "dd MMM yyyy 'at' HH:mm");

export const DateUtils = {
  parse,
};
