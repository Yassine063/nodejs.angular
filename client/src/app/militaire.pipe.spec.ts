import { MilitairePipe } from './militaire.pipe';

describe('MilitairePipe', () => {
  it('transform 900 to 9:00 am', () => {
    const pipe = new MilitairePipe();
    expect(pipe.transform(900)).toEqual('9:00 am');

// ou bien

// const temps = pipe.transform(900);

// if ( temps ==='9:00 am' ){
//   return true;
// }else {
//   return false;
// }

  });
});
