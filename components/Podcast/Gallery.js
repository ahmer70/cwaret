import Modal from "react-bootstrap/Modal";

import Image from 'next/image'






let nust = ["/image/nust/1.jpeg",
"/image/nust/2.jpeg",
"/image/nust/3.jpeg",
"/image/nust/4.jpeg",
"/image/nust/5.jpeg",
"/image/nust/6.jpeg",
"/image/nust/7.jpeg",
"/image/nust/8.jpeg"];
let mou = ["/image/mou/1.jpeg",
"/image/mou/2.jpeg",
"/image/mou/3.jpeg",
"/image/mou/4.jpeg",
"/image/mou/5.jpeg"];
let rt1 = [
  "/image/RT1/1.jpeg",
  "/image/RT1/2.jpeg",
  "/image/RT1/3.jpeg",
  "/image/RT1/4.jpeg",
  "/image/RT1/5.jpeg",
  "/image/RT1/6.jpeg",
  "/image/RT1/7.jpeg",
  "/image/RT1/8.jpeg",
  "/image/RT1/9.jpeg",
  "/image/RT1/10.jpeg",
];

let rt2 = [

  "/image/RT2/1.jpeg",
  "/image/RT2/2.jpeg",
  "/image/RT2/3.jpeg",
  "/image/RT2/4.jpeg",
  "/image/RT2/5.jpeg",
  "/image/RT2/6.jpeg",
  "/image/RT2/7.jpeg",
  "/image/RT2/8.jpeg",
  "/image/RT2/9.jpeg",
  "/image/RT2/10.jpeg",
  "/image/RT2/11.jpeg",
];

const Gallery = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Body>
          <div className="row">
            {show === "mou" &&
              mou.map((e,index) => (
                <div className="col-md-4 p-2 shadow border border-rounded bg-white" key={index}>
                  <Image
                    src={e}
                    alt="img"
                    height={250}
                    width={250}
                  />
                </div>
              ))}
            {show === "nust" &&
              nust.map((e,index) => (
                <div className="col-md-4 p-2 shadow border border-rounded bg-white" key={index}>
                  <Image
                    src={e}
                    alt="img"
                    height={250}
                    width={250}
                  />
                </div>
              ))}
            {show === "rt1" &&
              rt1.map((e,index) => (
                <div className="col-md-4 p-2 shadow border border-rounded bg-white" key={index}>
                  <Image
                    src={e}
                    alt="img"
                    height={250}
                    width={250}
                  />
                </div>
              ))}
            {show === "rt2" &&
              rt2.map((e,index) => (
                <div className="col-md-4 p-2 shadow border border-rounded bg-white" key={index}>
                  <Image
                    src={e}
                    alt="img"
                    height={250}
                    width={250}
                  />
                </div>
              ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
