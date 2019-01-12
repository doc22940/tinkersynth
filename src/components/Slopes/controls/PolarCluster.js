// @flow
import React, { useContext } from 'react';
import styled from 'styled-components';

import { UNIT } from '../../../constants';

import { SlopesContext } from '../SlopesState';
import { InstrumentCluster } from '../../ControlPanel';
import SliderVideoControl from '../../SliderVideoControl';
import TouchSliderIconControl from '../../TouchSliderIconControl';
import PolarAmountVisualization from './PolarAmountVisualization';
import BallSizeVisualization from './BallSizeVisualization';
import OmegaVisualization from './OmegaVisualization';
import SplitUniverseVisualization from './SplitUniverseVisualization';
import SliderIconControl from '../../SliderIconControl';
import Spacer from '../../Spacer';

type Props = {
  width: number,
};

const PolarCluster = ({ width }: Props) => {
  const slopesParams = useContext(SlopesContext);

  const innerWidth = width - UNIT * 2 - 2;

  const sliderHeight = 164;

  const polarHoleSliderWidth = 32;
  const polarHoleSliderPadding = 4;

  const videoSliderWidth = innerWidth - polarHoleSliderWidth - UNIT;

  return (
    <InstrumentCluster direction="column">
      <Row>
        <SliderVideoControl
          value={slopesParams.polarAmount}
          updateValue={slopesParams.setPolarAmount}
          width={videoSliderWidth}
          height={sliderHeight}
          spacing={15}
          visualizationComponent={PolarAmountVisualization}
        />

        <Spacer size={UNIT} />

        <SliderIconControl
          width={polarHoleSliderWidth}
          height={sliderHeight}
          padding={polarHoleSliderPadding}
          value={slopesParams.ballSize}
          updateValue={slopesParams.setBallSize}
          visualizationComponent={BallSizeVisualization}
          numOfNotches={14}
          isDisabled={slopesParams.disabledParams.ballSize}
        />
      </Row>

      <Spacer size={UNIT} />

      <Row>
        <TouchSliderIconControl
          value={slopesParams.omega}
          updateValue={slopesParams.setOmega}
          width={innerWidth}
          height={40}
          visualizationComponent={OmegaVisualization}
        />
      </Row>

      <Spacer size={UNIT} />

      <Row>
        <TouchSliderIconControl
          value={slopesParams.splitUniverse}
          updateValue={slopesParams.setSplitUniverse}
          width={innerWidth}
          height={40}
          visualizationComponent={SplitUniverseVisualization}
        />
      </Row>
    </InstrumentCluster>
  );
};

const Row = styled.div`
  display: flex;
`;

// $FlowIgnore
export default React.memo(PolarCluster);
