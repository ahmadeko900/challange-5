import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import User from '../../assets/icon/fi_users.svg'
import Setting from '../../assets/icon/fi_settings.svg'
import Calendar from '../../assets/icon/fi_calendar.svg'

const baseURL = "https://rent-cars-api.herokuapp.com/customer/car";
function CardDetailCars() {
const { id } = useParams();
const [cars, setCars] = useState([]);
useEffect(() => {
const getCars = async () => {
const { data: res } = await axios.get(baseURL+'/'+id);
setCars(res)
}
getCars()
},[ id ])
  return (
  <section className="page-detail d-flex justify-content-center">
    <div className="detail-section mt-4">
      <div className="row">
        <div className="col-auto">
          <div className="card card-detail mt-2">
            <p><strong>Tentang Paket</strong></p>
            <div class="card-body">
              <p>Include</p>
              <ul>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>sudah termasuk pajak</li>
              </ul>
              <p>Exclude</p>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <p><strong>Refund, Reschedule, Overtime</strong></p>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </div>
          <button type="button" class="btn btn-bayar mt-4"> Lanjutkan Pembayaran </button>
        </div>

        <div className="col-auto">
          <div class="card-detail-mobil mt-2">
            <div class="card-body">
              <img src={cars.image} class="showcase-img" alt="img-car" />
              <p><strong>{cars.name}/{cars.category}</strong></p>
              <div className="icon d-flex">
                <p class="card-text">
                  <img className='me-1' src={User} alt="icon-key" />4 Orang
                </p>
                <p class="card-text">
                  <img className='me-1' src={Setting} alt="icon-clock" />Manual
                </p>
                <p class="card-text">
                  <img className='me-1' src={Calendar} alt="icon-clock" />Tahun 2020
                </p>
              </div>
              <p>Total <span><strong>Rp {cars.price}</strong></span></p>
              <button type="button" class="btn btn-bayar2">Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CardDetailCars