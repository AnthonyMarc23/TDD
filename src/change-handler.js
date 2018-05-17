/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "q") {
            this.cashTendered += 25;
            return this.cashTendered;
        } else if (type === "d") {
            this.cashTendered += 10;
            return this.cashTendered;
        } else if (type === "n") {
            this.cashTendered += 5;
            return this.cashTendered;
        } else if (type === "p") {
            this.cashTendered += 1;
            return this.cashTendered;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true;
        } else if (this.cashTendered < this.amountDue) {
            return false;
        }

    }

    giveChange() {
        // TODO return the correct change in the following format...
        let changeDue = this.cashTendered - this.amountDue;
        let q=0, d=0, n=0, p=0;


        if (changeDue !== 0) {
            q = (Math.floor(changeDue / 25));
            if (changeDue > 25) changeDue %= 25;
            d = (Math.floor(changeDue / 10));
            if (changeDue > 10) changeDue %= 10;
            n = (Math.floor(changeDue / 5));
            if (changeDue > 5) changeDue %= 5;
            p = (Math.floor(changeDue / 1));    
        }

        return {
            quarters: q,
            dimes: d,
            nickels: n,
            pennies: p
        }; 
    }
}