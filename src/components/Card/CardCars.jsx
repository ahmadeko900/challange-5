import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../redux/action/carAction';
import { handleCarByID } from '../../redux/action/carByIdAction';
import User from '../../assets/icon/fi_users.svg'
import Setting from '../../assets/icon/fi_settings.svg'
import Calendar from '../../assets/icon/fi_calendar.svg'

function CardCars() {
    const dispatch = useDispatch();

    const { isLoading: loadingCar, data: carData} = useSelector(
        (state) => state.car
    );

    useEffect(() => {
        dispatch(getCar());
    }, []);


    return (
    <>
       {loadingCar ? 'Loading' : carData?.map((item) => (
        <div className="col-lg-4 col-md-6 col-12 mt-5 mx-0 d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
                    <img src={`${ item.image }`} className="showcase-img" alt="..." />
                    <div className="car-name">{`${ item.name }`}/{`${ item.category }`}</div>
                    <div className="car-price">Rp {`${ item.price }`} / hari</div>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="icon">
                        <p class="card-text">
                            <img className='me-1' src={User} alt="icon-key" />{`${ item.capacity }`} orang
                        </p>
                        <p class="card-text">
                            <img className='me-1' src={Setting} alt="icon-clock" />{`${ item.transmission }`}
                        </p>
                        <p className="card-text">
                            <img className='me-1' src={Calendar} alt="icon-clock" />Tahun {`${ item.year }`}
                        </p>
                    </div>
                    <Link
                        to={`/search/${item.id}`}
                        className="btn btn-primary  w-100 choose-car d-flex justify-content-center align-items-center"
                        onClick={() => dispatch(handleCarByID(item))}>
                        Pilih Mobil
                    </Link>
                </div>
            </div>
        </div>
        ))}
    </>
    )
}

export default CardCars
