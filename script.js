$(()=> {
    var count = 0;
    var isFinished = false;
    
    $("input[type=button]").click((e)=>{
        if(!isFinished) {
            if(e.target.value == "") {
                fazerJogada(e);
                if(count > 4) {
                    checarTabuleiro();
                }
                
            }
        }
    });
    
    function reiniciar() {
        $("main").append("<a href=''>Reiniciar</a>");
    }
    
    function fazerJogada(e) {
        if(count %2 == 0) {
            e.target.value = "X";
            e.target.style.color = "aqua";
        } else {
            e.target.value = "O";
            e.target.style.color = "red";
        }
    
        count ++;
    }

    function checarTabuleiro() {
        var vencedor = false;

        var linha1 = [$('#e11').val(), $('#e12').val(), $('#e13').val()];
        var linha2 = [$('#e21').val(), $('#e22').val(), $('#e23').val()];
        var linha3 = [$('#e31').val(), $('#e32').val(), $('#e33').val()];

        var coluna1 = [$('#e11').val(), $('#e21').val(), $('#e31').val()];
        var coluna2 = [$('#e12').val(), $('#e22').val(), $('#e32').val()];
        var coluna3 = [$('#e13').val(), $('#e23').val(), $('#e33').val()];

        var diagonal1 = [$('#e11').val(), $('#e22').val(), $('#e33').val()];
        var diagonal2 = [$('#e13').val(), $('#e22').val(), $('#e31').val()];
        
        if(!linha1.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < linha1.length; i++) {
                if(linha1[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!linha2.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < linha2.length; i++) {
                if(linha2[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!linha3.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < linha3.length; i++) {
                if(linha3[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!coluna1.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < coluna1.length; i++) {
                if(coluna1[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!coluna2.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < coluna2.length; i++) {
                if(coluna2[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!coluna3.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < coluna3.length; i++) {
                if(coluna3[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!diagonal1.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < diagonal1.length; i++) {
                if(diagonal1[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(!diagonal2.includes("")) {
            let aux = 0;
            
            for(var i = 0; i < diagonal2.length; i++) {
                if(diagonal2[i] == "X") {
                    aux --;
                } else {
                    aux ++;
                }
            }
            exibirResultado(aux);
        }

        if(count == 9) {
            if(!this.vencedor) {
                $("main").append("<h3 id='vencedor'>Jogo Empatado</h3>");
                isFinished = true;
                $("main").append("<button href=''>Reiniciar</button>");
            }
            
        }

        $("button").click(limparTabuleiro);
        
    }

    function limparTabuleiro() {
        $("input[type=button]").val("");
        count = 0;
        isFinished = false;
        vencedor = false;
        $("button").remove();
        $("h3").remove();
        
    }

    function exibirResultado(aux) {
        if(!isFinished) {
            if(aux == -3) {
                $("main").append("<h3 id='vencedor'>Jogador X venceu!</h3>");
                isFinished = true;
                vencedor = true;
                $("main").append("<button>Reiniciar</button>");
            } else if(aux == 3) {
                $("main").append("<h3 id='vencedor'>Jogador O venceu!</h3>");
                isFinished = true;
                vencedor = true;
                $("main").append("<button href=''>Reiniciar</button>");
            }
        }
    }

    
});

