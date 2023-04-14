describe('Calculate Bill Tests', ()=>{
    describe('Use string to calculate total phone bill', ()=>{
        it('take a string of one call that is R2.75 and calculate the total', ()=>{
            assert.equal('R2.75', totalPhoneBill('call'));
        })
        it('take a string of one sms that is R0.65 and calculate the total', ()=>{
            assert.equal('R0.65', totalPhoneBill('sms'));
        })
        it("take a string of calls and sms's in uppercase and return the total bill", ()=>{
            assert.equal('R6.15', totalPhoneBill('CALL, SMS, CALL'));
        })
        it("take a string of calls and sms's with no spaces in the string", ()=>{
            assert.equal('R3.40', totalPhoneBill('sms,call'));
        })
        it("take a string of calls and sms's with spaces and  no spaces in the string, and a mix of uppercase and lowercase letters", ()=>{
            assert.equal('R6.15', totalPhoneBill('sms,call, CALL'));
        })
    })
    

})