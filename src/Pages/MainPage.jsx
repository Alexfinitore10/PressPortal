import Navbar from "../components/NavBar";
import Article from "../components/Articles";

function MainPage(){
    return(
        <>
            <Navbar />
            {/* TODO aggiungi in un componente diverso */}
            <div className="mx-auto flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">Benvenuto su NewsHub</h1>
                <div className="flex flex-row gap-5">
                    <Article titolo="Articolo 1" descrizione="Descrizione articolo 1" immagine="https://picsum.photos/200/300" />
                    <Article titolo="Articolo 2" descrizione="Descrizione articolo 2" immagine="https://picsum.photos/200/300?random=1" />
                    <Article titolo="Articolo 3" descrizione="Descrizione articolo 3" immagine="https://picsum.photos/200/300?random=2" />
                </div>
            </div>
        </>
    )
}

export default MainPage;
