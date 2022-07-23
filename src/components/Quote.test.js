import {render, screen} from '@testing-library/react';
import Quote from "./Quote.js"

test('render math quote', () => {
    render (<Quote/>);
    const displayQuote = screen.getByTestId('myquote');
    expect(displayQuote).toBeInTheDocument;

})