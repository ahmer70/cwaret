import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Menu.module.css";

const ServicesList = () => {
  const [Items, setItems] = useState(null);
  const [ES, setES] = useState(null);
  const [ET, setET] = useState(null);
  const [CS, setCS] = useState(null);
  const SD_DATA = [
    {
      id: "/software_development/sd1",
      title: "Custom Software Solutions",
      image: "/image/servicesicons/layers.svg",
      hImage: "/image/servicesicons/layers-1.svg",
    },
    {
      id: "/software_development/sd2",
      title: "UI/UX Design",
      image: "/image/servicesicons/ux-design-1.svg",
      hImage: "/image/servicesicons/ux-design.svg",
    },
    {
      id: "/software_development/sd3",
      title: "Product Visualization and Strategy",
      image: "/image/servicesicons/product-1.svg",
      hImage: "/image/servicesicons/product.svg",
    },
    {
      id: "/software_development/sd4",
      title: "QA & Testing",
      image: "/image/servicesicons/Group 6068.svg",
      hImage: "/image/servicesicons/Group -1.svg",
    },
    {
      id: "/software_development/sd5",
      title: "Embedded Development",
      image: "/image/servicesicons/rise-1.svg",
      hImage: "/image/servicesicons/rise.svg",
    },

    {
      id: "/software_development/sd6",

      title: "Dev Ops Practice",
      image: "/image/servicesicons/web-development-1.svg",
      hImage: "/image/servicesicons/web-development.svg",
    },
  ];
  const ES_DATA = [
    {
      id: "/enterprise_solutions/es1",
      title: "Oracle Cloud Infrastructure",
      image: "/image/servicesicons/network-1.svg",
      hImage: "/image/servicesicons/network.svg",
    },
    {
      id: "/enterprise_solutions/es2",
      title: "Siebel CRM",
      image: "/image/servicesicons/CRM.svg",
      hImage: "/image/servicesicons/CRM-1.svg",
    },
    {
      id: "/enterprise_solutions/es3",
      title: "MySQL",
      image: "/image/servicesicons/mysql-1.svg",
      hImage: "/image/servicesicons/mysql.svg",
    },
    {
      id: "/enterprise_solutions/es4",
      title: "Oracle Data Integrator",
      image: "/image/servicesicons/computer.svg",
      hImage: "/image/servicesicons/computer-1.svg",
    },

    {
      id: "/enterprise_solutions/es5",
      title: "Business Process Outsourcing",
      image: "/image/servicesicons/engineering-1.svg",
      hImage: "/image/servicesicons/engineering.svg",
    },
  
  ];

  const ET_DATA = [
    {
      id: "/emerging_technologies/et1",
      title: "Big Data",
      image: "/image/servicesicons/big-data.svg",
      hImage: "/image/servicesicons/big-data-1.svg",
    },
    {
      id: "/emerging_technologies/et2",
      title: "Internet of Things (IoT)",
      image: "/image/servicesicons/iot-1.svg",
      hImage: "/image/servicesicons/iot.svg",
    },
    {
      id: "/emerging_technologies/et3",
      title: "Machine Learning",
      image: "/image/servicesicons/neural-1.svg",
      hImage: "/image/servicesicons/neural.svg",
    },
    {
      id: "/emerging_technologies/et4",
      title: "Healthcare",
      image: "/image/servicesicons/cardiogram.svg",
      hImage: "/image/servicesicons/cardiogram-1.svg",
    },
  ];

  const CON_DATA = [
    {
      id: "/consultancy/con1",
      title: "Product Visualization & Strategy",
      image: "/image/servicesicons/supply-chain-1.svg",
      hImage: "/image/servicesicons/supply-chain.svg",
    },
    {
      id: "/consultancy/con2",
      title: "Digital Transformation",
      image: "/image/servicesicons/network-connection-1.svg",
      hImage: "/image/servicesicons/network-connection.svg",
    },
    {
      id: "/consultancy/con3",
      title: "Digital Discovery Workshop ",
      image: "/image/servicesicons/ddw-1.svg",
      hImage: "/image/servicesicons/ddw.svg",
    },
  ];

  return (
    <div className={`${style.ServicesList} p-4 `} style={{ overflow: "auto" }}>
      <div>
        <h5 style={{ color: "#000460" }} className="text-start">
          Software Development
        </h5>
        <div className="row m-0">
          {SD_DATA.map((e, index) => (
            <div className="col-md-3 " key={index}>
              <div
                href={e.id}
                className={`rounded  ${style.servicelink}`}
                onMouseEnter={() => setItems({ [index]: true })}
                onMouseLeave={() => setItems(null)}
              >
                <Link
                  href={`/services${e.id}`}
                  className={`text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`}
                >
                  <Image
                    src={Items && Items[index] ? e.hImage : e.image}
                    width={35}
                    height={35}
                    alt={e.title}
                    className="mb-2"
                  />
                  <p
                    style={{ fontSize: "12px" }}
                    className={
                      Items && Items[index] ? "text-white" : "text-secondary"
                    }
                  >
                    {e.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 style={{ color: "#000460" }} className="text-start">
          Enterprise Solutions
        </h5>

        <div className="row m-0">
          {ES_DATA.map((e, index) => (
            <div className="col-md-3" key={index}>
              <div
                className={`rounded  ${style.servicelink}`}
                onMouseEnter={() => setES({ [index]: true })}
                onMouseLeave={() => setES(null)}
              >
                <Link
                  href={`/services${e.id}`}
                  className={`text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`}
                >
                  <Image
                    src={ES && ES[index] ? e.hImage : e.image}
                    width={35}
                    height={35}
                    alt={e.title}
                    className="mb-2"
                  />
                  <p
                    style={{ fontSize: "12px" }}
                    className={
                      ES && ES[index] ? "text-white" : "text-secondary"
                    }
                  >
                    {e.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 style={{ color: "#000460" }} className="text-start">
          Emerging Technologies
        </h5>

        <div className="row m-0">
          {ET_DATA.map((e, index) => (
            <div
              className="col-md-3"
              key={index}
              onMouseEnter={() => setET({ [index]: true })}
              onMouseLeave={() => setET(null)}
            >
              <div className={`rounded  ${style.servicelink}`}>
                <Link
                  href={`/services${e.id}`}
                  className={`text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`}
                >
                  <Image
                    src={ET && ET[index] ? e.hImage : e.image}
                    width={35}
                    height={35}
                    alt={e.title}
                    className="mb-2"
                  />
                  <p
                    style={{ fontSize: "12px" }}
                    className={
                      ET && ET[index] ? "text-white" : "text-secondary"
                    }
                  >
                    {e.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 style={{ color: "#000460" }} className="text-start">
          Consultancy
        </h5>

        <div className="row m-0">
          {CON_DATA.map((e, index) => (
            <div
              className="col-md-3 "
              key={index}
              onMouseEnter={() => setCS({ [index]: true })}
              onMouseLeave={() => setCS(null)}
            >
              <div className={`rounded  ${style.servicelink}`}>
                <Link
                  href={`/services${e.id}`}
                  className={`text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`}
                >
                  <Image
                    src={CS && CS[index] ? e.hImage : e.image}
                    width={35}
                    height={35}
                    alt={e.title}
                    className="mb-2"
                  />
                  <p
                    style={{ fontSize: "12px" }}
                    className={
                      CS && CS[index] ? "text-white" : "text-secondary"
                    }
                  >
                    {e.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
