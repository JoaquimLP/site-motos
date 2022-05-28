import FotoBanner from "../../image/banner.jpg";
function Banner() {
    return (
        <div>
            <div className="img-wrapper">
                <img src={FotoBanner} className="img-fluid" alt=""/>
            </div>
            <div className="header-banner">
                <h1 className="banner-h1">JLP Motos</h1>
                <p className="banner-p">Sua liberdade sobre duas rodas</p>
            </div>
        </div>
    )
}

export default Banner;
