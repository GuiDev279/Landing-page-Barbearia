import { Button } from "./shared/Button";
import heroBarber from "../assets/HEROBARBER.png";

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="h-screen w-full flex items-center bg-[#0A0A0A] relative overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBarber}
                    alt="Barbearia Interior"
                    className="w-full h-full object-cover opacity-40"
                />

            </div>

            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-white drop-shadow-lg text-[25px]">
                            Corte na régua, <br /> barba alinhada e atendimento de respeito!
                        </h1>

                        <p className="text-[#A0A0A0] text-lg max-w-xl drop-shadow-md">
                            Transforme seu visual em nossa barbearia,<br /> Profissionais
                            especializados, <br /> ambiente premium e serviço de excelência!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">

                            <Button
                                variant="primary"
                                onClick={() => scrollToSection("services")}
                                className="w-80"
                            >
                                Ver serviços
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
