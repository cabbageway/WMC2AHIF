const nodesInJS = () => {

    console.log(`erzeugen Knoten, Attributen und Textknoten`);

    // Ziel einen p-Tag mit Text einfügen 
    // im Div mit der id = erg

    // p-Knoten erstellen p, div, 
    let para = document.createElement("p");

    let node = document.createTextNode("neuer Textknoten");

    // anhängen vom Textknoten an den Dokumentnode
    para.appendChild(node);

    // ich hänge den Textknoten an den p-Tag
    // a) suche den Platz im DOM Baum 

    let element = document.getElementById("output");

    // einhängen in den dom Baum 
    element.appendChild(para);



    // in den zweiten div hängen wir einen Link "a" mit einem Text
    // Link zu Google
    para = document.createElement("a");

    node = document.createTextNode("G O O G L E mit href-Attribut");

    // Attributknoten ergänzen

    let att = document.createAttribute('href');
    // value ist z.B. class="rot", href="http://www.google.at"
    att.value = "http://www.google.at";

    // an para das Attribut setzen
    para.setAttributeNode(att);

    // an para den Textknoten hängen
    para.appendChild(node);

    // para in den Dombaum hängen
    element = document.getElementById("output");
    element.appendChild(para);
    let paraInnen;
    let textnode;
    /* Aufgabe ul-Knoten dann einen li-Knoten mit Textknoten dbi 
     */
    para = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        paraInnen = document.createElement("li");
        textnode = document.createTextNode(`DBI ${i+1}`);
        paraInnen.appendChild(textnode);
        para.appendChild(paraInnen);
    }
    element.appendChild(para);


    // Attribute anhängen
    let div = document.getElementById('output');

    // attribute erzeugen z.B. class, href, src, alt ...
    att = document.createAttribute('class');
    // value ist z.B. class="rot", href="http://www.google.at"
    att.value = 'hinweis';
    div.setAttributeNode(att);

    // ERgänzen Attribut "http://www.google.com"

}