import create from 'zustand';

const loginStore = create((set) => ({
  isSubmitting: false,
  succesSubmitted: false,
  errorSubmitting: undefined,
  submitLogin: (name, email) => {
    try{
      set({ isSubmitting: true });
      /* Se simula funcion asíncrona */
      setTimeout(() => {
        localStorage.setItem("@superhero-isAuth", "true");
        localStorage.setItem("@superhero-data", JSON.stringify({
          name,
          email
        }));

        set({ isSubmitting: false, succesSubmitted: true });

        /* throw new Error(); //Utilidad de javascript para similar el envío de un error */
      }, 3000);
    } catch (error) {
      set({ successSubmitted: false, errorSubmitting: error});
    }

  },
}));

export default loginStore;