interface Props {
  imageUrl: string;
  text: string;
}

export default function OfferedItem({ imageUrl, text }: Props) {
  return (
    <div
      className={`${imageUrl} h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-lg bg-center bg-[auto_150px] md:bg-[auto_250px] bg-no-repeat hover:bg-none transition-all duration-300 text-2xl text-[rgba(255,255,255,0)] hover:text-black font-bold hover:[text-shadow:_0px_0px_16px_#fff] flex justify-center items-center`}
    >
      <p className="text-center">{text}</p>
    </div>
  );
}
