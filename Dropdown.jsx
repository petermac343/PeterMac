import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import about from '/about.svg';
import web from '/web.svg';
import user from '/pp.png';
import work from '/work.svg';
import review from '/review.svg';
import contact from '/contact.svg';
import logout from '/custom.svg';

const Container = styled.div`

`;

const App = styled.div`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #242526; */
  z-index: 4;
  /* position: relative; */
`;

const MenuContainer = styled.div`
right: 40px;
height: 11vh;
width: 300px;
  position: relative;
  position: fixed;
  z-index: 4;
  overflow-y: ${(props) => (props.isActive ? 'auto' : 'hidden')};//this added
  &::before {
    content: '';
    /* position: relative; */
  }

  &.active {
height: 80vh;
overflow-y: auto; /* Enable scrolling when active */
  }

  &.inactive {
    /* top: 10px; */
height: 70px;
  }
  @media (max-width: 768px)  {
      height: 60vh;
    }
`;

const MenuTrigger = styled.div`
z-index: 3;
position: fixed;
position: absolute;
  top: 10px;
  right: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  object-fit: cover;
  /* background-image: url('pp.png'); */
  /* background-color: #ff0000; */
  img{
    height: 50px;
    width: 50px;
  }
  @media (max-width: 768px) {
    right: 10px;
    height: 40px;
    width: 40px;
    img{
    height: 40px;
    width: 40px;
  }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 65px;
  right: 30px;
  background-color: #406e7eb8;
  border-radius: 8px;
  padding: 10px 20px;
  width: 180px;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background: #fff;
    transform: rotate(45deg);
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
  }

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
  }
`;

const Heading = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2rem;
  color: black;

  span {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 0;
  /* border: 1px solid black; */
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);

  &:hover a {
    color: rgb(253, 253, 253);
    cursor: pointer;
  }

  &:hover img {
    opacity: 1;
    cursor: pointer;
  }
`;

const DropdownItemLink = styled.a`
  max-width: 100px;
  margin-left: 10px;
  text-decoration: none;
  transition: 500ms;
`;

const DropdownItemImage = styled.img`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 500ms;
`;

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <Container>
      <App>
        <MenuContainer ref={menuRef} className={open ? 'active' : 'inactive'}>
          <MenuTrigger onClick={() => setOpen(!open)}>
            <img src="pp.png" alt="user" />
            {/* <img src={user} alt="User" /> */}
          </MenuTrigger>

          <DropdownMenu className={open ? 'active' : 'inactive'}>
            <Heading>
              Peter...<br />
              <span>Web developer</span>
            </Heading>
            <ul>
              <DropdownItem>
                <DropdownItemImage src={user} alt="My Profile" />
                <DropdownItemLink href='#intro' >Home</DropdownItemLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownItemImage src={about} alt="AboutMe" />
                <DropdownItemLink href='#about'>About Me</DropdownItemLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownItemImage src={web} alt="Works" />
                <DropdownItemLink href='#works'>Works</DropdownItemLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownItemImage src={work} alt="Portfolio" />
                <DropdownItemLink href='#portfolio'>Portfolio</DropdownItemLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownItemImage src={review} alt="Review" />
                <DropdownItemLink href='#testimonials'>Reviews</DropdownItemLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownItemImage src={contact} alt="contact" />
                <DropdownItemLink href='#contact'>Contact</DropdownItemLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownItemImage src={logout} alt="Logout" />
                <DropdownItemLink href='#cv'>Resume</DropdownItemLink>
              </DropdownItem>
            </ul>
          </DropdownMenu>
        </MenuContainer>
      </App>
    </Container>
  );
};

export default Dropdown;
