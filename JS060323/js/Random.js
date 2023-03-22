const randInJS = () => {

    console.log(`erzeugen von 100 Ganzzahl und Dezimalzahlen im 
Bereich von -100 bis 100`);
    const OG = 100;
    const UG = -100;
    const arrDouble = [];
    const arrInt = [];
    /* Math. random liefert Dezimalzahlen zwischen 0 und 1
    Math.floor liefert die Vorkommazahl einer Dezimalzahl
    Beispiel: 9.67 --> 9
    9.33 --> 9
     
    Methode push: fügt am Ende eine neue Zahle ein */


    for (let i = 0; i < 50; i++) {
        arrDouble.push(Math.random() * (OG - UG) + UG);
        arrInt.push(Math.floor(Math.random() * (OG - UG)) + UG);
    }

    console.log(arrInt);
    console.log(arrDouble);

}