import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

interface Props {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: Props): JSX.Element => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        session ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
