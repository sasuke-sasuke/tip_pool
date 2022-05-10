describe('Payments tests', () =>{
    beforeEach(()=>{
        allPayments = {
            'payment1':{
                'billAmt': '100.00',
                'tipAmt': '15.00',
                'tipPercent': 15
            }
        }

        billAmtInput.value = '100.00';
        tipAmtInput.value = '15.00';
    });

    it('return object with 3 key:val pairs', () =>{
        expect(createCurPayment()).toEqual({
            'billAmt': '100.00',
            'tipAmt': '15.00',
            'tipPercent': 15
        });
    }) 

    it('should append new tr to tbody', () =>{
        const currentPayment = createCurPayment();
        appendPaymentTable(currentPayment);
        expect(paymentTbody).not.toBe(null);
    });

    it('should update the Summary Table', () => {
        updateSummary();
        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$15');
        expect(summaryTds[2].innerText).toEqual('15%');

    });

    it('should update payment, summary and server tables', () => {
        allPayments = {};
        allServers = {}
        submitPaymentInfo();
    });

    afterEach(() =>{
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        const tempTr = document.querySelectorAll('tbody tr');
        for(let tr of tempTr){
            tr.innerText = '';
        }
    });
});