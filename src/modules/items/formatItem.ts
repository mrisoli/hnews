import {IStory} from "../stories/types";
import {IItem} from "./types";

export default (item: IItem): IStory => {
  return {
    comments: item.kids || {},
    commentsCount: item.descendants,
    date: new Date(item.time * 1000),
    id: item.id,
    score: item.score,
    text: item.text,
    title: item.title,
    url: item.url,
    user: item.by,
  };
};
