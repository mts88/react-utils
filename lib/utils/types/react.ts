/**
 * Define multiple common action
 */
export type ActionProps = {
  onClose?: () => void;
  onClick?: () => void;
  onSelect?: <T = string>(element: T) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  onSearchChange?: (text: string) => void;
  onSelectChange?: (selection: string) => void;
  onDelete?: <T = string>(id: T, name?: string) => void;
  onActionClick?: () => void;
};

/**
 * Pick easly from {@link ActionProps}
 */
export type PickActionProps<K extends keyof ActionProps> = Pick<ActionProps, K>;
