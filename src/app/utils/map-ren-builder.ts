import { LocInfo } from './../model/loc-info';
import { Path } from './../model/path';
export class MapRenBuilder {



  private paths: Array<Path>;

  public static build(): MapRenBuilder {
    return new MapRenBuilder();
  }

  public setPaths(ps: Array<Path>): MapRenBuilder {
    this.paths = ps;

    return this;
  }

  public gen(): MapRenData {
    const ans = new MapRenData();
    ans.request = this.genRequest();
    ans.routes.push(this.genRoute());
    return ans;
  }


  private genRoute(): Route {
    const ans = new Route();
    for (let i = 0; i < this.paths.length; i++) {
      ans.waypoint_order.push(i);
    }
    ans.legs = this.genLegs();
    return ans;
  }

  private genLegs(): Array<Leg> {
    const l = new Array<Leg>();
    for (const p of this.paths) {
      l.push(this.genLeg(p));
    }
    return l;
  }

  private genLeg(p: Path): Leg {
    const ans = new Leg();
    ans.distance = {
      value: p.distance,
      text: ''
    };
    ans.start_address = 'start:' + p.start.elevation.toFixed(2) + '(' + p.getAngleDeg().toFixed(2) + ')';
    ans.start_location = LatLng.gen(p.start);
    ans.end_address = 'end:' + p.end.elevation.toFixed(2) + '(' + p.getAngleDeg().toFixed(2) + ')';
    ans.end_location = LatLng.gen(p.end);
    return ans;
  }



  private genRequest(): Request {
    const ans = {
      origin: {
        location: LatLng.gen(this.firstPath().start)
      },
      destination: {
        location: LatLng.gen(this.lastPath().end)
      },
      travelMode: 'BICYCLING'
    };
    return ans;
  }

  private firstPath(): Path {
    return this.paths[0];
  }

  private lastPath(): Path {
    return this.paths[this.paths.length - 1];
  }

}

export class MapRenData {

  routes = new Array<Route>();
  request: Request;
}

export class Request {
  origin = {
    location: new LatLng()
  };
  destination = {
    location: new LatLng()
  };
  travelMode = 'BICYCLING';
}

export class Route {
  bounds: {
    south: number,
    west: number,
    north: number,
    east: number
  };
  legs = new Array<Leg>();
  // tslint:disable-next-line: variable-name
  waypoint_order = new Array<number>();
}

export class Leg {
  distance: {
    text: '',
    value: number
  };
  duration: {
    text: '',
    value: number
  };
  // tslint:disable-next-line: variable-name
  end_address = '';
  // tslint:disable-next-line: variable-name
  end_location = new LatLng();
  // tslint:disable-next-line: variable-name
  start_address = '';
  // tslint:disable-next-line: variable-name
  start_location = new LatLng();
  // tslint:disable-next-line: variable-name
  via_waypoint = [];
  // tslint:disable-next-line: variable-name
  via_waypoints = [];
  // tslint:disable-next-line: variable-name
  traffic_speed_entry = [];
  steps = [];
}

export class LatLng {
  lat = 0;
  lng = 0;


  public static gen(li: LocInfo): LatLng {
    return {
      lat: li.latitude,
      lng: li.longitude
    };
  }


}
