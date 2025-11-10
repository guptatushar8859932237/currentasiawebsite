import React, { useEffect, useState } from 'react'
import image1 from '../../assestss/team-1.png'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Notification() {

  const Swal = require('sweetalert2')
  const [data, setData] = useState({})
  const currentuser = JSON.parse(localStorage.getItem('data'))
  const handlegetnoti = () => {
    axios.post(`${process.env.REACT_APP_BASE_URL}notification-users`, { user_id: currentuser.id }).then((response) => {
      setData(response.data.data)
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }

  const hanldeclickdelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${process.env.REACT_APP_BASE_URL}remove-all-notifications`, { user_id: currentuser.id }).then((response) => {
          toast.success(response.data.message)
          handlegetnoti()
        }).catch((error) => {
          console.log(error.response.data.message)
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  useEffect(() => {
    handlegetnoti()
  }, [])

  const handleclickdelete = (id) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}remove-notification`, {
      notification_id: id
    }).then((response) => {
      toast.success(response.data.message)
      handlegetnoti()
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }

  return (
    <div>
      <section className="notificationSec pt80">
        <div className="container">
          {
            data.length > 0 ? (
              <button className='mb-3 justify-content-end bg-primary btn text-white rounded' style={{ marginLeft: "93%" }} onClick={hanldeclickdelete}>Clear All</button>
            ) : (
              <p className='text-center'>no notification</p>
            )
          }
          <div className="row">
            <div className="col-lg-12 ">
              {
                data && data.length > 0 && data.map((item) => {
                  return (
                    <>
                      <div className="notificationParent">
                        <div className="notificationImg">
                          <img src={image1} alt="e" />
                        </div>
                        <div className="notificationContent">
                          <h5>{item?.title}</h5>
                          <p>
                            {item?.description}
                          </p>
                        </div>
                        <i className="fi fi-rr-rectangle-xmark text-danger  fs-2 mt-3" style={{ marginLeft: "auto" }} onClick={() => { handleclickdelete(item.id) }}></i>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
