import  Carousel from '../components/Carousel'
import Services from '../components/Services'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
import imageSix from '../images/imageSix.jpg'
import imageOne from '../images/imageOne.jpg'
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'
import About from '../components/About'


const Home = () => {
  return (
    <>
      <Carousel/>
      <About/>
  
    <Services left="fade-down-right" middle="fade-down" right="fade-down-left" textOne=" Adipisicing elit. Commodi mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  " textTwo="Commodi mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" textThree="Mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" titleOne="Ticketing" titleTwo="Hotel Reservation" titleThree="Flight Booking" imageFour={imageFour} imageFive={imageFive} imageSix={imageSix} title="Our Services"/>
    <Services left="fade-up-right" middle="fade-up" right="fade-up-left" textOne="Elit. Commodi mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" textTwo="Pisicing elit. Commodi doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" textThree="Lipsa on ground plain quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" titleOne="Review" titleTwo="Complaint" titleThree="Branches" imageFour={imageOne} imageFive={imageThree} imageSix={imageTwo}/>
    
    </>
  )
}

export default Home
