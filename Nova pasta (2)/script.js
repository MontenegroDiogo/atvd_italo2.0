function Resposta1(){
    let res = document.querySelector('#input1').value;

    switch (res) {
        case "A":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break
            case "a":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
        case "B":
            // console.log("Correto");
            // alert("Correto");
            document.querySelector('#resposta').innerHTML="Correto";
            break
            case "b":
            // console.log("Correto");
            // alert("Correto");
            document.querySelector('#resposta').innerHTML="Correto";
            break;
        case "C":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break
            case "c":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
        default:
            // alert("Valor não aceito");
            // console.log("Valor não aceito");
            document.querySelector('#resposta').innerHTML="Valor não aceito";
            break


    }
}

function Resposta2(){
    let res2 = document.querySelector('#input2').value;

    switch (res2) {
        case "A":
            document.querySelector('#resposta2').innerHTML="Errado";
            break
            case "a":
            document.querySelector('#resposta2').innerHTML="Errado";
            break
        case "B":
            document.querySelector('#resposta2').innerHTML="Errado"
            break
            case "b":
                document.querySelector('#resposta2').innerHTML="Errado"
                break

        case "C":
            document.querySelector('#resposta2').innerHTML="Certo"
            break
            case "c":
                document.querySelector('#resposta2').innerHTML="Certo"
                break
        default:
            document.querySelector('#resposta2').innerHTML="Valor não aceito"
            break

        


    }



}

