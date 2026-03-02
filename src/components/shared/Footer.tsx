const Footer = () => {
    return (
        <footer className="flex justify-between bg-[#0A0A0A] border-t border-[rgba(212, 175, 55, 0.2 )] py-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-[#A0A0A0] textt-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Barbearia Blade House. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;