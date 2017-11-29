import * as moment from 'moment';

import { JobSchedule, Due } from './jobSchedule';

describe('FixedDate Schedule', () => {
  let startDate: moment.Moment;
  let endDate: moment.Moment;
  let today: Date;

  beforeEach(() => {
    today = new Date();
    startDate = moment(today);
    endDate = moment(today);
  });

  it('#isDueWhen should return Error when date is not initialized', () => {
    startDate = null;
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(() => fixedDate.isDueWhen()).toThrowError('date is not initialized.');
  });

  it('#isDueWhen should return Past when 1 month ago', () => {
    startDate.subtract(1, 'months');
    endDate.subtract(1, 'months');
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Past when 20 days ago', () => {
    startDate.subtract(20, 'days');
    endDate.subtract(20, 'days');
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Now when 15 days ago', () => {
    startDate.subtract(15, 'days');
    endDate.subtract(15, 'days');
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when it is today', () => {
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when it is in the next few days', () => {
    startDate.add(6, 'days');
    endDate.add(6, 'days');
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Soon when it is over 16 days from now', () => {
    startDate.add(16, 'days');
    endDate.add(16, 'days');
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Soon);
  });

  it('#isDueWhen should return Soon when it is over 30 days from now', () => {
    startDate.add(31, 'days');
    endDate.add(31, 'days');
    const fixedDate = new JobSchedule(startDate, endDate);

    expect(fixedDate.isDueWhen()).toBe(Due.Later);
  });
});

describe('DateRange Schedule', () => {
  let startDate: moment.Moment;
  let endDate: moment.Moment;
  let today: Date;

  beforeEach(() => {
    today = new Date();
    startDate = moment(today);
    endDate = startDate.clone().add(7, 'days');
  });

  it('#isDueWhen should return Error when date is not initialized', () => {
    endDate = null;
    const dateRange = new JobSchedule(startDate, endDate);

    expect(() => dateRange.isDueWhen()).toThrowError('date is not initialized.');
  });

  it('#isDueWhen should return Past when 1 month ago', () => {
    startDate.subtract(1, 'months');
    endDate.subtract(1, 'months');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Past when 20 days ago', () => {
    startDate.subtract(27, 'days');
    endDate.subtract(27, 'days');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Past);
  });

  it('#isDueWhen should return Now when 15 days ago', () => {
    startDate.subtract(22, 'days');
    endDate.subtract(22, 'days');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when 7 days ago', () => {
    startDate.subtract(14, 'days');
    endDate.subtract(14, 'days');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when it is today', () => {
    startDate = moment(today).subtract(4, 'days');
    endDate = moment(today).add(3, 'days');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Now when it is in the next few days', () => {
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Now);
  });

  it('#isDueWhen should return Soon when it is over 16 days from now', () => {
    startDate.add(16, 'days');
    endDate.add(16, 'days');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Soon);
  });

  it('#isDueWhen should return Soon when it is over 30 days from now', () => {
    startDate.add(31, 'days');
    endDate.add(31, 'days');
    const dateRange = new JobSchedule(startDate, endDate);

    expect(dateRange.isDueWhen()).toBe(Due.Later);
  });
});
