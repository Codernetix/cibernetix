interface Props {
  imagen: string;
  imgdesc: string;
  titulo: string;
  descripcion: string;
  gridPosition?: string;
}

export default function WorkGalleryCard({ imagen, imgdesc, titulo, descripcion}: Props) {
  return (
    <div className={`flex flex-col items-center p-4 gap-2}`}>
      <img src={imagen} alt={imgdesc} className="w-[150px]" />
      <h3 className="text-2xl uppercase font-bold">{titulo}</h3>
      <p className="text-lg text-justify md:px-16 pt-6">
        {descripcion}
      </p>
    </div>
  );
}
