class BitcoinPriceProvider {
    tellMeWhatsTheCurrentPrice() {
        return 100; // PLN :D
    }
}

const companyA = new BitcoinPriceProvider();
const companyB = new BitcoinPriceProvider();
const companyC = new BitcoinPriceProvider();

// now I want to refresh my UI when the value changes, so...

setInterval(() => {
    [companyA, companyB, companyC].forEach((provider) => {
        // aaand I update my ui with resulting value. pretty simple.
        provider.tellMeWhatsTheCurrentPrice();
    });
}, 1000 * 10);

// can it be better?
