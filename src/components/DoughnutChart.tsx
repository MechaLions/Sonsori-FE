import styled, { keyframes } from "styled-components";
import React from "react";

interface DoughnutChartProps {
  percent: number;
  size?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  percent,
  size = "44px",
}: DoughnutChartProps) => {
  const radius = 63;

  return (
    <Chart size={size}>
      <AniSvg viewBox="0 0 200 200">
        <CircleWithShadow
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#F7595D"
          strokeWidth="40"
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#4CC764"
          strokeWidth="40"
          strokeDasharray={`${2 * Math.PI * radius * percent} ${
            2 * Math.PI * radius * (1 - percent)
          }`}
          strokeDashoffset={2 * Math.PI * radius * 0.25}
        />
      </AniSvg>
    </Chart>
  );
};

export default DoughnutChart;

const Chart = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const AniSvg = styled.svg`
  position: relative;
`;

// Keyframe for the animation of the circle's stroke-dasharray
const circleFill = keyframes`
  0% {
    stroke-dasharray: 0 ${2 * Math.PI * 63};
  }
`;

const AnimatedCircle = styled.circle`
  animation: ${circleFill} 2s ease;
`;

// Applying shadow to the circle
const CircleWithShadow = styled.circle`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
`;
