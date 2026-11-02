const express = require('express');
const app = express();
app.use(express.json());

const CRYPTO_TOKEN = "665752:AAHhZN17zLqpDRWcLG2woKIUDMRv0wdRQsa";

app.post('/api/cryptobot-webhook', (req, res) => {
    const update = req.body;
    if (update && update.update_type === 'invoice_paid') {
        const invoice = update.payload;
        console.log(`✅ Оплата получена! Инвойс #${invoice.invoice_id}, Сумма: ${invoice.amount} ${invoice.asset}`);
    }
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
