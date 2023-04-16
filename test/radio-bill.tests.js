describe('Radio Bill Tests', ()=>{
    describe('Calculate the Total Bill', ()=>{
        it('when you make a call the total should be added by R2.75', ()=>{
            let radioBills = radioBill();
    
            radioBills.makeCall();
    
            assert.equal(2.75, radioBills.Total());
        })
        it('when you send an sms the total should be added by R0.65', ()=>{
            let radioBills = radioBill();
    
            radioBills.sendSms();
    
            assert.equal(0.65, radioBills.Total());
        })
        it('when you make three calls the total should be R8.25', ()=>{
            let radioBills = radioBill();
    
            radioBills.makeCall();
            radioBills.makeCall();
            radioBills.makeCall();
    
            assert.equal(8.25, radioBills.Total());
        })
    
        it("when you send two sms's the total should be R1.30", ()=>{
            let radioBills = radioBill();
    
            radioBills.sendSms();
            radioBills.sendSms();
    
            assert.equal(1.30, radioBills.Total());
        })
        
    })
    describe('Call Total and Sms Total', ()=>{
        it('when you make a call the call total should be added by R2.75', ()=>{
            let radioBills = radioBill();
    
            radioBills.makeCall();
    
            assert.equal(2.75, radioBills.callTotal2());
        })

        it('when you send an sms the sms total should be added by R0.65', ()=>{
            let radioBills = radioBill();
    
            radioBills.sendSms();
    
            assert.equal(0.65, radioBills.smsTotal2());
        })

        it("when you make two call's the call total should be added by R5.50", ()=>{
            let radioBills = radioBill();
    
            radioBills.makeCall();
            radioBills.makeCall();
    
            assert.equal(5.50, radioBills.callTotal2());
        })

        it("when you send two sms's the sms total should be R1.30", ()=>{
            let radioBills = radioBill();
    
            radioBills.sendSms();
            radioBills.sendSms();
    
            assert.equal(1.30, radioBills.smsTotal2());
        })
    })

    describe('Warning and Critical Levels', ()=>{
        it('When the total reaches R30 or higer the class name for the total must be warning', ()=>{
            let radioBills = radioBill();

            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');

            assert.equal('warning', radioBills.totalsClassName())
        })

        it('When the total reaches R50 or higer the class name for the total must be danger', ()=>{
            let radioBills = radioBill();

            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');
            radioBills.makeCall('call');

            assert.equal('danger', radioBills.totalsClassName())
        })
    })
})