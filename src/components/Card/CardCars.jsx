import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import User from '../../assets/icon/fi_users.svg'
import Setting from '../../assets/icon/fi_settings.svg'
import Calendar from '../../assets/icon/fi_calendar.svg'

const baseURL = "https://rent-cars-api.herokuapp.com/customer/car";
function CardCars() {
const [cars, setCars] = useState([]);
const navigate = useNavigate();
useEffect(() => {
const getCars = async () => {
const { data: res } = await axios.get(baseURL);
setCars(res)
}
getCars()
},[])
const handleGoToDetail = (id) => {
navigate(`/${id}`)
};
    return (
    <>
        {
        cars.map((car) => {
        return (
        <div className="col-lg-4 col-md-6 col-12 mt-5 mx-0 d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
                    <img src={car.image} className="showcase-img" alt="..." />
                    <div className="car-name">{car.name}/{car.category}</div>
                    <div className="car-price">Rp {car.price} / Hari</div>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="icon">
                        <p class="card-text">
                            <img className='me-1' src={User} alt="icon-key" />4 Orang
                        </p>
                        <p class="card-text">
                            <img className='me-1' src={Setting} alt="icon-clock" />Manual
                        </p>
                        <p className="card-text">
                            <img className='me-1' src={Calendar} alt="icon-clock" />Tahun 2020
                        </p>
                    </div>
                    <button className="btn btn-primary w-100 choose-car" onClick={()=> handleGoToDetail(car.id)}>Pilih
                        Mobil</button>
                </div>
            </div>
        </div>
        )
        })
        }
    </>
    )
}

export default CardCars