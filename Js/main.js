const button = document.querySelector("#change");
let numberStyleSheet = 0;


button.addEventListener("click", () => {
    
    let style = document.getElementById("pagestyle");
    
    function changeStyle() {
        if (numberStyleSheet === 0) {
            style.href = "../Css/estilos.css";
            numberStyleSheet = 1;
            
        } else if (numberStyleSheet === 1) {
            style.href = "../Css/estilos-urbano.css";
            numberStyleSheet = 2;
            
        } else {
            style.href = "../Css/estilos-futurista.css";
            numberStyleSheet = 0;
            
        }
    }
    
    changeStyle();
});
