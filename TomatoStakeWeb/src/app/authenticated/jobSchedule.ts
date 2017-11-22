
export enum Due { Past, Now, Soon, Later }

export interface Schedule {
  isDueWhen(): Due;
}

export enum Month { January, February, March, April, May, June, July, August, September, Octoboer, November, December }

export type JobSchedule = FixedDate | DateRange | FixedMonth | MonthRange;

export class FixedDate implements Schedule {
  day: number;
  month: Month;

  isDueWhen(): Due {
    let today = new Date();

    let deltaDay = Math.abs(this.day - today.getDate());
    let deltaMonth = this.month - today.getMonth();

    if (deltaMonth <= -1) {
      return Due.Past;
    }

    throw new Error("Can't calculate when job is due.");    
  }
}

export type FixedMonth = Month;
export type DateRange = [FixedDate, FixedDate];
export type MonthRange = [FixedMonth, FixedMonth];
