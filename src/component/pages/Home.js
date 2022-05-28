import Banner from "../pages-home/Banner";
import Destaque from "../pages-home/Destaque";

function Home() {
    return (
        <div>
            <header className="header">
                <Banner />
            </header>
            <div className="my-2">
                <Destaque />
            </div>
        </div>
    )
}

export default Home;
