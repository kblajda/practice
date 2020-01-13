class Wallet {
    constructor(money) {
        let _money = money;

        // current wallet value
        this.getWalletValue = () => _money;

        // check enough wallet value
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Nieprawidłowy typ działania")
                }
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba")
            }
        }
    }
}
// const wallet = new Wallet(200)