//@flow

import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? '#0099ff' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#0099ff'};
  border: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  margin: 16px;
  font-size: 16px;
  padding: 12px 12px;
  border: 2px solid #0099ff;
  border-radius: 25px 25px 25px 25px;
`;

export default Button;