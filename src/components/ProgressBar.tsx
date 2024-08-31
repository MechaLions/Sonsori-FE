import styled, { keyframes } from "styled-components";
import React from "react";

interface ProgressBarProps {
  percent: number; // 진행률 (0 ~ 1)
  width?: string; // 그래프의 너비
  height?: string; // 그래프의 높이
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  width = "60%",
  height = "25px",
}) => {
  const fillWidth = `${percent * 100}%`; // 0~1 범위의 percent를 백분율로 변환
  const backgroundColor = "#E1E1E1";
  const progressColor = "#0169F4";

  return (
    <div className="flex items-center justify-center gap-9">
      <p className="text-xl font-semibold text-brand">해결한 문제수</p>
      <ProgressContainer
        $width={width}
        $height={height}
        $backgroundColor={backgroundColor}
      >
        <ProgressFill
          $width={fillWidth}
          $progressColor={progressColor}
          $height={height}
        />
      </ProgressContainer>
    </div>
  );
};

export default ProgressBar;

const ProgressContainer = styled.div<{
  $width: string;
  $height: string;
  $backgroundColor: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 10px;
  overflow: hidden;
`;

const fillAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: $percent; 
  }
`;

const ProgressFill = styled.div<{
  $width: string;
  $progressColor: string;
  $height: string;
}>`
  width: ${({ $width }) => $width};
  height: 100%;
  background: ${({ $progressColor }) => $progressColor};
  border-radius: ${({ $height }) => `${parseInt($height, 10) / 2}px`};
  animation: ${fillAnimation} 2s ease forwards;
  transition: width 0.3s ease;
`;
