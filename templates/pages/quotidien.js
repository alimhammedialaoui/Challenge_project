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
        label1.innerText="Ville:\t";
        
        champ2.name="champs[]";
        champ2.type="type";
        label2.innerText="\n Destination:\t";
         
        champ1.style.cssText="width:50%;padding:5px 5px;margin:8px 0;box-sizing: border-box;border-radius: 5px;border:solid;border-color: #aaa;border-width: 1px;";
        champ2.style.cssText="width:50%;padding:5px 5px;margin:8px 0;box-sizing: border-box;border-radius: 5px;border:solid;border-color: #aaa;border-width: 1px;";
        
        
        // Ajout de l'événement onclick
        
        
        // On crée un nouvel élément de type "p" et on insère le champ l'intérieur.
        var bloc = document.createElement("p");
        bloc.appendChild(label1);
        bloc.appendChild(champ1);
        
        bloc.appendChild(label2);
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