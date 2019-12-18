type Weapon = 'sword' | 'rifle';

class Character {
    private weapon?: Weapon;

    pickWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }

    attack() {
        if (!this.weapon) {
            throw new Error('weapon not equipped');
        }

        switch (this.weapon) {
            case 'sword': {
                console.log(`dealt 15 damage`);
                break;
            }

            case 'rifle': {
                console.log(`dealt shitload of damage`);
                break;
            }
        }

        // Adding 100 cases for each weapon we might have looks messy.
    }
}
