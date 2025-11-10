import React, { useEffect, useState } from "react";
import Topbar from "./component/Topbar";
import Navbar from "./component/homepage/Navbar";
import Footer from "./component/homepage/Footer";
import axios from "axios";
export default function Disputepage() {
  const [darata, setDarata] = useState([]);
  const getdata = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("data"));
      console.log(userData);
      if (!userData?.id) {
        console.error("User ID not found in localStorage");
        return;
      }
      const datat = {
        user_id: userData.id,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}getQueriesByUserId`,
        datat
      );
      if (response.data?.data) {
        setDarata(response.data.data);
      } else {
        console.warn("No data found");
        setDarata([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="table-responsive mt-2">
        <table className="table mt-4 table-striped tableICon">
          <thead>
            <tr>
              <th scope="col">Freight Number</th>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th className="col-2" scope="col">
                Nature of Heading
              </th>
              <th scope="col">Outcomes</th>
              <th scope="col">Resolution</th>
            </tr>
          </thead>
          <tbody>
            {darata.length > 0 ? (
              darata.map((item, index) => (
                <tr className="border-bottom" key={index}>
                  <td>{item.freight_no || "N/A"}</td>
                  <td>{item.name || "N/A"}</td>
                  <td>{item.subject || "N/A"}</td>
                  <td>{item.nature_of_Heading || "N/A"}</td>
                  <td>{item.outcome || "N/A"}</td>
                  <td>{item.resolution || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
