import React from "react";
import Link from "next/link";
import Image from "next/image";
const LeftPanel = () => {
  return (
    <>
      <div className="position-absolute p-2" style={{zIndex:1}}>
      <Link href="/">
 
          <Image
            src={"/image/cware-logo.png"}
            width={120}
            height={90}
            alt={"logo"}
            className="w-100"
       
          />
     
      </Link>
      </div>

      <Image src="/image/contact.jpg" width={600}    className="w-100 " height={655} alt="contact-img" />
    </>
  );
};

export default LeftPanel;
