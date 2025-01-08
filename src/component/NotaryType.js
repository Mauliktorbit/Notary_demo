import React, { useState } from "react";
import Navbar from "./Navbar";

const NotaryType = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const boxData = [
    { title: "New Notary", link: "/newnotary" },
    { title: "Pending Notary", link: "/pendingnotary" },
    { title: "Approved Notary", link: "/approvednotary" },
    { title: "Rejected Notary" },
    { title: "Draft Notary", link: "/draftnotary" },
  ];

  return (
    <>
    <Navbar />
    <div className="kyc-container">
      <div className="container">
        {/* First Row */}
        <div className="row mb-2">
          {boxData.slice(0, 3).map((box, index) => (
            <div
              key={index}
              className="col-md-4 d-flex justify-content-center"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                className={`card ${
                  hoverIndex === index ? "hovered" : "default"
                }`}
              >
                <a
                  href={box.link || "#"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <span className="icon">
                    <svg
                      width="91"
                      height="96"
                      viewBox="0 0 91 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.97172 8.27299L71.4367 7.97072L71.6445 51.6036L79.5774 51.5658L79.3318 8.04589e-05L0 0.37793L0.453416 95.5754L44.0722 95.3677L44.0344 87.4348L8.34957 87.6048L7.97172 8.27299Z"
                        style={{
                          fill: hoverIndex === index ? "white" : "#0F1F3C",
                        }}
                      />
                      <path
                        d="M16 21.4619L64 21.4619"
                        stroke={hoverIndex === index ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="16"
                        y1="37.4619"
                        x2="56"
                        y2="37.4619"
                        stroke={hoverIndex === index ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="16"
                        y1="52.4619"
                        x2="40"
                        y2="52.4619"
                        stroke={hoverIndex === index ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="44.9634"
                        y1="75.5754"
                        x2="62.0104"
                        y2="90.4926"
                        stroke={hoverIndex === index ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="55.7271"
                        y1="90.842"
                        x2="87.6802"
                        y2="55.924"
                        stroke={hoverIndex === index ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                    </svg>
                  </span>
                  <p>{box.title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-md-2"></div>
          {boxData.slice(3).map((box, index) => (
            <div
              key={index}
              className="col-md-4 d-flex justify-content-center"
              onMouseEnter={() => setHoverIndex(index + 3)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                className={`card ${
                  hoverIndex === index + 3 ? "hovered" : "default"
                }`}
              >
                <a
                  href={box.link || "#"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <span className="icon">
                    <svg
                      width="91"
                      height="96"
                      viewBox="0 0 91 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.97172 8.27299L71.4367 7.97072L71.6445 51.6036L79.5774 51.5658L79.3318 8.04589e-05L0 0.37793L0.453416 95.5754L44.0722 95.3677L44.0344 87.4348L8.34957 87.6048L7.97172 8.27299Z"
                        style={{
                          fill: hoverIndex === index + 3 ? "white" : "#0F1F3C",
                        }}
                      />
                      <path
                        d="M16 21.4619L64 21.4619"
                        stroke={hoverIndex === index + 3 ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="16"
                        y1="37.4619"
                        x2="56"
                        y2="37.4619"
                        stroke={hoverIndex === index + 3 ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="16"
                        y1="52.4619"
                        x2="40"
                        y2="52.4619"
                        stroke={hoverIndex === index + 3 ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="44.9634"
                        y1="75.5754"
                        x2="62.0104"
                        y2="90.4926"
                        stroke={hoverIndex === index + 3 ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                      <line
                        x1="55.7271"
                        y1="90.842"
                        x2="87.6802"
                        y2="55.924"
                        stroke={hoverIndex === index + 3 ? "white" : "#0F1F3C"}
                        strokeWidth="9"
                      />
                    </svg>
                  </span>
                  <p>{box.title}</p>
                </a>
              </div>
            </div>
          ))}
          <div className="col-md-2"></div>
        </div>
      </div>

      <style>{`
        .kyc-container {
          max-width: 55%;
          margin: 8% auto;
          padding: 30px;
          border: 1px solid #ECECEC;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .card {
          width: 100%;
          padding: 30px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          border: none;
        }
        .card.default {
          background-color: #1d71b714;
          color: #1a1a1a;
        }
        .card.hovered {
          background-color: #164370;
          color: white;
        }
        .card .icon {
          font-size: 20px;
          margin-bottom: 10px;
          transition: fill 0.3s;
        }
        .card p {
          font-size: 16px;
          margin: 0;
        }
      `}</style>
    </div>
    </>
  );
};

export default NotaryType;
