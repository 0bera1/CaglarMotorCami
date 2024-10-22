import MapContainer from '../map/MapContainer'

const Contact = () => {
    return (
        <div className='hero-overlat bg-opacity-80 bg-black flex-row flex'>
            <div className=" p-5 text-white ">
                <h1 className="text-3xl mt-2 font-bold">İletişim</h1>
                <p className='mt-8'>Çağlar Motor Camı</p>
                <p className='mt-0'>Adres: Filiz Sk. No:9, 35330 Balçova/İzmir</p>
                <a className='mt-2 text-sm lg:text-base relative text-blue-300 font-extralight after:bg-blue-300 
                after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer'
                    href="tel:+905317771863">Telefon: +90 (531) 777 18 63
                </a>
            </div>
            <div >
                <MapContainer />
            </div>
        </div>
    )
}

export default Contact
