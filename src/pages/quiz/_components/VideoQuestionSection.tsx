interface VideoQuestionSectionProps {
  signUrl: string;
}

const VideoQuestionSection: React.FC<VideoQuestionSectionProps> = ({
  signUrl,
}) => {
  return (
    <div className="flex w-[450px] flex-col items-center">
      {/* 이미지 placeholder */}
      <div className="flex h-[280px] w-[450px] items-center justify-center rounded-lg bg-textboxGray">
        <video
          src={signUrl}
          controls
          className="h-[280px] w-[450px] rounded-lg"
        >
          수어 영상을 불러오는 중...
        </video>
      </div>
    </div>
  );
};

export default VideoQuestionSection;
