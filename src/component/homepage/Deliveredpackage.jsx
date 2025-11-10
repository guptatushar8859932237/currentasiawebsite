import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
export default function Deliveredpackage() {
  const [data, setData] = useState({});
  useEffect(() => {
    getcount();
  }, []);
  const getcount = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}count-all`
      );
      if (response.data.success === true) {
        setData(response.data.details);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="bgCounter wow fadeInDown">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="counter">
                <h1>
                  <CountUp
                    end={
                      (data.no_of_orders || 0) +
                      (data.no_Of_clearanceOrder || 0)
                    }
                    duration={2}
                  />
                  <span>
                    <i className="fi fi-br-plus" />
                  </span>
                </h1>
                <h2>Delivered Packages</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="counter">
                <h1>
                  <CountUp end={data?.no_of_freights || 0} duration={2} />
                  <span>
                    <i className="fi fi-br-plus" />
                  </span>
                </h1>
                <h2>Total Freight's</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="counter">
                <h1>
                  <CountUp end={data?.no_of_clients || 0} duration={2} />
                  <span>
                    <i className="fi fi-br-plus" />
                  </span>
                </h1>
                <h2>Satisfied Clients</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="counter">
                <h1>
                  <CountUp end={data?.no_of_clearance || 0} duration={2} />
                  <span>
                    <i className="fi fi-br-plus" />
                  </span>
                </h1>
                <h2>Total Clearance</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
