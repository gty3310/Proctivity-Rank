export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
