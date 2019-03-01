

describe('cipher', () => {
  it('cipher debe ser un objeto', ()=>{
    assert.equal(typeof cipher,'object')
  });
  describe('cipher.suma',()=>{
    it('cipher.suma deberia ser una funcion', ()=>{
      assert.equal(typeof cipher.suma, 'function');
    })
    it('cipher suma debe sumar dos numeros para ello cuando a=3 y b=5, debe retornar 8',()=>{
      assert.equal(cipher.suma(3,5) , 8)
    })
  })
});