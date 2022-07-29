import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import _map from 'lodash/map';

import { DEFAULT_LANGUAGE } from 'i18n';

import Container from '@atoms/Container';
import Button from '@atoms/Button';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <Container>
        <ul>
          {
            _map(i18n.languages, (language: string) => {
              const langPath = language === DEFAULT_LANGUAGE ? '' : language;
              return (
                i18n.language !== language
                  ? (
                    <NavLink
                      to={`/${langPath}`}
                      key={language}
                      onClick={() => i18n.changeLanguage(language)}
                    >
                      Change language to
                      {' '}
                      <span className="font-bold uppercase">
                        {language}
                      </span>
                    </NavLink>
                  )
                  : null
              );
            })
          }
        </ul>
      </Container>

      <Container>
        <div className="text-2xl font-bold my-8">
          {t('appName')}
        </div>
        <div className="mt-12">
          <Button>Test button</Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default IndexPage;
