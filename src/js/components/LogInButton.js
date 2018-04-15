//@ flow

import Button from './Button'
import * as React from 'react'

//vs code is heckling me over this
//since it can only be used in a .ts file
//but it's fine I think.
type Props = 
{
    isLoggedIn: boolean,
    override?: 'login' | 'logout' | 'signup'
};

function LogInButton(props: Props)
{
    const onclick = () => 
    {
        if(props.override)
        {
            if(props.override === 'login')
            {
                window.alert('Logging you in...');
            } 
            else if (props.override === 'logout')
            {
                window.alert('Logging you out...');
            } 
            else
            { 
                window.alert('Signing you up...');
            }
        } else {
            if(isLoggedIn)
            {
                window.alert('Logging you out...');
            } else 
            {
                window.alert('Signing you up...');
            }
        }
    }

    const disp = () => {
        if(props.override)
        {
            if(props.override === 'login')
            {
                return('Log In');
            } 
            else if (props.override === 'logout')
            {
                return('Log Out');
            } 
            else
            { 
                return('Sign Up Now');
            }
        } else {
            if(isLoggedIn)
            {
                return('Log Out');
            } else 
            {
                return('Log In');
            }
        }
    }

    const text = disp();

    return(
        <Button primary onClick={onclick}> {text} </Button>
    )
}

export default LogInButton;