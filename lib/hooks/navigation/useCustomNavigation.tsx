// eslint-disable-next-line import/named
import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';

type IUseCustomNavigation = {
  navigate: (to: string, options?: NavigateOptions) => void;
  goBack: (previousRoute?: string) => void;
};

/**
 * This hooks wrap React Router Dom Navigation. By default pass previous route, while
 * routing to next url.
 * Handle go back using previous route or browser history
 */
export default function useCustomNavigation(): IUseCustomNavigation {
  const currentRoute = useLocation();
  const domNavigate = useNavigate();

  const navigate = (to: string, options?: NavigateOptions): void => {
    domNavigate(to, { state: { previousRoute: currentRoute }, ...options });
  };

  const goBack = (previousRoute = '../'): void => {
    if (currentRoute.state && currentRoute.state['previousRoute']) {
      domNavigate((currentRoute.state['previousRoute'] as Location).pathname);
    } else {
      domNavigate(previousRoute);
    }
  };

  return {
    navigate,
    goBack
  };
}
