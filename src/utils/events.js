export const showAuthModal = (mode = "login") => {
  document.dispatchEvent(new CustomEvent("showAuthModal", { detail: mode }));
};
