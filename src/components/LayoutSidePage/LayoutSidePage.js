import React from 'react';
import styled from 'styled-components';

import { UNIT } from '../../constants';

import Layout from '../Layout';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import PageHeader from '../PageHeader';

const LayoutSidePage = ({ title, children }) => {
  return (
    <Layout>
      <Wrapper maxWidth="1000px">
        <PageHeader>{title}</PageHeader>

        {children}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: ${UNIT * 16}px;
`;

export default LayoutSidePage;