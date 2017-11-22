import { FixedDate, Due } from "./jobSchedule";

describe('FixedDate Schedule', () => {
  let fixedDate: FixedDate;
  let today: Date;

  beforeEach(() => { 
    fixedDate = new FixedDate(); 
    today = new Date();
  });

  it('#isDueWhen should return Past when 1 month ago', () => {
    fixedDate.day = today.getDate();
    fixedDate.month = today.getMonth() - 1;

    expect(fixedDate.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Past when 30 days ago', () => {
    fixedDate.day = today.getDate() - 30;
    fixedDate.month = today.getMonth();

    expect(fixedDate.isDueWhen()).toBe(Due.Past);
  });
});