export function ImgWrapper({
  src,
  alt,
  className,
  useBackgroundGlow = false,
}) {
  const imgWrapperClsName = useBackgroundGlow
    ? `image-wrapper ${className}`
    : `image-wrapper without-glow ${className}`;
  return (
    <div className={imgWrapperClsName}>
        <img src={src} alt={alt} />
      </div>
  )
}
