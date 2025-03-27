interface Props {
    imageUrl: string;
  }

export default function OfferedItem({imageUrl} : Props) {
  return (
    <div className={`rounded-lg bg-[${imageUrl}] bg-center bg-[auto_250px] bg-no-repeat hover:bg-none transition-all duration-300 text-[40px] text-[rgba(255,255,255,0)] hover:text-black font-bold hover:[text-shadow:_0px_0px_16px_#fff] flex justify-center items-center`}>
      <p className=" text-center">
        Invertir con nosotros es tu estrategia segura.
      </p>
    </div>
  );
}
