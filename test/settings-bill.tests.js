describe('Settings Bill Tests', ()=>{
    describe('Set values', ()=>{
        it('Should be able to set the call cost', ()=>{
            let settingsBills = settingsBill();

            settingsBills.setCallCost(3)

            assert.equal(3, settingsBills.getCallCost());
        })

        it('Should be able to set the sms cost', ()=>{
            let settingsBills = settingsBill();

            settingsBills.setSmsCost(2)

            assert.equal(2, settingsBills.getSmsCost());
        })

        it('Should be able to set the warning and critical levels', ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(20);
            settingsBills.setCriticalLevel(50);

            assert.equal(20, settingsBills.getWarningLevel());
            assert.equal(50, settingsBills.getCriticalLevel());
        })
    })

    describe('Use values', ()=>{
        it("Should be able to make calls at R2.89 each", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setCallCost(2.89);
            settingsBills.setCriticalLevel(60);

            settingsBills.makeCall();
            settingsBills.makeCall();

            assert.equal(5.78, settingsBills.getTotal());
            assert.equal(0.00, settingsBills.getSmsTotal());
            assert.equal(5.78, settingsBills.getCallTotal());
        })
        it("Should be able to make sms's at R1.40 each", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setSmsCost(1.40);
            settingsBills.setCriticalLevel(50);

            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();

            assert.equal(4.20, settingsBills.getTotal());
            assert.equal(4.20, settingsBills.getSmsTotal());
            assert.equal(0.00, settingsBills.getCallTotal());
        })

        it("Should be able to make sms's and calls at R1.40 and R4.30 respectively and reflect all the totals", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setSmsCost(1.40);
            settingsBills.setCallCost(4.30);
            settingsBills.setCriticalLevel(50);

            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.makeCall();
            settingsBills.makeCall();

            assert.equal(12.80, settingsBills.getTotal());
            assert.equal(4.20, settingsBills.getSmsTotal());
            assert.equal(8.60, settingsBills.getCallTotal());
        })
    })

    describe('Warning and Critical Levels', ()=>{
        it("Should return the class 'warning' once the total has reached the set warning level", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(30);
            settingsBills.setCriticalLevel(50);
            settingsBills.setCallCost(5.20);
            settingsBills.setSmsCost(2.50);

            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.sendSms();
            settingsBills.sendSms();

            assert.equal('warning', settingsBills.totalClassName());
        })

        it("Should return the class 'danger' once the total has reached the set critical level", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(30);
            settingsBills.setCriticalLevel(50);
            settingsBills.setCallCost(5.20);
            settingsBills.setSmsCost(2.50);

            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();

            assert.equal('danger', settingsBills.totalClassName());
        })

        it("Should stop adding to the call total when the critical level is reached", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(10);
            settingsBills.setCriticalLevel(30);
            settingsBills.setCallCost(6.00);

            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();

            assert.equal('danger', settingsBills.totalClassName());
            assert.equal(30, settingsBills.getCallTotal());
        })

        it("Should stop adding to the sms total when the critical level is reached", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(10);
            settingsBills.setCriticalLevel(30);
            settingsBills.setSmsCost(6.00);

            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();

            assert.equal('danger', settingsBills.totalClassName());
            assert.equal(30, settingsBills.getSmsTotal());
        })

        it("Should stop adding to the total when the critical level is reached", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(10);
            settingsBills.setCriticalLevel(30);
            settingsBills.setCallCost(6.00);
            settingsBills.setSmsCost(3.40);

            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.makeCall();
            settingsBills.sendSms();

            assert.equal('danger', settingsBills.totalClassName());
            assert.equal(30, settingsBills.getTotal());
        })

        it("Should allow the totals to increase when the critical levels have been reached and updated", ()=>{
            let settingsBills = settingsBill();

            settingsBills.setWarningLevel(10);
            settingsBills.setCriticalLevel(30);
            settingsBills.setSmsCost(6.00);

            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();

            assert.equal('danger', settingsBills.totalClassName());
            assert.equal(30, settingsBills.getSmsTotal());

            settingsBills.setCriticalLevel(37);

            settingsBills.sendSms();
            assert.equal('warning', settingsBills.totalClassName())
            assert.equal(36, settingsBills.getSmsTotal());

        })
    })
})