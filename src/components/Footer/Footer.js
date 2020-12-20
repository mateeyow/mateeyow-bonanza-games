import './footer.scss'

const Footer = () => (
  <footer className='footer'>
    <div className='container footer-items'>
      <a href='/'>Logo here</a>
      <ul className='footer-links'>
        <li><strong>Contact Us</strong></li>
        <li><a href='/'>Help Centre</a></li>
        <li><a href='/'>The Group</a></li>
        <li><a href='/'>Affiliates</a></li>
      </ul>
      <ul className='footer-links'>
        <li><strong>Information</strong></li>
        <li><a href='/'>Terms & Conditions</a></li>
        <li><a href='/'>Payment methods</a></li>
        <li><a href='/'>Bonus Terms</a></li>
        <li><a href='/'>Responsible Gaming</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer
