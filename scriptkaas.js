var kaaskleur = prompt("Is de kaas geel?");

    if (kaaskleur == "ja") {
        var gaten = prompt("Zitten er gaten in?");
    }
        else if (gaten == "nee") {
            var hard = prompt("Is de kaas zo hard als steen?");
        }
            if (hard == "ja") {
                alert("Uw kaas is: Parmigiano Reggiano.");
            }
            else if (hard == "nee") {
                alert("Uw kaas is: Goude kaas.");
            }
        if (gaten == "ja") {
            var duur = prompt("Is de kaas belachelijk duur?");
        }
            if (duur == "ja") {
                alert("Uw kaas is: Emmenthaler.");
            }
            else if (duur == "nee") {
                alert("Uw kaas is: Leerdammer.");
            }
    else if (kaaskleur == "nee") {
        var kaasblauw = prompt("Heeft de kaas blauwe schimmels?");
    }
        if (kaasblauw == "ja") {
            var kaaskorst = prompt("Heeft de kaas een korst?");
        }
            if (kaaskorst == "ja") {
                alert("Uw kaas is: Blue de Rochbaron.")
            }
            else if(kaaskorst == "nee") {
                alert("Uw kaas is: Fourme d'Ambert.")
            }

        else if (kaasblauw == "nee") {
            var CheeseKorst = prompt("Heeft de kaas een korst?")
        }
            if (CheeseKorst == "ja") {
                alert("Uw kaas is: Camembert.")
            }
            else if (CheeseKorst == "nee") {
                alert("Uw kaas is: Mozzarella")
            }