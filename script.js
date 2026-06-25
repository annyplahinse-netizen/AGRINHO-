function calcular() {

    let area = Number(document.getElementById("area").value);
    let agua = Number(document.getElementById("agua").value);

    if(area <= 0 || agua <= 0){
        document.getElementById("resultado").innerHTML =
            "⚠️ Preencha os valores corretamente!";
        return;
    }

    let total = area * agua;

    let mensagem = "";

    if(total <= 50000){
        mensagem = "✅ Excelente uso sustentável da água!";
    }
    else if(total <= 100000){
        mensagem = "🌿 Consumo moderado. Avalie técnicas de irrigação eficiente.";
    }
    else{
        mensagem = "🚨 Alto consumo de água. Considere práticas mais sustentáveis.";
    }

    document.getElementById("resultado").innerHTML =
        `Consumo Total: ${total.toLocaleString('pt-BR')} litros<br><br>${mensagem}`;
}