import logo from '../assets/logo.png';

const Header = () => (
  <header className="header">
    <div style={{fontSize: '25px', display: 'inline-flex', textAlign: 'center', justifyContent: 'center', paddingLeft: '15px' }}>
      <h1 style={{ marginTop: '10px'}}>UCM &ensp;</h1>
      <img className='img_logo' src={logo} alt="Logo" />
    </div>

    <div style={{textAlign: 'center', marginTop: '-25px'}}>
      <h2>Student Atmosphere Dashboard</h2>
    </div>
  </header>
);

export default Header;