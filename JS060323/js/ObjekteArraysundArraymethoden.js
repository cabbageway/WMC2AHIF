const objectsInJS = () => {
    // Definition von Objekten und Beispiele

    const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    const person2 = { firstName: "Martin", lastName: "Dampfhofer", age: 52, eyeColor: "brown" };

    const produkt = { prodName: "Iphone", modell: "Iphone13", size: 6.7, age: 3 };

    console.log(person);
    console.log(produkt);

    let txt = "";
    // Ausgabe der Elemente eines Objects  mit dem in-operator
    for (let x in person) {
        txt += person[x] + " ";
    };
    console.log(txt);

    let arr22 = [12, 34, 233];
    // Bauen eines Arrays von Objekten
    const persons = [{ firstName: "Chris", lastName: "Doe", age: 50, eyeColor: "blue" },
        { firstName: "Peter", lastName: "Doepfer", age: 54, eyeColor: "brown" }
    ];
    console.log(persons[0]); // Ausgabe eines Objektes
    // Ausgabe der Elemente eines Arrays mit der of Methode
    const numbers1 = [45, 4, 9, 16, 25];

    // Iterieren durch das Array
    console.log("of operator");
    for (element of numbers1) {
        console.log(element * 2);
    }

    // Ausgabe der Elemente eines Arrays mit of Methode und in Methode für das Objekt
    for (let pers of persons) {
        console.log("ausgabe" + pers);
        for (let attr in pers) {
            txt += pers[attr] + " ";
        }
    };

    console.log(txt);

    // Übergabe an Funktion des Objekts und dort Ausgabe
    console.log("Ausgabe der Attribute des Objektes");
    personDaten(person);

    function personDaten(pers) {
        for (let attr in pers) {
            txt += pers[attr] + " ";
        };
    }


    // Anonyme Function oder arrow function 
    console.log("Function als Arrowfunction definiert");
    const personenDaten2 = (pers) => {
        for (let attr in pers) {
            txt += pers[attr] + " ";
        };
    }

    // Übergabe an Funktion des Arrays und dort Ausgabe
    console.log("Ausgabe über Funktion der Objekte aus dem Array");

    txt = "";

    const personenDaten = (persons) => {
        for (let person of persons) {
            for (let x in person) {
                console.log(person[x]);
            }
            txt += '\n';
        }
    }

    personenDaten(persons);
    console.log(txt);

    // Verwenden von Arrayfunktionen z.B. array.map
    // neues Array entsteht, altes Array wird nicht verändert
    // als mapping Funktion kann eine Funktion oder eine anonyme Funktion verwendet werden

    const numbers = [45, 4, 9, 16, 25];
    console.log("Array Map");
    let x = 0;
    let numbers2 = numbers.map((value, index, array) => {
        x = x + value;
        return value * 2;
    });
    console.log(numbers2);


    // z.b. map --> findet alle Vorkommen die den Test 

    // bestehen --> neues Array
    console.log("Array some");
    numbers2 = numbers.some((value, index, array) => {
        return (value % 3 == 0)
    });
    console.log(numbers2);

    // z.B. find --> sucht das erste Vorkommen
    //ein Wert
    console.log("Array find");
    numbers2 = numbers.find((value, index, array) => {
        return (value % 3 == 0)
    });
    console.log(numbers2);

    const numbers3 = [45, 4, 9, 16, 25];

    numbers3.forEach(myFunction);
    console.log(txt);

    function myFunction(value, index, array) {
        txt += value + "\n";
    }

    // rufe statt myfunction die 
    // arrow function myfunktion2 auf, die 
    // den Durchschnitt aller Zahlen eruriert
    // und ausgibt
    let average = 0;

    const myFunction2 = (value) => {
        average += value;
    }

    numbers3.forEach(myFunction2);
    average = average / numbers3.length;
    console.log(average);

    // neues Array mit der map funktion 
    // jeder Array wert wird untersucht
    // und die Return werte werden in ein 
    // neues Array gespeichert
    let numbers4;

    const tuWasmitdenWerten = (value) => {
        if (value > 9) {
            return value;
        }
    }
    console.log("Array Filtern");
    // weitere Arrayfunktionen z.B. filter  --> alle Vorkommen, die den Filter passieren
    //neues Array

    numbers4 = numbers3.filter(tuWasmitdenWerten);

    console.log(numbers4);

}