export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
// console.log(999);
// console.log(selectToken);