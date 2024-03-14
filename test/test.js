const assert = require('assert');
const Rooster = require('../index')

describe('Rooster',()=>{
  describe('.announceDawn', ()=>{
    it('returns rooster call', ()=>{

      //setup
      const expected = 'announceDawn'

      //excerise 
      const result = Rooster.announceDawn()

      //Verify
      assert.equal(result, expected)
    })
  })
  describe('.timeAtDawn', ()=>{
    it('returns its argument as a string', ()=>{

      //setup
      const inputValue = Math.floor(Math.random() * 23).toString()
      const expected = inputValue

      //excerise 
      const result = Rooster.timeAtDawn(inputValue)

      //Verify
      assert.equal(expected, result)
      
    })
     it('returns an Error when value is less then 0', ()=>{

      //setup
      const inputValue = -1
      const expected = RangeError
      

      //excerise 
      

      //Verify
      assert.throws(() => {
     Rooster.timeAtDawn(inputValue);
  },
  expected)
      
    })

  })
   it('returns an error if the value is more the 23', ()=>{

      //setup
      const inputValue = 24  
      const expected = RangeError 

      //excerise 
      

      //Verify
      assert.throws(()=>{
        Rooster.timeAtDawn(inputValue)
      },
      expected)
      
    })
})