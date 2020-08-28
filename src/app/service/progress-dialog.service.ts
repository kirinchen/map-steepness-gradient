import { Injectable } from '@angular/core';
declare var jquery: any;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ProgressDialogService {


  constructor() { }

  public show(min: number, max: number): void {
    const pb = ProgressBundle.load();
    pb.setMinMax(min, max);
    pb.setCurrent(0);
    pb.show();
  }

  public setCurValue(v: number): void {
    ProgressBundle.load().setCurrent(v);
  }

  public dismiss(): void {
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
    this.progressbar.attr('aria-valuemin', min);
    this.progressbar.attr('aria-valuemax', max);
  }

  setCurrent(c: number): void {
    const min = parseInt(this.progressbar.attr('aria-valuemin'));
    const max = parseInt(this.progressbar.attr('aria-valuemax'));
    const d = max - min;
    const r = (c / d) * 100;
    this.progressbar.css('width', r + '%');
    this.progressbar.attr('aria-valuenow', c);
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
