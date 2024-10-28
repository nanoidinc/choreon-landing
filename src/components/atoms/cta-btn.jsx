export function CtaBtn({ action }) {
  return (
    <a className="btn" href={action.href}>
      {action.text}
    </a>
  );
}
