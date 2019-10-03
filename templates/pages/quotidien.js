var cpt=0;
function ajout(element){
    var type = document.getElementById("radio_btn");
    
    if(cpt==0){
        cpt=1;
        var formulaire = window.document.formulaireDynamique;
        // On clone le bouton d'ajout
        var ajout = element.cloneNode(true);
        // Crée un nouvel élément de type "input"
        var champ1 = document.createElement("input");
        var label1 = document.createElement("label");
        var champ2 = document.createElement("input");
        var label2 = document.createElement("label");
        // Les valeurs encodée dans le formulaire seront stockées dans un tableau
        champ1.name = "champs[]";
        champ1.type = "text";
        champ1.placeholder ="Ville";
        
        champ2.name="champs[]";
        champ2.type="type";
        champ1.placeholder ="Destination";

        
         
        champ1.style.cssText="width: 100%;padding: 10px 0;margin: 5px 0;border-left: 0;border-top:0;border-right: 0;border-bottom: 1px solid #999;outline: none;background: transparent;";
        champ2.style.cssText="width: 100%;padding: 10px 0;margin: 5px 0;border-left: 0;border-top:0;border-right: 0;border-bottom: 1px solid #999;outline: none;background: transparent;";
        
        
        // Ajout de l'événement onclick
        
        
        // On crée un nouvel élément de type "p" et on insère le champ l'intérieur.
        var bloc = document.createElement("p");
        
        bloc.appendChild(champ1);
        
        
        bloc.appendChild(champ2);
        

        formulaire.insertBefore(bloc,element.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
    
    }
 }
 cpt=0;
 function suppression(element){
     
     if(cpt==0){
            cpt=1;
            var formulaire = window.document.formulaireDynamique;
      
            // Supprime le bouton d'ajout
            formulaire.removeChild(element.nextSibling.nextSibling.nextSibling); 
     }
    
}