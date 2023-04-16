function radioBill(){
    let smsTotal1 = 0;
    let callTotal1 = 0;
    let grandTotal = 0;

    function makeCall(){
        callTotal1 += 2.75;
    }

    function sendSms(){
        smsTotal1 += 0.65;
    }

    function Total(){
        grandTotal = callTotal1 + smsTotal1;
        return grandTotal.toFixed(2);
    }

    function smsTotal2(){
        return smsTotal1;
    }

    function callTotal2(){
        return callTotal1;
    }

    function totalsClassName(){
        if(Total() >= 30 && Total() < 50){
            return 'warning';
        }
        else if(Total() >= 50){
            return 'danger';
        }
    }

    return {
        makeCall,
        sendSms,
        Total,
        smsTotal2,
        callTotal2,
        totalsClassName
    }
}