export const isAuthSel = state => state.loginReducer.isAuth;
export const isCheckingAuthSel = state => state.loginReducer.isCheckingAuth;
export const isSendingAuthFormSel = state => state.loginReducer.isSendingAuthForm;
export const isSuccessLoginSel = state => state.loginReducer.isSuccessLogin;

export const isFetichingSuperheroesSel = state => state.superheroReducer.isFetchingSuperheroes;
export const superheroesErrorSel = state => state.superheroReducer.error;
export const superheroesSel = state => state.superheroReducer.superheroes;