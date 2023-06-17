import React from 'react';
import styled from 'styled-components';


const Listitems =styled.li`
    font-size: 13px;
    margin-right: 50px;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;

    &.active{
    background-color: #0084f7;
}
`;

const Port = ({ id, title, active, setSelected }) => {
  return <Listitems 
  className={active ? "port active": "portfolio"}
  onClick={()=> setSelected(id)} >
    {title}
    </Listitems>;
};

export default Port;
