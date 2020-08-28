import { Injectable } from '@angular/core';
declare var jquery: any;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ProgressDialogService {

  private token: number;

  constructor() { }

  public show(min: number, max: number): number {
    this.token = Math.floor((Math.random() * 1000000) + 1);
    const pb = ProgressBundle.load();
    pb.setMinMax(min, max);
    pb.setCurrent(0);
    pb.show();
    return this.token;
  }

  public dismiss(to: number): void {
    if (to !== this.token) { return; }
    ProgressBundle.load().dismiss();
  }

}

class ProgressBundle {

  private static instance: ProgressBundle;
  toast: any;
  container: any;
  progressbar: any;

  constructor() {
    this.toast = $('.progress-dialog');
    this.container = $('#progress-dialog-container');
    this.progressbar = $('.progress-bar');
    this.container.animate({ top: '-9000px' }, 10);
    this.toast.on('hidden.bs.toast', () => {
      this.container.animate({ top: '-9000px' }, 10);
    });
  }



  static load(): ProgressBundle {
    if (!this.instance) {
      this.instance = new ProgressBundle();
    }
    return this.instance;
  }

  setMinMax(min: number, max: number): void {
    this.progressbar.data('aria-valuemin', min);
    this.progressbar.data('aria-valuemax', max);
  }

  setCurrent(c: number): void {
    this.progressbar.data('aria-valuenow', c);
  }

  show(): void {
    this.container.animate({ top: '0px' }, 10);
    this.toast.toast('show');
  }

  dismiss(): void {
    this.container.animate({ top: '-9000px' }, 10);
    this.toast.toast('hide');
  }

}
