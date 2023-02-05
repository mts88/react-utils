type IUseDocumentTitle = {
  /**
   * Update current DOM title
   */
  updateDocumentTitle: (newTitle: string) => void;
};

/**
 * Set DOM title, and return methods to update it.
 *
 * @param title *Optional* - Title to apply
 *
 * @returns Methods to update title. See {@link IUseDocumentTitle}.
 *
 * @example
 * ```
 *  const MyComponent = () => {
 *
 *      const { updateDocumentTitle } = useDocumentTitle('Initial title')
 *      // .... other params
 *
 *      useEffect(() => {
 *          updateDocumentTitle('Update my title')
 *          return () => {
 *              updateDocumentTitle('Initial title')
 *          }
 *      }, [...deps])
 *  }
 *
 * ```
 */
const useDocumentTitle = (title?: string): IUseDocumentTitle => {
  if (title) {
    document.title = title;
  }

  const updateDocumentTitle = (newTitle: string): void => {
    document.title = newTitle;
  };

  return {
    updateDocumentTitle
  };
};

export default useDocumentTitle;
