import Foto from "../../image/moto.jpg";
import { BsSpeedometer, BsFillCalendarCheckFill, BsPaintBucket } from 'react-icons/bs'

function Destaques() {
    return (
        <div className="container">
            <div className="text-light text-center">
                <h1>Motos em destaques</h1>
            </div>
            <div className="row ">
                <div className="col-md-4 my-1">
                    <div className="card">
                        <img src={Foto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mx-2">Honda XRE 190</h5>
                            <div className="d-flex">
                                <p className="card-text mx-2"><strong><BsFillCalendarCheckFill /></strong> 2021/2022</p>
                                <p className="card-text mx-2"><strong><BsSpeedometer /></strong> 2021/2022</p>
                                <p className="card-text mx-2"><strong><BsPaintBucket /></strong> Azul</p>
                            </div>
                            <p className="card-text mx-2"><strong>R$22.900,00</strong></p>
                            <a href="#" className="btn btn-primary">Ver mais detalhes</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-1">
                    <div className="card">
                        <img src={Foto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mx-2">Honda XRE 190</h5>
                            <div className="d-flex">
                                <p className="card-text mx-2"><strong><BsFillCalendarCheckFill /></strong> 2021/2022</p>
                                <p className="card-text mx-2"><strong><BsSpeedometer /></strong> 2021/2022</p>
                                <p className="card-text mx-2"><strong><BsPaintBucket /></strong> Azul</p>
                            </div>
                            <p className="card-text mx-2"><strong>R$22.900,00</strong></p>
                            <a href="#" className="btn btn-primary">Ver mais detalhes</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-1">
                    <div className="card">
                        <img src={Foto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mx-2">Honda XRE 190</h5>
                            <div className="d-flex">
                                <p className="card-text mx-2"><strong><BsFillCalendarCheckFill /></strong> 2021/2022</p>
                                <p className="card-text mx-2"><strong><BsSpeedometer /></strong> 2021/2022</p>
                                <p className="card-text mx-2"><strong><BsPaintBucket /></strong> Azul</p>
                            </div>
                            <p className="card-text mx-2"><strong>R$22.900,00</strong></p>
                            <a href="#" className="btn btn-primary">Ver mais detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destaques;