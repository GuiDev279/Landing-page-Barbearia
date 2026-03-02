import LogoBarbearia from "../../assets/Logo-blade.png"

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)] z-50">
            <div className="flex  items-center gap-2">
                <img className="w-10 h-10 rounded object-cover" src={LogoBarbearia} alt="logo" />
                <span className="text-white">Barbearia Blade House</span>
                
            </div>
            <nav className="flex items-center border">
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto" >
                        <li className="cursor-pointer text-white  hover:text-[#D4Af37] transition-colors duration-300 text-left  md:text-center py-2">Inicio</li>
                        <li className="cursor-pointer text-white  hover:text-[#D4Af37] transition-colors duration-300 text-left  md:text-center py-2">Serviços</li>
                        <li className="cursor-pointer text-white  hover:text-[#D4Af37] transition-colors duration-300 text-left  md:text-center py-2">Contato</li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header