const Footer = () => {
    return (
        <footer className="bg-[#3b2416] text-[#f7e1c3] py-12 border-t border-[#c97a36]/40">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Columna 1 */}
                <div>
                    <h3 className="text-2xl font-bold text-[#c97a36] mb-2">
                        Barbería El Filo
                    </h3>
                    <p className="text-[#f7e1c3]/70">
                        &copy; 2024 Todos los derechos reservados
                    </p>
                </div>

                {/* Columna 2 */}
                <div>
                    <h4 className="text-lg font-semibold text-[#c97a36] mb-4">
                        Contacto
                    </h4>
                    <p className="text-[#f7e1c3]/70 mb-2">
                        Email: contacto@barberiaelfilo.com
                    </p>
                    <p className="text-[#f7e1c3]/70">
                        Teléfono: +54 11 5555-5555
                    </p>
                </div>

                {/* Columna 3 */}
                <div>
                    <h4 className="text-lg font-semibold text-[#c97a36] mb-4">
                        Redes
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-[#f7e1c3]/70 hover:text-[#c97a36] transition"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-[#f7e1c3]/70 hover:text-[#c97a36] transition"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-[#f7e1c3]/70 hover:text-[#c97a36] transition"
                            >
                                TikTok
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;