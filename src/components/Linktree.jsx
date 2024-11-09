import pfp from "../assets/avatar-jessica.jpeg";
import Links from "./Links";

const Linktree = () => {
  return (
    <div className="w-full max-w-[375px] md:max-w-[500px] bg-grey800 rounded-[10px] text-whitee py-7  text-center">
      <div className="flex justify-center items-center flex-col gap-3">
        <div>
          <img
            src={pfp}
            className="rounded-full w-[100px] h-[100px]"
            alt="profile-pic"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-whitee text-2xl font-bold">Jessica Randall</h1>
          <h2 className="text-green text-lg font-semibold">
            London, United Kingdom
          </h2>
        </div>
      </div>

      <p className="py-3">
        &#x201C;Front-end developer and avid reader&#x201D;
      </p>

      <div>
        <Links />
      </div>
    </div>
  );
};

export default Linktree;
