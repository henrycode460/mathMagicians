import {render, screen} from '@testing-library/react';
import Home from './Home.js'

test('render Welcome Test ', () => {
    render (<Home />);
    const displayWelcomText = screen.getByText("Welcome to Our Page!");
    expect(displayWelcomText).toBeVisible;

})