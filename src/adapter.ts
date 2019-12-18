class CanadianTVFromYourGrandpa {
    plugInViaWeirdPowerOutlet() {}
}

interface EuropeanDevice {
    plugIn(): void;
}

abstract class EuropeanDevice implements EuropeanDevice {
    plugIn() {}
}

class VacuumCleaner extends EuropeanDevice {}

class Microwave extends EuropeanDevice {}

class CanadianToEuropeanDeviceAdapter implements EuropeanDevice {
    constructor(private readonly canadianDevice: CanadianTVFromYourGrandpa) {}

    plugIn() {
        this.canadianDevice.plugInViaWeirdPowerOutlet();
    }
}

// now I want to be able to plug in all of these at once!

const devices = [
    new VacuumCleaner(),
    new Microwave(),
    new CanadianToEuropeanDeviceAdapter(new CanadianTVFromYourGrandpa()),
];

devices.forEach((device) => device.plugIn());
