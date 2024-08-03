import { Link } from "react-router-dom";
function RegisterForm(){
    return(
        <>
        <div className="bg-slate-200 bg-gradient-to-r to-transparent flex-col justify-evenly rounded-xl ">
            <div>
            Registrazione
            </div>
            <div className="p-10 bg-[#93c0f7]  flex flex-col">
            <div>
                Nome
            </div>
            <div >
                <input className="rounded-sm" type="text" />
            </div>
            <div>
                Cognome
            </div>
            <div >
                <input className="rounded-sm" type="text" />
            </div>
            <div>
                Email
            </div>
            <div >
                <input className="rounded-sm" type="text" />
            </div>
            <div>
                Password
            </div>
            <div >
                <input className="rounded-sm" type="password" />
            </div>
            </div>
            <div className=" bg-slate-100 rounded-lg ">
            <button type="submit" className="hover:bg-slate-500 hover:text-slate-100">Registrati</button>
            </div>
        </div>
        <div>
            <p>Hai già un account? Clicca <Link className="text-red-700" to="/login"> qui</Link> per effettuare il login</p>
        </div>
        </>
    );
}

export default RegisterForm;