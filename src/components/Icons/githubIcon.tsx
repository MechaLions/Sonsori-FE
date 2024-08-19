import githubImage from "@/assets/githubIcon.png";

const URL = `${import.meta.env.VITE_GITHUB_URL}`;

const GithubIcon = () => {
  return (
    <div
      className="flex items-center justify-center hover:cursor-pointer"
      onClick={() => window.open(URL)}
    >
      <img
        src={githubImage}
        className="h-auto w-12"
        loading="lazy"
        alt="github"
      />
    </div>
  );
};

export default GithubIcon;
