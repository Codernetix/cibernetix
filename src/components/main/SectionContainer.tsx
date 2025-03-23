interface Props {
  children: React.ReactNode;
  custom: string;
}
export default function SectionContainer({ children, custom }: Props) {
  return (
    <div className={`w-[98vw] rounded-xl ${custom}`}>{children}</div>
  );
}
