import * as moment from 'moment';

import { FixedDate, Due } from "./jobSchedule";

describe('FixedDate Schedule', () => {
  let fixedDate: FixedDate;
  let today: Date;

  beforeEach(() => { 
    fixedDate = new FixedDate(); 
    today = new Date();
    fixedDate.date = moment(today);
  });

  it('#isDueWhen should return Error when date is not initialized', () => {
    fixedDate.date = null;
    expect(() => fixedDate.isDueWhen()).toThrowError("date is not initialized.");
  });

  it('#isDueWhen should return Past when 1 month ago', () => {
    fixedDate.date.subtract(1, 'months');
    expect(fixedDate.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Past when 20 days ago', () => {
    fixedDate.date.subtract(20, 'days');
    expect(fixedDate.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Now when 15 days ago', () => {
    fixedDate.date.subtract(15, 'days');
    expect(fixedDate.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when it is today', () => {
    expect(fixedDate.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when it is in the next few days', () => {
    fixedDate.date.add(6, 'days');
    expect(fixedDate.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Soon when it is over 7 days from now', () => {
    fixedDate.date.add(8, 'days');
    expect(fixedDate.isDueWhen()).toBe(Due.Soon);
  });

  it('#isDueWhen should return Soon when it is 20 days from now', () => {
    fixedDate.date.add(20, 'days');
    expect(fixedDate.isDueWhen()).toBe(Due.Soon);
  });

  it('#isDueWhen should return Soon when it is over 20 days from now', () => {
    fixedDate.date.add(21, 'days');
    expect(fixedDate.isDueWhen()).toBe(Due.Later);
  });
});