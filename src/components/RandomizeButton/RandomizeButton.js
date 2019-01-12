import React from 'react';
import styled from 'styled-components';

import warningSrc from '../../images/warning.png';

import BigRedButton from '../BigRedButton';

const RandomizeButton = ({ onClick }) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${warningSrc})` }}>
      <InnerWrapper>
        <BigRedButton onClick={onClick} />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 54px;
  height: 54px;
  padding: 5px;
  background-size: cover;
  border-radius: 4px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RandomizeButton;