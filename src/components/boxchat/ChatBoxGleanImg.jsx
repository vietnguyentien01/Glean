import "./boxchat.css";

export default function ChatBoxGleanImg({ isBoxShow }) {
  return (
    <div className="boxchat-img_name">
      <div
        className="boxchat-img_name_content"
        onClick={() => isBoxShow()}
      >
        <h1>M</h1>
      </div>
    </div>
  );
}
