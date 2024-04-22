import { getMyImage } from "~/server/db/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getMyImage(parseInt(photoId));
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
