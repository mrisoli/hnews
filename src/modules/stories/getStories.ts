import firebaseApi from "../api/api";
import formatItem from "../items/formatItem";
import {StoryList} from "./types";

export default async (type = "topstories", { page= 1, max= 30 } = {}): Promise<StoryList> => {
  const api = await firebaseApi();
  const start = max * (page - 1);
  const end = start + max;
  const ids = await api
    .child(type)
    .once("value");
  const stories = await Promise.all(
    ids.val().slice(start, end).map((id) => api
      .child("item")
      .child(id)
      .once("value"),
    ),
  );
  return stories.map((s) => formatItem(s.val()));
};
