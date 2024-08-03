function Article({titolo, descrizione, immagine}) {
    return(
        <>
            <div className="flex flex-col items-center w-full h-full md:w-[300px] card m-5 bg-base-100 shadow-xl bg-gray-50 rounded-2xl transform transition-transform duration-250 ease-in hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex justify-center">
                    <img src={immagine} alt="immagine" className="mx-auto max-w-full rounded-xl" style={{maxHeight: "200px"}}  />
                </div>
                <div className="mt-4">
                    <h2 className="text-2xl md:text-left font-bold">{titolo}</h2>
                </div>
                <p className="text-center md:text-left">{descrizione}</p>
            </div>
        </>
        
    )
    
}

export default Article;