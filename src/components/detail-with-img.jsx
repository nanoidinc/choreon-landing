export function DetailWithImg({
  title,
  description,
  img,
  useBackgroundGlow = true,
}) {
  const imgWrapperClsName = useBackgroundGlow
    ? 'img-wrapper'
    : 'img-wrapper without-glow';
  return (
    <div className="detail-with-img">
      <div className="txt-group">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
      <div className={imgWrapperClsName}>
        <img className="img" src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}
