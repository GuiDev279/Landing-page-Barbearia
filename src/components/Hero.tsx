import HeroImg from '../assets/HEROBARBER.png';

const HeroPage = () => {
    return (
        <main className="min-h-screen flex items-center pt-20 bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={HeroImg} alt="hero" className='w-full  object-cover' />
            </div>
            <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 '>
                <div className='grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24'>
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-white drop-shadow-lg text-[25px]">
                            Corte na régua, <br/> barba alinhada e atendimento de respeito!
                        </h1>

                        <p className="text-[#A0A0A0] text-lg max-w-xl drop-shadow-md">
                            Transforme seu visual em nossa barbearia,<br/> Profissionais
                            especializados, <br/> ambiente premium e serviço de excelência!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className='bg-amber-300 text-white rounded-md px-4 py-2 cursor-pointer'>
                                Agendar no WhatsApp
                            </button>
                            <button className='bg-amber-300 text-white rounded-md px-4 py-2 cursor-pointer'>
                                Ver serviços
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}


export default HeroPage;