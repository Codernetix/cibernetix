interface Props {
  setToggle: (a: boolean) => void;
  link: string;
  children: React.ReactNode;
}

export default function NavLink({ setToggle, link, children }: Props) {
  return (
    <li>
      <a href={link} onClick={() => setToggle(false)}>
        {children}
      </a>
    </li>
  );
}
