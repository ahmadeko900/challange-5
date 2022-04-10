import React from 'react'
import Car from '../../assets/img/img_car.png'

function Hero() {
    return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center hero">
                    <div className="col-lg-6 col-12">
                        <h1 className="header">
                            Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)
                        </h1>
                        <p className="description">
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam
                        </p>
                       
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-self-end justify-content-end">
                       
                        <img src={Car} className="img-fluid img-mobil" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Hero