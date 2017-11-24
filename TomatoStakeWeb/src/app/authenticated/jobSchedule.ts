import * as moment from 'moment';

export enum Due { Past, Now, Soon, Later }

export interface Schedule {
  isDueWhen(): Due;
}

export enum Month { January, February, March, April, May, June, July, August, September, Octoboer, November, December }

export type JobSchedule = FixedDate | DateRange | FixedMonth | MonthRange;

export class FixedDate implements Schedule {
  date: moment.Moment;

  isDueWhen(): Due {
    if (!this.date) {
      throw new Error("date is not initialized.");
    }    

    let today: moment.Moment = moment(new Date());

    let deltaDay = today.diff(this.date, 'days');
    let deltaMonth = today.diff(this.date, 'months');

    if (deltaMonth >= 1) {
      return Due.Past;
    }

    if (deltaDay >= 20) {
      return Due.Past;
    }

    if (deltaDay < -20) {
      return Due.Later;
    }

    if (deltaDay <= -8) {
      return Due.Soon;
    }

    return Due.Now;
  }
}

export type FixedMonth = Month;
export type DateRange = [FixedDate, FixedDate];
export type MonthRange = [FixedMonth, FixedMonth];
