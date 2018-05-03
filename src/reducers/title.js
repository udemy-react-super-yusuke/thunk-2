const title = (state = "test title", action) => {
  switch (action.type) {
    // title を変更するアクションを受ける
    case "CHANGE_TITLE":
      return action.payload.title;

    // title を wait にするアクションを受ける
    case "WAIT":
      return "Wait";

    default:
      return state;
  }
};

export default title;
