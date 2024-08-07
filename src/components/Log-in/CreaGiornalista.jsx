

function CreaGiornalista(){
    return(
        <div className="bg-slate-200 bg-gradient-to-r to-transparent flex-col justify-evenly rounded-xl ">
            <div>
                Crea Giornalista
            </div>
            <div className="p-10 bg-[#93c0f7]  flex flex-col">
                <div>
                    Utente
                </div>
                <div >
                    <input className="rounded-sm" type="text" placeholder="inserisci Utente" />
                </div>
                <div>
                    Password
                </div>
                <div >
                    <input className="rounded-sm" type="password"  placeholder="inserisci Password"/>
                </div>
            </div>
            <div className=" bg-slate-100 rounded-lg ">
                <button type="submit" className="hover:bg-slate-500 hover:text-slate-100">Crea</button>
            </div>
        </div>
    )
}
export default CreaGiornalista;