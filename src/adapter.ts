class CanadianTVFromYourGrandpa {
    plugInViaWeirdPowerOutlet() {}
}

abstract class EuropeanDevice {
    plugIn() {}
}

class VacuumCleaner extends EuropeanDevice {}

class Microwave extends EuropeanDevice {}

const devices = [
    new VacuumCleaner(),
    new Microwave(),
    new CanadianTVFromYourGrandpa(),
];

// now I want to be able to plug in all of these at once!
devices.forEach(device => {
    if (device instanceof CanadianTVFromYourGrandpa) {
        return device.plugInViaWeirdPowerOutlet();
    }
    
    device.plugIn();
})
