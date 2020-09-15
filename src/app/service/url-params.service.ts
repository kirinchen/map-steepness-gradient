import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlParamsService {

  public path: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:' + event);
        this.path = event.url;
        console.log('this.path:' + this.path);
      }
    });

  }

  public getPath(): string {
    return this.path;
  }

  private params(): ParamMap {
    return this.route.snapshot.queryParamMap;
  }

  private parse(k: string): string {
    const ans = this.params().get(k);
    return ans;
  }

  public eqPath(p: string): boolean {
    return this.path.startsWith( p);
  }

  public getGitToken(): string {
    return this.parse('token');
  }

  public hasGitToken(): boolean {
    return this.params().has('token');
  }

}
