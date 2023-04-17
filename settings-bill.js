function settingsBill(){
    let theCallCosts = 0;
    let theSmsCosts = 0;
    let theWarningLevels = 0;
    let theCriticalLevels = 0;

    let callCostTotal = 0;
    let smsCostTotal = 0;
    let overallTotal = 0;

    function setCallCost(callCost){
        theCallCosts = callCost;
    }

    function setSmsCost(smsCost){
        theSmsCosts = smsCost;
    }

    function setWarningLevel(warningLevel){
        theWarningLevels = warningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevels = criticalLevel;
    }

    function getCallCost(){
        return theCallCosts;
    }

    function getSmsCost(){
        return theSmsCosts;
    }

    function getWarningLevel(){
        return theWarningLevels;
    }

    function getCriticalLevel(){
        return theCriticalLevels;
    }

    function makeCall(){
        if(!hasReachedCritical()){
            callCostTotal += theCallCosts;
        }
    }

    function sendSms(){
        if(!hasReachedCritical()){
            smsCostTotal += theSmsCosts;
        }
    }

    function getTotal(){
        overallTotal = callCostTotal + smsCostTotal
        return overallTotal.toFixed(2);
    }

    function getSmsTotal(){
        return smsCostTotal.toFixed(2);
    }

    function getCallTotal(){
        return callCostTotal.toFixed(2);
    }

    function hasReachedCritical(){
        return getTotal() >= getCriticalLevel();
    }

    function totalClassName(){
        if(getTotal() >= getWarningLevel() && getTotal() < getCriticalLevel()){
            return 'warning';
        }
        else if(hasReachedCritical()){
            return 'danger';
        }
    }

    return{
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,
        makeCall,
        sendSms,
        getTotal,
        getSmsTotal,
        getCallTotal,
        totalClassName
    }
}