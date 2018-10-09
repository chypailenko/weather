interface ICapital {
  name?: string ;
  capital: string;
  lat?: string;
  long?: string;
  mark?: 'visit' | 'want' | 'none';
}

export type Mark =  'visit' | 'want' | 'none';

export class Capital implements ICapital {
  name?: string ;
  capital: string;
  lat?: string;
  long?: string;
  mark?: Mark;

  create(source: ICapital) {
    source = Object.assign({
      lat: '',
      long: '',
      name: ''
    }, source);

    this.capital = source.capital;
    this.lat = source.lat;
    this.long = source.long;
    this.name = source.name;

    return this;
  }
}
