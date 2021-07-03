const { deunicode } = require('./dist/index');
const chai = require('chai');

const expect = chai.expect;

describe('Deunicode', () => {
  it(`should replace unicode characters`, () => {
    expect(deunicode('\uFF28\u1D07\u029f\u029f\u1D0F \u1D21\u1D0F\u0280\u029f\u1D05\uFE57')).to.equal('HELLO WORLD!');
  });
});

