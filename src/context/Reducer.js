export const initialState = {
  all: [],
  filtered: [],
  activeFilter: "All",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return { ...state, all: action.payload, };
    case "SET_FILTER":
      const filter = action.payload;
      if (filter === "All")
        return { ...state, filtered: state.all, activeFilter: "All" };
      const filtered = state.all.filter((p) => p.tags.includes(filter));
      return { ...state, filtered, activeFilter: filter };
    case "RESET_FILTER":
      return { ...state, filtered: state.all, activeFilter: "All" };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default reducer;