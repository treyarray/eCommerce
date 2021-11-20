import React, { useEffect } from 'react';

const PayByRazorPay = () => {
    const options = {
        key: 'rzp_test_MciMBaJlZAXGY',
        amount: '100', //  = INR 1
        name: 'Acme shop',
        description: 'some description',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <>
            <button onClick={openPayModal}>Pay with Razorpay</button>
        </>
    );
};

export default PayByRazorPay;