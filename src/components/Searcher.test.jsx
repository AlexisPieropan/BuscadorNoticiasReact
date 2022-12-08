import {  render } from '@testing-library/react'
import Searcher from './Searcher';

const onBuscar = jest.fn();
const renderSearcher = () => {
    const view = render(<Searcher onBuscar={onBuscar} />);
    return view;
};

//TEST de render
describe('<Buscador />', () => {
    test('Se debe renderizar el componente', async () => {
        const view = renderSearcher();
        expect(view.container).toBeInTheDocument();
    
        });      
    })

    