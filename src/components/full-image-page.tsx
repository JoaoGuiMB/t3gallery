import { getMyImage } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);
  return (
    <div className="w- flex h-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />;
      </div>

      <div className="w-48 flex-shrink-0 flex-col border-l-2">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
