import classes from './Banner.module.css';
import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import bank_noun from '../../assets/bank_noun.svg';
import Noun from '../Noun';
import { Trans } from '@lingui/macro';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <Col lg={6}>
        <div className={classes.wrapper}>
          <h1>
            <Trans>ONE NOUNS EMBASSY,</Trans>
            <br />
            <Trans>EVERY WEEK,</Trans>
            <br />
            <Trans>FOREVER.</Trans>
          </h1>
        </div>
      </Col>
      <Col lg={6}>
        <div style={{ padding: '2rem' }}>
          <Noun imgPath={bank_noun} alt="noun" />
        </div>
      </Col>
    </Section>
  );
};

export default Banner;
