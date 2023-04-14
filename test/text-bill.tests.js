describe('Text Bill Tests', ()=>{
    describe('Calculate the Totals', ()=>{
        it('if you send a single sms the total should be added by R0.65', ()=>{
            let textBills = textBill();
    
            textBills.doCallOrSms('sms');
    
            assert.equal(0.65, textBills.getTotal())
        })
        it('if you send a single sms the sms total should be added by R0.65', ()=>{
            let textBills = textBill();
    
            textBills.doCallOrSms('sms');
    
            assert.equal(0.65, textBills.smsTotals())
        })
        it('if you send a single call the total should be added by R2.75', ()=>{
            let textBills = textBill();
    
            textBills.doCallOrSms('call');
    
            assert.equal(2.75, textBills.getTotal())
        })
        it('if you send a single call the call total should be added by R2.75', ()=>{
            let textBills = textBill();
    
            textBills.doCallOrSms('call');
    
            assert.equal(2.75, textBills.callTotals())
        })
        it('if you send a sms and make a call the total should be R3.40', ()=>{
            let textBills = textBill();
    
            textBills.doCallOrSms('sms');
            textBills.doCallOrSms('call');
    
            assert.equal(3.40, textBills.getTotal())
        })
    
        it('if you use uppercase letters for sms and call the total should still be calculated as R3.40', ()=>{
            let textBills = textBill();
    
            textBills.doCallOrSms('SMS');
            textBills.doCallOrSms('CALL');
    
            assert.equal(3.40, textBills.getTotal())
        })
    })

    describe('Warning and Critical Levels', ()=>{
        it('When the total reaches R30 or higer the class name for the total must be warning', ()=>{
            let textBills = textBill();

            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');

            assert.equal('warning', textBills.totalClassName())
        })

        it('When the total reaches R50 or higer the class name for the total must be danger', ()=>{
            let textBills = textBill();

            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');
            textBills.doCallOrSms('call');

            assert.equal('danger', textBills.totalClassName())
        })
    })
    
})