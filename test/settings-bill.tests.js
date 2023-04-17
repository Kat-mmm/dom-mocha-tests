describe('Settings Bill Tests', ()=>{
    describe('Set values', ()=>{
        it('Should be able to set the call cost', ()=>{
            let settingsBills = settingsBill();

            assert.equal(3, settingsBills.getSetCallCost(3));
        })

        it('Should be able to set the sms cost', ()=>{
            let settingsBills = settingsBill();

            assert.equal(2, settingsBills.getSetSmsCost(2));
        })

        it('Should be able to set the warning and critical levels', ()=>{
            let settingsBills = settingsBill();

            assert.equal(20, settingsBills.getSetWarningLevels(20));
            assert.equal(50, settingsBills.getSetCriticalLevels(50));
        })
    })

    describe('Use values', ()=>{
        it("Should be able to make calls at R2.89 each", ()=>{
            let settingsBills = settingsBill();

            settingsBills.getSetCallCost(2.89);
            settingsBills.getSetCriticalLevels(50);

            settingsBills.makeCall();
            settingsBills.makeCall();

            assert.equal(5.78, settingsBills.getTotal());
            assert.equal(0.00, settingsBills.getSmsTotal());
            assert.equal(5.78, settingsBills.getCallTotal());
        })
        it("Should be able to make sms's at R1.40 each", ()=>{
            let settingsBills = settingsBill();

            settingsBills.getSetSmsCost(1.40);
            settingsBills.getSetCriticalLevels(50);

            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();

            assert.equal(4.20, settingsBills.getTotal());
            assert.equal(4.20, settingsBills.getSmsTotal());
            assert.equal(0.00, settingsBills.getCallTotal());
        })

        it("Should be able to make sms's and calls at R1.40 and R4.30 respectively and reflect all the totals", ()=>{
            let settingsBills = settingsBill();

            settingsBills.getSetSmsCost(1.40);
            settingsBills.getSetCallCost(4.30);
            settingsBills.getSetCriticalLevels(50);

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

            settingsBills.getSetWarningLevels(30);
            settingsBills.getSetCriticalLevels(50);
            settingsBills.getSetCallCost(5.20);
            settingsBills.getSetSmsCost(2.50);

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

            settingsBills.getSetWarningLevels(30);
            settingsBills.getSetCriticalLevels(50);
            settingsBills.getSetCallCost(5.20);
            settingsBills.getSetSmsCost(2.50);

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

            settingsBills.getSetWarningLevels(10);
            settingsBills.getSetCriticalLevels(30);
            settingsBills.getSetCallCost(6.00);

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

            settingsBills.getSetWarningLevels(10);
            settingsBills.getSetCriticalLevels(30);
            settingsBills.getSetSmsCost(6.00);

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

            settingsBills.getSetWarningLevels(10);
            settingsBills.getSetCriticalLevels(30);
            settingsBills.getSetCallCost(6.00);
            settingsBills.getSetSmsCost(3.40);

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

            settingsBills.getSetWarningLevels(10);
            settingsBills.getSetCriticalLevels(30);
            settingsBills.getSetSmsCost(6.00);

            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();
            settingsBills.sendSms();

            assert.equal('danger', settingsBills.totalClassName());
            assert.equal(30, settingsBills.getSmsTotal());

            settingsBills.getSetCriticalLevels(37);

            settingsBills.sendSms();
            assert.equal('warning', settingsBills.totalClassName())
            assert.equal(36, settingsBills.getSmsTotal());

        })
    })
})