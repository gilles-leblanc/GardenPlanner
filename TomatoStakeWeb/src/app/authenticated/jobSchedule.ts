import * as moment from 'moment';

export enum Due { Past, Now, Soon, Later }
export enum Month { January, February, March, April, May, June, July, August, September, Octoboer, November, December }

export class JobSchedule {
  readonly startDate: moment.Moment;
  readonly endDate: moment.Moment;

  constructor(startDate: moment.Moment, endDate: moment.Moment) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  isDueWhen(): Due {
    if (!this.startDate || !this.endDate) {
      throw new Error('date is not initialized.');
    }

    const today: moment.Moment = moment(new Date());

    if (this.endDate.isBefore(today.clone().subtract(15, 'days'))) {
      return Due.Past;
    }

    if (this.startDate.isAfter(today.clone().add(30, 'days'))) {
      return Due.Later;
    }

    if (this.startDate.isAfter(today.clone().add(15, 'days'))) {
      return Due.Soon;
    }

    return Due.Now;
  }
}
