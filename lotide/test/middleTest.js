const middle = require('../middle')
const expect = require('chai').expect;


describe("#middle", ()=> {


  it("returns [2] for [1,2,3]", () => {
   expect(middle([1, 2, 3])).to.eql([2]);
  })

  it("returns  [2,3] for [1,2,3,4]", () => {
    expect(middle([1, 2, 3,4])).to.eql([2,3]);

  })



})

