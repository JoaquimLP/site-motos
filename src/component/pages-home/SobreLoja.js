import FotoSobreLoja from "../../image/sobre-loja.jpg";
//import { BsSpeedometer, BsFillCalendarCheckFill, BsPaintBucket } from 'react-icons/bs'

function SobreLoja() {
    return (
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col-md-6 py-0">
                        <img src={FotoSobreLoja} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6 my-1">
                        <div className="card-body">
                            <h5 className="fs-1 text-center card-title">Conheça a nossa história!</h5>
                            <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                            <a href="#" className="btn btn-primary">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreLoja;