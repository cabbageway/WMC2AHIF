const operatorsInJS = () => {
    // zeilenweise kommentieren
    /* (Blockweise kommentieren)
        Arithmetic operators (zwei Operand): +, -, *, /, %
        Uniaere operatoren (nur ein Operand): ++, --, !, +, - (Vorzeichen)
        Assignment operatoren (zwei Operand): =, +=, -=, *=, /=, %=
        comparison opertor (zwei Operand): <, >, ==, <=, >=, !=
        logical operators (zwei Operand): &&, ||, !

        Terneare Operators (drei Operand):
        condition ? if condition true : if condition false
     */
    let fisch; //undefined
    console.log(fisch);
    console.log(typeof(fisch));

    let txt = "";
    console.log(typeof(txt)); // string

    fisch = document.getElementById("output");

    fisch.innerHTML = txt; // leer nicht undefined

    let value = 6; // number (double)
    let result = false;

    result = value > 5 ? true : false; // ternärer Operator

    txt = `result von ternärer Operator: value > 5 ? true : false = ${result}`;
    console.log(`result von value > 5 ? true : false = ${result}`);
    fisch.innerHTML = txt;
    let a = 5;
    let b = 6;
    let c = 7;
    a = b++ + ++c; // inkremment unärer Operator
    console.log(a);

    /* 
    Typenvergleich: 
    === 	equal value and equal type 	x === 5 	true 	
    x === "5" 	false da Typ ungleich */
    let x = 6;
    let y = '6';

    result = x === y;
    let text2 = `Der Typenvergleich von "6" und der Zahl 6 liefert 
    mit dem === Operator ${result}`;
    fisch.innerHTML += "<br>" + text2;

    console.log(`text text text 
    ${result} und dann kommt noch ${x}`);

    // Backtickschreibweise   = shift Zeichen neben Backspace und Space
    // `  `   mit ${variablen} werden Variablen eingeblendet

    console.log(`vgl Inhalt und Datentypen ${x} === ${y}`);

    console.log("vgl Inhalt und Datentypen" + x + " === " + y);



    /* !== not equal value and not equal type */

}