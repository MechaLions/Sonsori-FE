import ReplayIcon from "@/components/Icons/ReplayIcon";

const VideoQuestionSection = () => {
  return (
    <div className="flex w-[450px] flex-col items-center">
      {/* 이미지 placeholder */}
      <div className="flex h-[280px] w-[450px] items-center justify-center rounded-lg bg-textboxGray">
        <p className="text-center text-[30px] font-semibold text-brand">
          문제 수어 영상
        </p>
      </div>
      {/* 다시하기 아이콘 placeholder */}
      <div className="mt-5 flex gap-[30px] space-x-2">
        <ReplayIcon />
      </div>
    </div>
  );
};

export default VideoQuestionSection;
