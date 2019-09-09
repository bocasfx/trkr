const closeMenu = () => ({
  type: 'CLOSE_MENU',
});

const toggleMenu = isOpen => ({
  type: 'TOGGLE_MENU',
  isOpen,
});

export {
  closeMenu,
  toggleMenu,
};
