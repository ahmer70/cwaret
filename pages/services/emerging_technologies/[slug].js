import React from 'react'
import Menu from "../../../components/Menu";
import MainFooter from '../../../components/Home/MainFooter'
import ServiceDetails from '../../../components/Services/ServiceDetails';



const ET_DATA = [
  {
    id: "et1",
    title: "Big Data",
    logo: "/image/big-data.svg",
    image: "/image/3515462-min.png",
    para1:
      "Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software.",
    para2:
      "It is a term that describes large, hard-to-manage volumes of data – both structured and unstructured – that inundate businesses on a day-to-day basis. But it’s not the amount of data that’s important. It’s what organizations do with the data that matters. Big data can be analyzed for insights that lead to better decisions and strategic business moves. Organizations collect data from a variety of sources, including business transactions, smart (IoT) devices, industrial equipment, videos, social media and more.",
  },
  {
    id: "et2",
    title: "Internet of Things (IoT)",
    logo: "/image/noun_internet of things_1228694.svg",
    image: "/image/21841-min.png",
    para1:
      "The Internet of Things describes physical objects, that are embedded with sensors, processing ability, software, and other technologies, and that connect and exchange data with other devices and systems over the Internet or other communications networks.",
    para2:
      "The Internet of Things, or IoT, refers to the billions of physical devices around the world that are now connected to the internet, all collecting and sharing data. Thanks to the arrival of super-cheap computer chips and the ubiquity of wireless networks, it's possible to turn anything, from something as small as a pill to something as big as an airplane, into a part of the IoT. Connecting up all these different objects and adding sensors to them adds a level of digital intelligence to devices that would be otherwise dumb, enabling them to communicate real-time data without involving a human being. The Internet of Things is making the fabric of the world around us smarter and more responsive, merging the digital and physical universes.",
  },
  {
    id: "et3",
    title: "Machine Learning",
    logo: "/image/neural.svg",
    image: "/image/20945347.svg",
    para1:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.",
    para2:
      "Machine learning is an important component of the growing field of data science. Through the use of statistical methods, algorithms are trained to make classifications or predictions, uncovering key insights within data mining projects. These insights sequently drive decision making within applications and businesses, ideally impacting key growth metrics. As big data continues to expand and grow, the market demand for data scientists will increase, requiring them to assist in the identification of the most relevant business questions and sequently the data to answer them.",
  },
  {
    id: "et4",
    title: "Healthcare",
    logo: "/image/cardiogram.svg",
    image: "/image/healthcare Vector-min.png",
    para1:
      "Now your patients well and organize your appointments in advance by incorporating best healthcare practices. Ensure timely and correct procedure through a well-organized software that will help in diagnosis keeping in view the patient medical history and previous carried out operational procedures.",
  },
];
const Slug = ({data}) => {

  return (
    <>      <Menu bggray={true} />
    <div className="container-md mb-5">
      <div className="row m-0 p-0  mt-4">
        <div className="col-md-5 p-0 m-0">
          <h1 className="gradientHeading">Services</h1>
          <h3>Grow your business with innovative software solutions.</h3>
          <h5 className="text-secondary">
            End to end consultancy and software development.
          </h5>
        </div>
      </div>
    </div>
    <div className="container-md my-5">
     <ServiceDetails data={data&&data.length>0&&data[0]} />
    </div>
    <MainFooter/>
    </>
  )
}
export  function getServerSideProps({params}) {
  const { slug }=params

  
  let data=ET_DATA.filter(e=>e.id===slug)
  return {
    props: {data}, 
  }
}
export default Slug