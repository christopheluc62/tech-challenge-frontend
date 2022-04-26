import StyledHeader from './styledComponents/Sheader';

function Header() {
  return (
    <StyledHeader>
      <div className='header'>
        <img className='logo' src='../logowild.png' alt='logowild' />
        <div className='title'>Les Argonautes</div>
      </div>
    </StyledHeader>
  );
}

export default Header;
