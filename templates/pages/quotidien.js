function check(){
    var type=document.getElementById("radio_btn");
    if (type.checked==true){
        document.write(
            <fieldset>
                        <label>Ville:</label>
                        <input type="text" name="texte" id="trajet1"/><br/>
                        <label>Destination:</label>
                        <input type="text" name="texte" id="trajet2"/>
            </fieldset>
        );
        alert("oui checked");
    }
}