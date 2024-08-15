import GithubIcon from "@/components/Icons/githubIcon";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between bg-[#0B1F40] px-16 pb-20 pt-36 text-[18px] font-light leading-tight text-white">
      <section>
        <h1 className="uppercase">@ 2024 sonsori all rights reserved</h1>
        <br />
        <p>Background Image Designed by Freepik</p>
        <p>Logo and Icon Components Designed by Canva</p>
      </section>
      <section className="flex flex-col gap-7">
        <div className="flex items-center justify-end gap-8">
          <h1>Project Available in Github</h1>
          <GithubIcon />
        </div>
        <div className="flex gap-7">
          <p>Contributors</p>
          <p>
            메카라이언즈
            <br />
            강민희 곽민재 정연채 손수빈
          </p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
