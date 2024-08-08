import imageThree from '../images/imageThree.jpg'
import '../css/about.css' 

const About = () => {
  return (
    <div className='about-overall-container'>
      <div className='about-container'>
        <div>
            <img src={imageThree} alt="about us" />
        </div>
        <div className='about-text-container'>
            <h2>About Us</h2>
            <p>Lorem ipsum, dssolor sit amet consectetur adipisicing elit. Deleniti dolore unde similique vitae magnam, quas, saepe, dicta laboriosam blanditiis repellendus voluptatem itaque natus mollitia aperiam! Iusto nisi enim ab voluptatum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eius sequi error ducimus tenetur nam eum doloremque odit facere reiciendis accusamus fugiat sunt esse quas voluptatem eligendi, ea ex cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat ad repudiandae eveniet aspernatur nulla ut reiciendis delectus, reprehenderit mollitia est qui exercitationem nam iure unde molestiae nihil provident eius.</p>
        </div>
      </div>
    </div>
  )
}

export default About
