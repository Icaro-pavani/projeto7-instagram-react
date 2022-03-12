import Link from "./Link";
import Links from "./Links";

export default function PostBottom() {
  const icones = [
      {class: "post-icon", name: "heart-outline"},
      {class: "post-icon", name: "chatbubble-outline"},
      {class: "post-icon", name: "paper-plane-outline"}
  ];
  return (
      <div class="post-bottom">
        <div class="icon-left">
          <Links icones={icones} />
        </div>
        <Link type="icon" class="post-icon" name="bookmark-outline" />
      </div>
  );
}