import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

class Navbarra extends React.Component {
    render() {
        return(
            <Navbar  expand="lg" className='NavBar col '>
                <Container className='NavBar row '>
                    <Nav className='col '>
                        <NavDropdown className='col NavDropDownItem' title={<span className="my-auto NavDropDown">Fermentados</span>} id="Fermentados">
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Cerveza</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Sidra</NavDropdown.Item>
                        
                        </NavDropdown>
                        <NavDropdown className='col' title={<span className="my-auto NavDropDown">Destilados</span>} id="Destilados">
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Vodka </NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Tequila</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Ron</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Coñac</NavDropdown.Item>
                        
                        </NavDropdown>
                        <NavDropdown className='col' title={<span className="my-auto NavDropDown">Fortificados</span>} id="Fortificados">
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Oporto</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">madeira</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">palomino</NavDropdown.Item>
                        
                        </NavDropdown>
                        <NavDropdown className='col' title={<span className="my-auto NavDropDown">Licores</span>} id="Licores">
                            <NavDropdown.Item className='NavDropDownItem' href="#home">fruta</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">hierbas</NavDropdown.Item>
                            <NavDropdown.Item className='NavDropDownItem' href="#home">Licor de café</NavDropdown.Item>
                        
                        </NavDropdown>
                        <div className=' '>
                            <form  className=' row'>
                                <input 
                                    className='form-control col '
                                    type="text"
                                    id="search-bar"
                                    placeholder="Buscar"
                                    name="s" 
                                />
                                <button type="submit" className=' col btn btn-outline-primary' >Search</button>
                            </form>
                        </div>
                    </Nav>

                    
                </Container>
            </Navbar>
        )
    }
}

export default Navbarra;