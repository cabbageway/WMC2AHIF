const classesInJS = () => {



    // Vergleich Objekt mit = {} 

    let autoObject = {
        Sitze: 5,
        Türen: 3,
    }

    class Auto {
        constructor(sitze, türen) {
            this.sitze = sitze;
            this.türen = türen;
        }
        getTüren() {
            return this.türen;
        }
    }
    let audi = new Auto(4, 5);
    console.log(audi.sitze);
    console.log(audi.getTüren());

    // Aufgabe Erstelle eine Klasse Schüler mit seinen Attributen
    // Attribute Name, Klasse und Alter

    class Mensch {
        constructor(namen, alter, geschlecht) {
            this.namen = namen;
            this.alter = alter;
            this.geschlecht = geschlecht;
        }
    }

    class Schueler extends Mensch {
        constructor(namen, alter, geschlecht, klasse) {
            super(namen, alter, geschlecht); // Basisklasse 
            this.klasse = klasse; // neuen Attribute
        }
        static hello() {
            return "hei oida";
        }
    }

    let sebastian = new Schueler("Sebastian", 16, "bi", "2BHIF");
    console.log(sebastian); //Objekt 
    console.log(Schueler.hello()); // Aufruf der statischen Methode

    // Vererbung
    class Model extends Auto {
        constructor(türen, sitze, brand) {
            super(sitze, türen);
            this.brand = brand;
        }
    }
    let myvw = new Model(3, 4, "vw");
    console.log(myvw.getTüren());

    // Aufruf von statischen Klassenmethoden

    class zug {
        constructor(sitze) {
            this.sitze = sitze
        }
        static hello() {
            return "Hello";
        }
    }

    console.log(zug.hello());

}