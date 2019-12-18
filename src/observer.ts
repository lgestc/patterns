interface Observer<T> {
    update(data: T): void;
}

abstract class Subject<T> {
    private observers: Array<Observer<T>> = [];

    registerObserver(observer: Observer<T>) {
        this.observers.push(observer);
    }

    protected notifyObservers(data: T) {
        this.observers.forEach((observer) => observer.update(data));
    }
}

interface PriceData {
    price: number;
    providerName: string;
}

class BitcoinPriceProvider extends Subject<PriceData> {
    private priceCache: number;

    private async fetchCurrentPrice() {
        // Some additonal logic after...
        return 111;
    }

    // This will be called somehow, internally. We don't care.
    private async checkPrices() {
        const currentPrice = await this.fetchCurrentPrice();

        if (currentPrice !== this.priceCache) {
            this.notifyObservers({ price: currentPrice, providerName: 'bitbay' });
            this.priceCache = currentPrice;
        }
    }

    // We can also register observers via registerObserver method inherited from Subject class
    constructor(readonly observer: Observer<PriceData>, checkRateInSeconds: number) {
        super();

        this.registerObserver(observer);

        setInterval(() => this.checkPrices(), 1000 * checkRateInSeconds);
    }
}

class BitcoinPriceMonitor implements Observer<PriceData> {
    update(priceData: PriceData) {
        // update display, gets triggered whenever price provider reports change
        console.info(priceData);
    }
}

// Wire up the whole thing!

const priceMonitor = new BitcoinPriceMonitor();

const companyA = new BitcoinPriceProvider(priceMonitor, 10);
const companyB = new BitcoinPriceProvider(priceMonitor, 3600);
const companyC = new BitcoinPriceProvider(priceMonitor, 1800);
