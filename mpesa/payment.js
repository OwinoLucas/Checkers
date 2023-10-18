const unirest = require('unirest');

// M-Pesa API credentials
const consumerKey = 'GztnjcAmYokXGGKVJ5tt46ZLEIaZDhXr';
const consumerSecret = '6OaAexqcZwrUdxue';
const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const apiKey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
const shortCode = '174379';

// Generate an OAuth token
unirest
  .get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
  .headers({
    'Authorization': `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
    'Content-Type': 'application/json'
  })
  .send()
  .end((res) => {
    if (res.error) {
      throw new Error(res.error);
    }

    const my_access_token = res.body.access_token;
    console.log(my_access_token); // access token

    // Simulate an M-Pesa Express transaction
    const rasimuWedger = (amount, phone) => {
      const date = new Date();
      const year = date.getUTCFullYear();
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = date.getUTCDate().toString().padStart(2, '0');
      const hour = date.getUTCHours().toString().padStart(2, '0');
      const minute = date.getUTCMinutes().toString().padStart(2, '0');
      const second = date.getUTCSeconds().toString().padStart(2, '0');

      const timestamp = year + month + day + hour + minute + second;
      
      const password = Buffer.from(`${shortCode}${apiKey}${timestamp}`).toString('base64');

      const requestBody = {
        BusinessShortCode: '174379',
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: '174379',
        PhoneNumber: phone,
        CallBackURL: 'https://mydomain.com/path',
        AccountReference: 'RASIMU',
        TransactionDesc: 'Rasimu Online Wedger',
        LipaNaMpesaOnline: 'LIPA_NA_MPESA_ONLINE'
      };

      unirest
        .post(apiUrl)
        .headers({
          'Authorization': `Bearer ${my_access_token}`,
          'Content-Type': 'application/json'
        })
        .send(requestBody)
        .then((response) => {
          console.log('M-Pesa Express Simulation Response:', response.body);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

  
    rasimuWedger(amount, phone);
  });
