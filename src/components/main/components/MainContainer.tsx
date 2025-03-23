interface Props {
  children: React.ReactNode;
}

export default function MainContainer({ children }: Props) {
  return (
    <main className="mt-2 w-full flex flex-col gap-2 justify-center items-center select-none">
      {children}
    </main>
  );
}

