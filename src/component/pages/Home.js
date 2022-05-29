import Banner from "../pages-home/Banner";
import Destaque from "../pages-home/Destaque";
import SobreLoja from "../pages-home/SobreLoja";

function Home() {
    return (
        <div>
            <header className="header">
                <Banner />
            </header>
            <div className="my-2">
                <Destaque />
            </div>
            <div className="my-2">
                <SobreLoja />
            </div>
        </div>
    )
}

export default Home;
