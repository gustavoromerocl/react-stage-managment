import create from 'zustand';

const loginStore = create((set) => ({
  isSubmitting: false,
  succesSubmitted: false,
  errorSubmitting: undefined,
  submitLogin: (name, email) => {
    try{
      set({ isSubmitting: true });
      localStorage.setItem("@superhero-isAuth", "true");
      localStorage.setItem("@superhero-data", JSON.stringify({
        name,
        email
      }));
      set({ isSubmitting: false, successSubmitted: true });
    } catch (error) {
      set({ successSubmitted: false, errorSubmitting: error});
    }

  },
}));

export default loginStore;