import {render, screen} from '@testing-library/react';
import Header from '../Header';
import {MemoryRouter} from 'react-router-dom';

test('render navigation links', () => {
    render (
        <MemoryRouter>

            <Header/>
        </MemoryRouter>
     );
    const displaylist = screen.getAllByRole('link');
    expect(displaylist).toHaveLength(4);

})