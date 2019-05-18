import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ITime, CLOCK_TYPE } from '../clock/clock.component';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit, OnChanges {


  @Input() userTime: ITime;
  @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();

  @Input() revertLabel: string;
  @Input() submitLabel: string;

  @Output() onRevert: EventEmitter<null> = new EventEmitter();
  @Output() onSubmit: EventEmitter<ITime> = new EventEmitter();
  @Output() onChange: EventEmitter<ITime> = new EventEmitter();  

  @Input() color: string;

  public VIEW_HOURS = CLOCK_TYPE.HOURS;
  public VIEW_MINUTES = CLOCK_TYPE.MINUTES;
  public currentView: CLOCK_TYPE = this.VIEW_HOURS;

  constructor() {
    if (!this.userTime) {

      this.userTime = {

        hour: 6,
        minute: 0,
        meriden: 'PM',
        format: 12
      };
      if (!this.revertLabel) {

        this.revertLabel = 'Cancel';
      }
      if (!this.submitLabel) {
        this.submitLabel = 'Okay';
      }
    }
   }

  ngOnInit() {

    if (!this.userTime) {

      this.userTime = {

        hour: 6,
        minute: 0,
        meriden: 'PM',
        format: 12
      };
    }

    if (!this.revertLabel) {

      this.revertLabel = 'Cancel';
    }

    if (!this.submitLabel) {

      this.submitLabel = 'Okay';
    }
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
   this.onChange.emit(this.userTime);
  }
  public formatHour(): string {

    if (this.userTime.format === 24) {
      if (this.userTime.hour === 24) {
        return '00';
      } else if (this.userTime.hour < 10) {
        return '0' + String(this.userTime.hour);
      }
    }
    return String(this.userTime.hour);
  }

  public formatMinute(): string {

    if (this.userTime.minute === 0) {
      return '00';
    } else if (this.userTime.minute < 10) {
      return '0' + String(this.userTime.minute);
    } else {
      return String(this.userTime.minute);
    }
  }

  public setCurrentView(type: CLOCK_TYPE) {

    this.currentView = type;
  }

  public setMeridien(m: 'PM' | 'AM') {

    this.userTime.meriden = m;
  }

  public revert() {

    this.onRevert.emit();
  }

  public submit() {

    this.onSubmit.emit(this.userTime);
  }

  public emituserTimeChange(event) {

    this.userTimeChange.emit(this.userTime);
  }

  public onTimeChange(event) {
    this.onChange.emit(this.userTime);
  }
}
