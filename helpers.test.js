describe('Helpers tests', () =>{
    it('should CalculateTipPercentage', () =>{
        expect(calculateTipPercent(100, 15)).toEqual(15);
    });

    it('should return the sumPaymentTotal entered', () =>{
        allPayments = {
            'payment1': {
                billAmt: 50,
                tipAmt: 20,
            },
            'payment2': {
                billAmt: 50,
                tipAmt: 20,
            }
        }
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
    })

    it('should append new td', () =>{
        let tempTr = document.createElement('tr');
        expect(appendTd(tempTr, "$37.47")).not.toBe(null);
    })

    afterEach(() =>{
        allPayments = {};
    })
});