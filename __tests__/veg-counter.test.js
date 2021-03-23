const countVeg = require("../katas/veg-counter");

describe("countVeg", () => {
    it ("Test 1 - returns error if invalid input", () => {
        let actualOutput = countVeg(2, 3);
        let expectedOutput = "Accepting only an array and a string!";
        expect(actualOutput).toEqual(expectedOutput);

        actualOutput = countVeg("ditto", 3);
        expectedOutput = "Accepting only an array and a string!";
        expect(actualOutput).toEqual(expectedOutput);
    });

    it ("Test 2 - returns error if invalid vegetable type", () => {
        let actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 4}], "RoboCop");
        let expectedOutput = "Invalid vegetable type entered";
        expect(actualOutput).toEqual(expectedOutput);
    });   

    it ("Test 3 - returns total quantity if one type of veg", () => {
        let actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 0}], "root");
        let expectedOutput = 0;
        expect(actualOutput).toEqual(expectedOutput);

        // returns total quantity if one object in array and right type of veg
        actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 4}], "root");
        expectedOutput = 4;
        expect(actualOutput).toEqual(expectedOutput);

        // returns total quantity if two objects in array and both right type of veg
        actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 4},
                                 {name: 'Beetroot', type: 'root', quantity: 6}], "root");
        expectedOutput = 10;
        expect(actualOutput).toEqual(expectedOutput);
    }); 
    
    it ("Test 4 - returns total quantity if various type of veg", () => {
        let actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 2},
                                     {name: 'Onion', type: 'bulb', quantity: 3},
                                     {name: 'Beetroot', type: 'root', quantity: 5}], "root");
        let expectedOutput = 7;
        expect(actualOutput).toEqual(expectedOutput);

        actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 2},
                                     {name: 'Onion', type: 'bulb', quantity: 3},
                                     {name: 'Beetroot', type: 'root', quantity: 5},
                                     {name: 'Chard', type: 'leaf', quantity: 3}
                                    ], "leaf");
        expectedOutput = 3;
        expect(actualOutput).toEqual(expectedOutput);

        actualOutput = countVeg([{name: 'Parsnip', type: 'root', quantity: 2},
                                     {name: 'Baked Beans', type: 'legume', quantity: 3},
                                     {name: 'Beetroot', type: 'root', quantity: 5},
                                     {name: 'Chard', type: 'leaf', quantity: 3},
                                     {name: 'Runner beans', type: 'legume', quantity: 8}
                                    ], "legume");
        expectedOutput = 11;
        expect(actualOutput).toEqual(expectedOutput);
    });
});