interface Props {
  children: React.ReactNode;
}

export default function GridGallery({ children }: Props) {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-2 p-8 gap-8">
      {children}
    </div>
  );
}
