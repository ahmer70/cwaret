
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Home/Header'
import ServicesCard from '../components/Home/ServicesCard'
import Slider from '../components/Home/Slider'
import Card2 from '../components/Home/Card2'
import Expertise from '../components/Home/Expertise'
import Clients from '../components/Home/Clients'
import MainFooter from '../components/Home/MainFooter'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <>
      <Menu />
    <Header/>
<ServicesCard/>
     <Slider/>
     <Card2/>
     <Expertise/>
     <Clients/>
     <MainFooter/>
    </>
  )
}
