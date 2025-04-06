interface Props {
  setToggle: (a: boolean) => void;
  link: string;
  children: React.ReactNode;
}

import { Link } from "react-router-dom";


export default function NavLink({ setToggle, link, children }: Props) {
  return (
    <li>
      <Link to={link} onClick={() => setToggle(false)}>
        {children}
      </Link>
    </li>
  );
}
