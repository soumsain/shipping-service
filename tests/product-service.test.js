/**
* @jest-environment node
*/
var productService = require('../src/services/product-service')
var nock = require('nock')

describe('Product service', function () {
  it('Should call remote service', async function () {
    nock('https://product.service:8899/products')
      .get('/13')
      .delayBody(10)
      .reply(200, {
        weightLB: 15.5,
        unit: 'lbs'
      })

    let weight = await productService.getProductWeight('13')
    expect(weight).toBe(15.5)
  })
})