import useWindowDimensions from '../hooks/use-window-dimensions';

export function Spacer({ type = 'subsection', amount = null }) {
  const { width } = useWindowDimensions;

  if (amount) {
    return <div style={{ height: `${amount}px` }}></div>;
  }

  if (width > 768) {
    return type === 'subsection' ? (
      <div style={{ height: '80px' }}></div>
    ) : (
      <div style={{ height: '120px' }}></div>
    );
  }

  return type === 'subsection' ? (
    <div style={{ height: '48px' }}></div>
  ) : (
    <div style={{ height: '5px' }}></div>
  );
}
