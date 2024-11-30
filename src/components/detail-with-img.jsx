import { ImgWrapper } from './atoms';

export function DetailWithImg({
  title,
  description,
  img,
  useBackgroundGlow = true,
}) {
  return (
    <div className="detail-with-img">
      <div className="txt-group">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
      <ImgWrapper
        className="img"
        useBackgroundGlow={useBackgroundGlow}
        src={img.src}
        alt={img.alt}
      />
    </div>
  );
}
