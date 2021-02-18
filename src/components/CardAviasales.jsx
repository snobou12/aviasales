import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../css/CardAviasales.css';

function CardAviasales({ price, carrier, segments }) {
  const hoursTo = Math.trunc(segments[0].duration / 60);
  const minutesTo = segments[0].duration % 60;
  const timeTo = hoursTo + 'ч ' + minutesTo + 'м';

  const hoursFrom = Math.trunc(segments[1].duration / 60);
  const minutesFrom = segments[1].duration % 60;
  const timeFrom = hoursFrom + 'ч ' + minutesFrom + 'м';

  return (
    <Card className="cardAvia mt-4">
      <Card.Header className="topTextCard">
        {String(price).substr(0, 2) + ' ' + String(price).substr(2) + ' Р'}
        <img className="imgLogoCard" src={`//pics.avs.io/99/36/{${carrier}}.png`} alt="" />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <div className="text-greyCard">
              {' '}
              {segments[0].origin} - {segments[0].destination}{' '}
            </div>

            <div className="text-boldCard">
              {new Date(segments[0].date).getUTCHours()}:
              {new Date(segments[0].date).getUTCMinutes()}
            </div>
          </Col>
          <Col>
            {' '}
            <div className="text-greyCard">В ПУТИ </div>{' '}
            <div className="text-boldCard">{timeTo} </div>
          </Col>
          <Col>
            {Object.keys(segments[0].stops).length === 3 ? (
              <div className="text-greyCard">{Object.keys(segments[0].stops).length} ПЕРЕСАДКИ</div>
            ) : Object.keys(segments[0].stops).length === 2 ? (
              <div className="text-greyCard">{Object.keys(segments[0].stops).length} ПЕРЕСАДКИ</div>
            ) : Object.keys(segments[0].stops).length === 1 ? (
              <div className="text-greyCard">{Object.keys(segments[0].stops).length} ПЕРЕСАДКА</div>
            ) : (
              <div></div>
            )}
            <div className="text-boldCard">
              {' '}
              {segments[0].stops.map((value, index) => value + ' ')}{' '}
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            {' '}
            <div className="text-greyCard">
              {segments[1].origin} - {segments[1].destination}{' '}
            </div>{' '}
            <div className="text-boldCard">
              {new Date(segments[1].date).getUTCHours()}:
              {new Date(segments[1].date).getUTCMinutes()}
            </div>
          </Col>
          <Col>
            {' '}
            <div className="text-greyCard">В ПУТИ </div>{' '}
            <div className="text-boldCard">{timeFrom}</div>
          </Col>
          <Col>
            {' '}
            {Object.keys(segments[1].stops).length === 3 ? (
              <div className="text-greyCard">{Object.keys(segments[1].stops).length} ПЕРЕСАДКИ</div>
            ) : Object.keys(segments[1].stops).length === 2 ? (
              <div className="text-greyCard">{Object.keys(segments[1].stops).length} ПЕРЕСАДКИ</div>
            ) : Object.keys(segments[1].stops).length === 1 ? (
              <div className="text-greyCard">{Object.keys(segments[1].stops).length} ПЕРЕСАДКА</div>
            ) : (
              <div></div>
            )}
            <div className="text-boldCard">
              {' '}
              {segments[1].stops.map((value, index) => value + ' ')}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardAviasales;
