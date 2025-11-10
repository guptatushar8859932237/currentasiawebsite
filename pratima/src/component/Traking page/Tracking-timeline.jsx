import React from "react";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import image from "../../assestss/slidenew3.jpeg";
import { Link, useLocation } from "react-router-dom";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import RollerShadesIcon from "@mui/icons-material/RollerShades";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ArrowBack } from "@mui/icons-material";
export default function Trackingtimeline() {
  const location = useLocation();
  console.log(location?.state?.data12);
  const data = location?.state?.data12 || [];

  const datagetdate7t = new Date(data[7]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate0t = new Date(data[0]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate1t = new Date(data[1]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate2t = new Date(data[2]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate3t = new Date(data[3]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate4t = new Date(data[4]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate5t = new Date(data[5]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate6t = new Date(data[6]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate8t = new Date(data[8]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate9t = new Date(data[9]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate10t = new Date(data[10]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate11t = new Date(data[11]?.created_at).toLocaleTimeString(
    "EN-gb"
  );
  const datagetdate1 = new Date(data[1]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate0 = new Date(data[0]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate2 = new Date(data[2]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate3 = new Date(data[3]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate4 = new Date(data[4]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate5 = new Date(data[5]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate6 = new Date(data[6]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate7 = new Date(data[7]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate8 = new Date(data[8]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate9 = new Date(data[9]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate10 = new Date(data[10]?.created_at).toLocaleDateString(
    "EN-gb"
  );
  const datagetdate11 = new Date(data[11]?.created_at).toLocaleDateString(
    "EN-gb"
  );

  return (
    <div>
      <Topbar />
      <Navbar />
      <>
        <section
          className="bannerBg"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Tracking</h1>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. illo
                  quae vero
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="trackSec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="justify-content-center">
                <Link to={'/order-details'}>
                <ArrowBack />
                </Link>
              </div>
              <div className="col-lg-10">
                <h2>Track a shipment</h2>
                <p>
                  Track your LTL, truckload, or intermodal shipment by entering
                  your <b>Track number</b> below to get instant freight tracking
                  information.
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-lg-10">
                <div className="track-result">
                  <Timeline position="alternate" className="timelineNew">
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate0 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate0}
                        <br />
                        {datagetdate0t == "05:30:00" ? "" : datagetdate0t}
                        <br />
                        {/* {new Date(data[0]?.created_at).toLocaleTimeString("EN-gb")} */}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot className="track_style">
                          {data[0]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <FastfoodIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Collected from supplier
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[0]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate1 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate1}
                        <br />
                        {datagetdate1t == "05:30:00" ? "" : datagetdate1t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="primary" className="track_style">
                          {data[1]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <LaptopMacIcon />
                          )}
                          {/* <LaptopMacIcon /> */}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Received at Asia Direct warehouse
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[1]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate2 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate2}
                        <br />
                        {datagetdate2t == "05:30:00" ? "" : datagetdate2t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot
                          color="primary"
                          variant="outlined"
                          className="track_style"
                        >
                          {data[2]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <AirportShuttleIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Dispatched to port
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[2]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate3 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate3}
                        <br />
                        {datagetdate3t == "05:30:00" ? "" : datagetdate3t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[3]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <RepeatIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Goods at origin port
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[3]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate4 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate4}
                        <br />
                        {datagetdate4t == "05:30:00" ? "" : datagetdate4t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[4]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <RepeatIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Goods are in transit
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[4]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate5 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate5}
                        <br />
                        {datagetdate5t == "05:30:00" ? "0" : datagetdate5t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {/* <RollerShadesIcon /> */}
                          {data[5]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <RollerShadesIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Arrived at destination port
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[5]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate6 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate6}
                        <br />
                        {datagetdate6t == "05:30:00" ? "" : datagetdate6t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[6]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <AutorenewIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Customs clearing in progress
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[6]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate7 == "01/01/1970"
                          ? "Updating soon"
                          : "invalid date"}
                        <br />
                        {datagetdate7t == "05:30:00" ? "" : datagetdate7t}
                        <br />
                        {/* {new Date(data[7]?.created_at).toLocaleTimeString("EN-gb")} */}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[7]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <HouseSidingIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Customs released
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[7]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate8 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate8}
                        <br />
                        {datagetdate8t == "05:30:00" ? "" : datagetdate8t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[8]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <MarkAsUnreadIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Goods in transit to warehouse
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[8]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate9 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate9}
                        <br />
                        {datagetdate9t == "05:30:00" ? "" : datagetdate9t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[9]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <SendTimeExtensionIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Imported at Asia Direct warehouse
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[9]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate10 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate10}
                        <br />
                        {datagetdate10t == "05:30:00" ? "" : datagetdate10t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[10]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <BusinessCenterIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Out for delivery
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[10]?.description}{" "}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {datagetdate11 == "01/01/1970"
                          ? "Updating soon"
                          : datagetdate11}
                        <br />
                        {datagetdate11t == "05:30:00" ? "" : datagetdate11t}
                        <br />
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          {data[11]?.is_completed === "1" ? (
                            <CheckCircleIcon className="track_check" />
                          ) : (
                            <AutorenewIcon />
                          )}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Delivered
                        </Typography>
                        <Typography className="text-capitalize">
                          {data[11]?.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </div>
  );
}
