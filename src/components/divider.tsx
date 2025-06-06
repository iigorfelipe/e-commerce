type DividerProps = {
  fullWidth?: boolean;
};
export const Divider = ({ fullWidth = true }: DividerProps) => (
  <div
    className={`border-theme-gray-60 border-t ${fullWidth && "mx-undo-mobile-px md:mx-undo-container-px"}`}
  />
);
