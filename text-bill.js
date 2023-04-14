function textBill(){
    let smsTotal = 0;
    let callTotal = 0;
    let overallTotal = 0;

    function doCallOrSms(billString){
        billString = billString.toLowerCase().trim();

        if(billString === 'sms'){
            smsTotal += 0.65;
        }
        else if(billString === 'call'){
            callTotal += 2.75;
        }
    }

    function getTotal(){
        overallTotal = smsTotal + callTotal;
        return overallTotal.toFixed(2);
    }

    function smsTotals(){
        return smsTotal
    }

    function callTotals(){
        return callTotal
    }

    function totalClassName(){
        if(getTotal() >= 30 && getTotal() < 50){
            return 'warning';
        }
        if(getTotal() >= 50){
            return 'danger';
        }
    }

    return{
        doCallOrSms,
        getTotal,
        smsTotals,
        callTotals,
        totalClassName
    }
}