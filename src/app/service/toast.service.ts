import { Injectable } from '@angular/core';
import { CommUtils } from '../comm-utils';
declare var jquery: any;
declare let $: any;

export class ToastInfo {
  public title: string;
  public msg: string;
}


@Injectable({
  providedIn: 'root'
})
export class ToastService {


  private token: number;

  constructor() { }

  public async twinkle(ti: ToastInfo): Promise<void> {
    const t = this.show(ti);
    await CommUtils.delay(1770);
    this.dismiss(t);
  }

  public show(ti: ToastInfo): number {
    this.token = Math.floor((Math.random() * 1000000) + 1);
    ToastBundle.load().show(ti);
    return this.token;
    // this.dismissLoading();
  }

  public dismiss(to: number): void {
    // Preloader
    if (to !== this.token) { return; }
    ToastBundle.load().dismiss();
  }


}

class ToastBundle {

  private static instance: ToastBundle;

  constructor() {
    this.toast = $('.toast');
    this.container = $('#toast-container');
    this.container.animate({ top: '-9000px' }, 10);
    this.toast.on('hidden.bs.toast', () => {
      this.container.animate({ top: '-9000px' }, 10);
    });
  }
  toast: any;
  container: any;

  static load(): ToastBundle {
    if (!this.instance) {
      this.instance = new ToastBundle();
    }
    return this.instance;
  }

  show(ti: ToastInfo): void {
    this.container.animate({ top: '0px' }, 10);
    this.toast.toast('show');
    $('.toast .toast-body').text(ti.msg);
    $('.toast strong').text(ti.title);


  }

  dismiss(): void {
    this.container.animate({ top: '-9000px' }, 10);
    this.toast.toast('hide');
  }

}

