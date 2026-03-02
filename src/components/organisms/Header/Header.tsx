import Logo from "../../molecules/Header/Logo";
import Nav from "../../molecules/Header/Nav";

const Header = () => (
    <header className="bg-gradient-to-r from-[#3b2416] via-[#5a341d] to-[#c97a36] shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
            <Nav />
        </div>
    </header>
);

export default Header;