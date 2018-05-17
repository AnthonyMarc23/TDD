describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        const change = new ChangeHandler(50);
        
        expect(change.amountDue).toBe(50);

    });
    it("initializes cashTendered to 0", function() {
        const change = new ChangeHandler();

        expect(change.cashTendered).toBe(0);
    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
        const change = new ChangeHandler(25);

        expect(change.insertCoin('q')).toBe(25);
    });

    it("insert dime adds 10", function() {
        const change = new ChangeHandler(25);

        expect(change.insertCoin('d')).toBe(10);
    });

    it("insert nickel adds 5", function() {
        const change = new ChangeHandler(25);

        expect(change.insertCoin('n')).toBe(5);
    });

    it("insert penny adds 1", function() {
        const change = new ChangeHandler(25);

        expect(change.insertCoin('p')).toBe(1);
    });

    it("subsequent coins continue to add value", function() {
        const change = new ChangeHandler(25);

        change.insertCoin("q");
        change.insertCoin("d")
        expect(change.cashTendered).toBe(35);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        const change = new ChangeHandler(65);
        
        change.insertCoin("q");
        change.insertCoin("q");
        change.insertCoin("q");
        expect(change.isPaymentSufficient()).toBe(true);
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        const change = new ChangeHandler(65);
        
        change.insertCoin("q");
        change.insertCoin("q");
        expect(change.isPaymentSufficient()).toBe(false);
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        const change = new ChangeHandler(65);

        change.insertCoin("q");
        change.insertCoin("q");
        change.insertCoin("d");
        change.insertCoin("n");
        expect(change.isPaymentSufficient()).toBe(true);
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        const change = new ChangeHandler({
            amountDue: 65,
            cashTendered: 65
        });

        expect(change.giveChange()).toEqual(jasmine.objectContaining({
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
          }));

        // expect(change.giveChange()).toBe({
        //     quarters: 0,
        //     dimes: 0,
        //     nickels: 0,
        //     pennies: 0
        // });
    });

    it("giveChange returns correct coins for 10", function() {
        
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });

});