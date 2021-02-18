import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import FilterByTrans from './components/FilterByTrans';
import FilterByFunc from './components/FilterByFunc';
import CardAviasales from './components/CardAviasales';
import Logo from './components/Logo';

import { fetchIdFromServer } from './redux/actions/serverMethods';
import { addMoreTickets, setDefaultCountTickets } from './redux/actions/filters';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const tickets = useSelector(({ serverMethods }) => serverMethods.allTickets);
  const countTickets = useSelector(({ filters }) => filters.countTickets);
  const sortByTrans = useSelector(({ filters }) => filters.sortByTrans);
  const sortByFunc = useSelector(({ filters }) => filters.sortByFunc);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIdFromServer(sortByTrans, sortByFunc));
  }, [sortByTrans, sortByFunc]);

  const addTickets = () => {
    dispatch(addMoreTickets());
  };

  const setDefaultCountTick = () => {
    dispatch(setDefaultCountTickets());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Container>
        <Row className="topSection pt-5">
          <Col className="text-center">
            <Logo />
          </Col>
        </Row>

        <Row className="mainSection text-center pt-5">
          <Col xs={4}>
            <FilterByTrans />
          </Col>
          <Col xs={8}>
            <Row>
              <Col className="text-left pb-2">
                <FilterByFunc />
                {tickets &&
                  tickets.slice(0, countTickets).map((obj) => <CardAviasales {...obj} key={obj} />)}
                {tickets.length != 0 ? (
                  <Button className="mt-3" style={{ width: '100%' }} onClick={addTickets}>
                    ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
                  </Button>
                ) : (
                  'Билетов пока нет'
                )}
                {countTickets > 5 ? (
                  <Button onClick={setDefaultCountTick} className="mt-3" style={{ width: '100%' }}>
                    ВЕРНУТЬСЯ
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
