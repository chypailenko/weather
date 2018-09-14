export class Coordinate {
  lat: string;
  long: string;

  constructor(source: {lat: string, long: string}) {
    source = Object.assign(
      {
        lat: '',
        long: '',
      },
      source
    );

    this.lat = source.lat;
    this.long = source.long;
  }
}
