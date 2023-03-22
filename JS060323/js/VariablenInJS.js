const variInJS = () => {
        /* Vergleich zu Java --> Variablen werden mit let 
         Konstanten werden mit const definiert. */
        /* int value; // Declaration
        int otherValue = 12; // declaration & initialisation */
        let value;
        let otherValue = 12;

        //boolean running = true; // or false
        let running = true;

        //byte thisIsAByte = 101; // 8 bit .. -128 until 127
        let thisIsAByte = 101; // Number (intern immer Double)

        //char isASign = '+'; // 16 bit (-32768 ... 32767)
        let isASign = 'A'; // wird als String abgespeichert 

        //short shorty = 3222; // 16 bit
        let shorty = 3222; // Number
        //int thisIsInteger = 332; // 32 bit ... 2^32
        //long thisIsLong = 4556; // 64 bit
        let thisIsInteger = 332; // Number
        let thisIsLong = 4443; // Number
        //float speed = 43.6f; // 32 bit
        let speed = 43.6; // Number 
        //double gravitation = 9.81; // 64 bit
        let gravitation = 9.91;

        /* JavaScript has 8 Datatypes

        1. String */
        let text1 = "Hello";
        text1 = 'Hello2'; // single Quotes

        /* 2. Number
        Javascript are always one type:
        double (64-bit floating point). */

        let n1 = 12.34;
        n1 = 10e5;

        /* 3. Bigint
        A BigInt can not have decimals.
        You cannot perform math between a BigInt type and a Number type.*/
        let biggi = BigInt(123456789012345678901234567890);
        console.log(biggi);

        // 4. Boolean
        let booli = true;
        /* 5. Undefined
        Variable die nicht belegt sind haben den Wert undefined
        kann abgefragt werden */
        /* 6. Null
        Referenz die auf keinen Speicher zeigt */
        // 7. Symbol

        /* 8. Object
        The Object Datatype

        The object data type can contain:

        1. An object */
        let obj = { name: "franz", adress: "Persgasse" };

        // 2. An array
        const arr = ["hallo"];

        //3. A date  
        let date = new Date;
        console.log(date);



        /* The const keyword was introduced in ES6 (2015).
        Variables defined with const cannot be Redeclared.
        Variables defined with const cannot be Reassigned.
        Variables defined with const have Block Scope.*/

        const x = 2;

        /* Alle Datentypen werden erst zur Laufzeit in den
        jeweiligen Typ umgewandelt, egal ob Boolean, String,
        int und float gibt es als number und dort als double */


        //statt System.out.println gibt es console.log

        console.log(gravitation);
        console.log(speed);

        // non primitive datatyp
        // able to store more than one value
        // String name = "Prof. Schreiber";
        let myname = "Prof. Schreiber";
        console.log("The name is" + myname + " " + gravitation);

        // Control structure
        if (running) {
            console.log("Is running");
        } else {
            console.log("is not running");
        }

        if (running == true) {
            console.log("Is running");
        }

        // nested if
        if (otherValue > 12) {
            if (gravitation > 8.) {
                console.log("in here");
            } else {
                console.log("out there");
            }
        }
        let value2b = 25;
        if (value2b == 10) {
            console.log("is 10");
        } else if (value2b == 15) {
            console.log("is 15");
        } else if (value2b == 20) {
            console.log("is 20");
        } else {
            console.log("is nix");
        }

        console.log(value2b = 23);
        console.log(running);
        let switcher = 1;
        switch (switcher) {
            case 0:
                console.log("is 0");
                break;
            case 1:
                console.log("is 1");
                break;
            case 2:
                console.log("is 2");
                break;
            default:
                console.log("ERROR");
                break;
        }

        let text = "Hello";
        switch (text) {
            case "hello":
                console.log("is hello");
                break;
            case "Hello":
                console.log("is Hello");
                break;

            case "World":
                console.log("is world");
                break;
            default:
                console.log("ERROR");
                break;
        }

        console.log("##########Loops##########");
        let counter = 0;
        while (running) {
            console.log("in se loop: " + counter);
            counter++;
            if (counter > 3) {
                running = !running; // toggle
            }
        }

        /* for(int i = 0; i < 10; i++){
            console.log("In se for-loop " + i);
        } */
        for (let i = 0; i < 10; i++) {
            console.log("In se for-loop " + i);
        }
        console.log("Loop ends");



        console.log("######### array #########");

        // Definition und Deklaration

        // Java
        //String[] firstNames = {"Nico", "Julian", "Tobias", "Antonia"};

        let firstNames = ["Nico", "Julian"];

        console.log("Tell me what: " + firstNames[1]);

        /* Java
        for (String firstName : firstNames){
            System.out.println(firstName);
        } */

        for (firstname in firstNames) {
            console.log(firstname);
        }

        for (let i = 0; i < firstNames.length; i++) {
            console.log("name is " + firstNames[i]);
        }

        /* typeof Operator  */

        console.log(typeof(gravitation));

    } // Ende Anfangsfunktion variInJS