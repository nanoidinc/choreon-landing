export function CtaBtn({ action }) {
  return (
    <a className="btn" target="_blank" href={action.href}>
      {action.text}
    </a>
  );
}
