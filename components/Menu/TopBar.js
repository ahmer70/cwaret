import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style  from './Menu.module.css'

const TopBar = () => {
  return (
    <div>
          <div className="d-flex justify-content-between align-items-center">
        <div>
        <Link href="/">
        
          <Image
            src={"/image/cware-logo.png"}
            width={120}
            height={90}
            alt={"logo"}
          />
       
      </Link>
        </div>
        <div className={`${style.contactusdiv} `}>
          <Link href="/contact" className={`${style.contactusbtn} text-decoration-none`}>
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar