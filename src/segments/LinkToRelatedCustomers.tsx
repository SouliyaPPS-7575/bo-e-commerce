import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import queryString from 'query-string';

import visitors from '../visitors';

const LinkToRelatedCustomers = ({ segment }: { segment: string }) => {
  const translate = useTranslate();
  return (
    <Button
      size="small"
      color="primary"
      component={Link}
      to={{
        pathname: '/customers',
        search: queryString.stringify({
          filter: { groups: segment },
        }),
      }}
      state={{ _scrollToTop: true }}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <visitors.icon sx={{ paddingRight: '0.5em' }} />
      {translate('resources.segments.fields.customers')}
    </Button>
  );
};

export default LinkToRelatedCustomers;
