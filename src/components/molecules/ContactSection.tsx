import {FaInstagramSquare , FaWhatsappSquare , FaLinkedin , IoLogoFacebook } from '../../assets/icons/icons'
const ContactSection = () => {
  return (
    // Container of Contact Details and Social Icons
    <div>
      {/* Contact Details */}
      <div>
        {/* main title */}
        <div>
          <h2>
            We're Always
            <span className='text-[var(--color-secondary)]'>Eager to</span>
            <span className='text-[var(--color-primary)]'>Hear From You!</span>
          </h2>
        </div>
        {/* Address , Email , Phone */}
        <div>
          <div>
            <h3>Address</h3>
            <p>Studio 76d, Riley Ford, North Michael chester, CF99 6QQ</p>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto:edublink@example.com">edublink@example.com</a>
          </div>
          <div>
            <h3>Phone</h3>
            <a href="tel:+0914135548598">(+091) 413 554 8598</a>
          </div>
        </div>
        {/* Social Icons */}
        <div>
          <FaInstagramSquare />
          <FaWhatsappSquare />
          <FaLinkedin />
          <IoLogoFacebook />
        </div>
      </div>
      {/* Contact Form */}
      <div>
        
      </div>
    </div>
  );
};

export default ContactSection;
