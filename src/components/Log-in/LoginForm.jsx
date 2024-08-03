import { Link } from "react-router-dom";
function LoginForm() {
    return(
    <>
        <div className="bg-slate-200 bg-gradient-to-r to-transparent flex-col justify-evenly rounded-xl ">
            <div>
                Login
            </div>
            <div className="p-10 bg-[#93c0f7]  flex flex-col">
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
                    <button type="submit" className="hover:bg-slate-500 hover:text-slate-100">Submit</button>
            </div>
        </div>
        <div>
            <p>Non sei ancora registrato? Clicca <Link className="text-red-700" to="/register">qui</Link> per registrarti</p>
        </div>
    </>
    )
}
export default LoginForm;