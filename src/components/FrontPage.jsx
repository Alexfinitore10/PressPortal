import Article from "./Articles";
function FrontPage(){
    return(
        <div className="mx-auto flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">Benvenuto su NewsHub</h1>
                <div className="flex flex-row gap-5">
                    {/* TODO fare in modo che le variabili vengono messe da funzione da backend */}
                    <Article image="https://picsum.photos/200/300" title="L'Italia si aggiudica il mondiale del basket" descrizione="Una squadra di giocatori italiani ha vinto il mondiale di basket, dopo un'annata di lavoro e sacrificio. I protagonisti sono stati il guardia tiratore Andrea Gigante e il centro Alessandro Chiti, che hanno guidato la squadra ad una finale sfida contro gli Stati Uniti, che però sono stati i campionati." publishedDate="01/01/2022" bodyPreview="Questo è un testo di esempio di un articolo, che parla di come l'Italia si è aggiudicata il campionato mondiale di basket. Il testo è molto dettagliato e descrive le azioni dei giocatori e il loro ruolo nel successo della squadra." tags="basket, calcio, calcio mondiale" />
                    <Article image="https://picsum.photos/200/300?random=1" title="Il pensionato sconosciuto che ha salvato il gatto" descrizione="Un uomo di mezza età si è impegnato a seguire un gatto che era stato abbandonato e si era perso in un quartiere periferico. Il gatto era sparito da diversi giorni e nessuno sapeva dove si trovasse." publishedDate="01/01/2022" bodyPreview="Questo è un testo di esempio di un articolo, che parla di come un pensionato sconosciuto si è impegnato a cercare e salvare un gatto che era stato abbandonato. Il testo descrive le sue azioni e i suoi tentativi per ritrovare il gatto." tags="gatto, animali, pensionato" />
                    <Article image="https://t4.ftcdn.net/jpg/00/38/34/37/360_F_38343743_lOX7Y1W41vXWX2PzHNI9tzFrwfY929Le.jpg" title="Il lupo che ha salvato il villaggio" descrizione="Un lupo ha salvato un villaggio da una violenta tempesta di neve. La notte era buia e il vento era forte, e molti abitanti del villaggio stavano<|func_decorators|>endo in pericolo." publishedDate="01/01/2022" bodyPreview="Questo è un testo di esempio di un articolo, che parla di come un lupo si è impegnato a salvare un villaggio da una violenta tempesta di neve. Il testo descrive le sue azioni e i suoi tentativi per salvare il villaggio. Si sveglino tutti tranne..." tags="lupo, animali, villaggio" />
                </div>
        </div>
    )
}
export default FrontPage;