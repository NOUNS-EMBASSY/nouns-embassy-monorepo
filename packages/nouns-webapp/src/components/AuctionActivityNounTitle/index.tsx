import { BigNumber } from 'ethers';
import classes from './AuctionActivityNounTitle.module.css';
import { Trans } from '@lingui/macro';

const AuctionActivityNounTitle: React.FC<{ nounId: BigNumber; isCool?: boolean }> = props => {
  const { nounId, isCool } = props;
  return (
    <div className={classes.wrapper}>
      <h1 style={{ color: isCool ? 'var(--brand-cool-dark-text)' : 'var(--brand-warm-dark-text)' }}>
        <Trans>Embassy{nounId.toString().padStart(2, '0')}</Trans>
      </h1>
    </div>
  );
};
export default AuctionActivityNounTitle;
