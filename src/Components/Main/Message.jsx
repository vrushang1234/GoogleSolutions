export default function Message(prop) {
  return (
    <div>
      <div className={prop.type} id="message">
        {prop.msg}
      </div>
    </div>
  );
}
