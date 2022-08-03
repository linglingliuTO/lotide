const tail = require('../tail')
const expect = require('chai').expect;


describe("#tail", ()=> {


  it("returns [lighthouse, labs] for [Hello, Lighthouse, Labs]", () => {
   expect(tail(["Hello", "Lighthouse", "Labs"])).to.eql( ["Lighthouse", "Labs"]);
  })




})
