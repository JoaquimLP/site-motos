import { BsWhatsapp, BsFillTelephonePlusFill, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
    return (
        <div className="container">
            <div className="row mx-2">
                <div className="col-md-6 text-light">
                    <div className="color-card card w-75">
                        <div className="card-body">
                            <h5 className="card-title">Contato</h5>
                            <div className='d-flex'>
                                <p className='mx-1'><BsWhatsapp /><span className='mx-1'>(41) 9 9243-4396</span></p>
                                <p className='mx-1'><BsFillTelephonePlusFill /> <span className='mx-1'>(41) 9 9243-4396</span></p>
                            </div>
                            <p className='mx-1'>
                                Rua Doutora Ana Maria Mansur Mader Gisi	Ganchinho	Curitiba/PR	81935-476
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-light">
                    <div className="color-card card w-75">
                        <div className="card-body">
                            <h5 className="card-title">Siga-nos nas nossas redes sociais</h5>
                            <div className='d-flex'>
                                <span className='mx-3 fs-3'><BsFacebook /></span>
                                <span className='mx-3 fs-3'><BsInstagram /></span>
                                <span className='mx-3 fs-3'><BsTwitter /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center text-light">
                    <p>
                        Copyright &copy; 2022, JLPena - Todos os diretos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;