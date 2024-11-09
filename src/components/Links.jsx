import links from ".";

const Links = () => {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index} className="bg-grey700 w-[80%] m-auto py-[10px] rounded-md cursor-pointer">
            <a href={link.link} className="text-whitee text-[14px] font-semibold">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
