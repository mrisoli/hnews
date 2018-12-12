import Story from "../modules/stories/Story";

export default ({ stories }) => (
  <div className="container">
    {stories.map((s, key) => <Story key={key} story={s} />)}
  </div>
);
