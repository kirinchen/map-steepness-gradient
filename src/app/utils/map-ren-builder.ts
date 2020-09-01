import { LocInfo } from './../model/loc-info';
import { Path } from './../model/path';
export class MapRenBuilder {


  private paths: Array<Path>;

  public setPaths(ps: Array<Path>): MapRenBuilder {
    this.paths = ps;

    return this;
  }

  public gen(): MapRenData {
    const ans = new MapRenData();
    ans.request = this.genRequest();
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
    south: 0,
    west: 0,
    north: 0,
    east: 0
  };
  legs = new Array<Leg>();
  // tslint:disable-next-line: variable-name
  waypoint_order = new Array<number>();
}

export class Leg {
  distance: {
    text: '',
    value: 0
  };
  duration: {
    text: '',
    value: 0
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
