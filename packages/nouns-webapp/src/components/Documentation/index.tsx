import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Documentation = () => {
  const publicDomainLink = (
    <Link
      text={<Trans>public domain</Trans>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const waceoLink = (
    <Link text={<Trans>WACEO.org</Trans>} url="https://www.waceo.org/" leavesPage={true} />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>WTF?</Trans>
          </h1>
          <p className={classes.aboutText}>
            <Trans>
              Nouns Embassy DAO is a Creative and showcase space , dedicated to accelerating on the
              Ground the proliferation of the Nouns.
            </Trans>
          </p>
          <p className={classes.aboutText}>
            <Trans>Each Embassy has two mandates :</Trans>
          </p>
          <ul>
            <li>
              <Trans>Structuring and supporting on the Ground proliferation effort.</Trans>
              <ul>
                <li>
                  <Trans>Structured Artistic Residency programs , see our Program Page.</Trans>
                </li>
                <li>
                  <Trans>
                    Produce unique art and events,technically and logistically support proliferation
                    .
                  </Trans>
                </li>
              </ul>
            </li>

            <li>
              <Trans>Seeking Diplomatic recognition for the DAO with local governments.</Trans>
              <ul>
                <li>
                  <Trans>Initiating various efforts to achieve diplomatic recognition.</Trans>
                </li>
                <li>
                  <Trans>Support 3rd party initiatives aiming at the same goal.</Trans>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Summary</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Trans>Nouns Embassy artwork is in the {publicDomainLink}.</Trans>
                </li>
                <li>
                  <Trans>One Noun Embassy is trustlessly auctioned every 7 days, forever.</Trans>
                </li>
                <li>
                  <Trans>
                    100% of Nouns Embassy auction proceeds are trustlessly sent to the treasury.
                  </Trans>
                </li>
                <li>
                  <Trans>Settlement of one auction kicks off the next.</Trans>
                </li>
                <li>
                  <Trans>All Nouns Embassy are members of Nouns Embassy DAO.</Trans>
                </li>
                <li>
                  <Trans>One Nouns Embassy is equal to one vote.</Trans>
                </li>
                <li>
                  <Trans>
                    The treasury is controlled exclusively by Nouns Embassy via governance.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    No explicit rules exist for attribute scarcity; all Nouns Embassy NFT's are
                    equally rare.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Nouns Embassy founders group receive rewards in the form of Nouns Embassy NFT’s
                    (10% of supply for first 5 years).
                  </Trans>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>The Weekly Auction</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  The Nouns Embassys Auction Contract will act as a self-sufficient Nouns Embassy
                  generation and distribution mechanism, auctioning one Nouns Embassy every 7days,
                  forever.
                </Trans>
              </p>

              <p className={classes.aboutText}>
                <Trans>
                  100% of auction proceeds (ETH) are automatically deposited in the Nouns Embassy’s
                  DAO treasury, where they are governed by Nouns Embassy owners.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  Each time an auction is settled, the settlement transaction will also cause a new
                  Nouns Embassy to be minted and a new 7 day auction to begin.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  While settlement is most heavily incentivized for the winning bidder, it can be
                  triggered by anyone, allowing the system to trustfully auction Nouns Embassy’s as
                  long as Ethereum is operational and there are interested bidders.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>The Nouns Embassy DAO</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  Nouns Embassy DAO utilizes a fork of nouns Dao and is the main governing body of
                  the Nouns Embassy ecosystem.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  {waceoLink} or others , will be proposed the The Embassy DAO Members ,as legally
                  representatives.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  If voted As a legal Representative, waceo will register as a notifiable party on
                  behalf of the DAO , with regulatory and foreign affairs agencies in the effort of
                  seeking Diplomatic status.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  The Nouns Embassys DAO treasury receives 100% of ETH proceeds from daily Nouns
                  Embassy auctions. Each Nouns Embassy NFT is an irrevocable member of Nouns
                  Embassy’s DAO and entitled to one vote in all governance matters.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  Nouns Embassy votes are non-transferable (if you sell your NFT the vote goes with
                  it) but delegatable, which means you can assign your vote to someone else as long
                  as you own your NFTi.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Nouns Embassy Traits</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  <b>All Embassy NFT’s are equally rare.</b>
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  The Rendering of each the NFT are generated from the basis Nouns artwork with a
                  bank head .
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>On-Chain Artwork</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  Nouns Embassy are stored directly on Ethereum and do not utilize pointers to other
                  networks such as IPFS. This is possible because Nouns Embassy parts are compressed
                  and stored on-chain using a custom run-length encoding (RLE), which is a form of
                  lossless compression.
                </Trans>
              </p>

              <p>
                <Trans>
                  The compressed parts are efficiently converted into a single base64 encoded SVG
                  image on-chain. To accomplish this, each part is decoded into an intermediate
                  format before being converted into a series of SVG rects using batched, on-chain
                  string concatenation. Once the entire SVG has been generated, it is base64
                  encoded.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Nouns Embassy Seeder Contract</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The Noun Embassy Seeder contract is used to determine Noun traits during the
                  minting process. The seeder contract can be replaced to allow for future trait
                  generation algorithm upgrades. Additionally, it can be locked by the Nouns DAO to
                  prevent any future updates. Currently, Noun traits are determined using
                  pseudo-random number generation:
                </Trans>
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))</code>
              <br />
              <br />
              <p>
                <Trans>
                  Trait generation is not truly random. Traits can be predicted when minting a Nouns
                  Embassy on the pending block.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Founder Rewards</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>Ambassadors are the group of builders that initiate embassies.</Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  Because 100% of Nouns Embassy auction proceeds are sent to Nouns Embassy DAO,
                  Ambassadors have chosen to compensate themselves with Nouns Embassy NFT’s.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  Every 5th Nouns Embassy for the first 5 years of the project (Nouns Embassy ids
                  #0, #5, #10, #15 and so on) will be automatically sent to the Nouns Ambassador's
                  multisig to be vested and shared among the founding members of the project.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  Nouns Ambassador distributions don't interfere with the cadence of 7 days
                  auctions.
                </Trans>
              </p>
              <p className={classes.aboutText}>
                <Trans>
                  Nouns Ambassadors NFTs are sent directly to the Nouns Ambassadors Multisig, and
                  auctions continue on schedule with the next available Nouns Embassy ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
