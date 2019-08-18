import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const {Context, Provider} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
)