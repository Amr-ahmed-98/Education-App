import * as icons from './../../assets/icons/icons';
import * as images from './../../assets/images/images';
function About() {
   const message: string = "Hello TypeScript 🚀";

  console.log(message); // يطبع في الـ console
  return (
    <div>
      
      <h1>{message}</h1>
      <icons.Facebook />
      <img src={images.intructor1} alt="intructor1 " />
    </div>
  )
}

export default About