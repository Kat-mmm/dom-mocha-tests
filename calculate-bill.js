function totalPhoneBill(log){
    var billString = log.toLowerCase().replace(/\s+/g, '').split(',');
    
    var bill = 0;
    for(var i=0; i<billString.length; i++){
      if(billString[i] === 'call'){
        bill += 2.75;
      }
      else if(billString[i] === 'sms'){
        bill += 0.65;
      }
    }
    
    return bill.toFixed(2);
}

