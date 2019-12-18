// Sample case for Builder pattern

abstract class Ingredient {
    constructor(protected readonly name: string, public readonly cost: number) {}
}

class Vodka extends Ingredient {
    constructor() {
        super('vodka', 10);
    }
}

class Roadkill extends Ingredient {
    constructor() {
        super('roadkill', 5);
    }
}

class LizardEgg extends Ingredient {
    constructor() {
        super('lizard egg', 1);
    }
}

type StirDirection = 'left' | 'right' | 'shake';

class Cocktail {
    private umbrella = false;

    private stirSequence: StirDirection[] = [];

    private ingredients: Array<Ingredient> = [];

    add(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    stir(direction: StirDirection) {
        this.stirSequence.push(direction);
    }

    addTinyTinyUmbrella() {
        this.umbrella = true;
    }

    price() {
        return this.ingredients.reduce((totalCost, { cost }) => {
            totalCost += cost;
            return totalCost;
        }, 0);
    }

    serve() {
        if (!this.readyToServe()) {
            throw new Error('its not ready yet!');
        }
    }

    private readyToServe() {
        return this.wasStirred() && this.hasUmbrella();
    }

    private hasUmbrella() {
        return this.umbrella;
    }

    private wasStirred() {
        return !!this.stirSequence.length;
    }
}

interface Request {
    cocktailName: 'white russian' | 'tequila sunrise' | 'whiskey sour';
}

// Let's say this is our route handler
function handleCocktailRequest({ cocktailName }: Request) {
    switch (cocktailName) {
        case 'tequila sunrise': {
            const cocktail = new Cocktail();

            cocktail.add(new Vodka());
            cocktail.stir('left');
            cocktail.add(new LizardEgg());
            cocktail.stir('right');
            cocktail.stir('left');
            cocktail.addTinyTinyUmbrella();

            return cocktail.serve();
        }

        case 'whiskey sour': {
            const cocktail = new Cocktail();

            cocktail.add(new Vodka());
            cocktail.add(new LizardEgg());
            cocktail.stir('shake');
            cocktail.add(new Vodka());
            cocktail.stir('shake');
            cocktail.addTinyTinyUmbrella();

            return cocktail.serve();
        }

        default:
            throw new Error('unsupported cocktail requested');
    }
}
