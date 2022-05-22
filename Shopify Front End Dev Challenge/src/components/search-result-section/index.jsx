import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import { Card } from '../card/card';
import { isEmptyArray } from '../../shared/helpers/is-empty-array';
import styles from './search-result-section.module.css';

export const SearchResultSection = (props) => {
  const {
    cards,
    onClearSearchResults,
  } = props;

  return (
    <section className={styles.root}>
      {/* TODO: refactor title and clear button to sector header to avoid buttons absolute positioning */}
      <SectionTitle
        text="responses"
      />
      {!isEmptyArray(cards)
        ? <>
          <ul className={styles.list}>
            {cards.map((card) => (
              <Card
                key={card.id}
                data={card}
              />
            ))}
          </ul>
          <button
            className={styles.clearButton}
            onClick={onClearSearchResults}
            type="button"
          >
            Clear list
          </button>
        </>

        : <p className={styles.message}>No prior searches yet</p>
      }
    </section>
  );
};

SearchResultSection.propTypes = {
  cards: PropTypes.array,
  onClearSearchResults: PropTypes.func
};
