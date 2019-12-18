interface Weapon {
    attack(): void;
}

class Sword implements Weapon {
    attack() {
        console.log('dealt 15 points of damage');
    }
}

class Rifle implements Weapon {
    attack() {
        console.log('dealt shitload of damage');
    }
}

class Character {
    private weapon?: Weapon;

    pickWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }

    attack() {
        if (!this.weapon) {
            throw new Error('weapon not equipped');
        }

        this.weapon.attack();
    }
}

const sword = new Sword();
const rifle = new Rifle();

const character = new Character();
character.pickWeapon(sword);

character.attack();
