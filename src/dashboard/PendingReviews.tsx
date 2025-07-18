import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';

import {
  ReferenceField,
  FunctionField,
  useGetList,
  useTranslate,
  useIsDataLoaded,
} from 'react-admin';

import queryString from 'query-string';

import CardWithIcon from './CardWithIcon';
import StarRatingField from '../reviews/StarRatingField';
import { Customer, Review } from '../types';

const PendingReviews = () => {
  const translate = useTranslate();
  const {
    data: reviews,
    total,
    isPending,
  } = useGetList<Review>('reviews', {
    filter: { status: 'pending' },
    sort: { field: 'date', order: 'DESC' },
    pagination: { page: 1, perPage: 100 },
  });

  // Poor man's Suspense: hide the content until all the data is loaded,
  // including the reference customers.
  // As ReferenceField aggregates the calls to reference customers,
  // if the first customer is loaded, then all the customers are loaded.
  const isCustomerDataLoaded = useIsDataLoaded(
    ['customers', 'getMany', { ids: [String(reviews?.[0].customer_id)] }],
    { enabled: !isPending && reviews && reviews.length > 0 }
  );
  const display = isPending || !isCustomerDataLoaded ? 'none' : 'block';

  return (
    <CardWithIcon
      to={{
        pathname: '/reviews',
        search: queryString.stringify({
          filter: { status: 'pending' },
        }),
      }}
      icon={CommentIcon}
      title={translate('dashboard.pending_reviews')}
      subtitle={total}
    >
      <List sx={{ display }}>
        {reviews?.map((record: Review) => (
          <ListItem key={record.id} disablePadding>
            <ListItemButton
              alignItems='flex-start'
              component={Link}
              to={`/reviews/${record.id}`}
            >
              <ListItemAvatar>
                <ReferenceField
                  record={record}
                  source='customer_id'
                  reference='customers'
                  link={false}
                >
                  <FunctionField<Customer>
                    render={(customer) => (
                      <Avatar
                        src={`${customer.avatar}?size=32x32`}
                        sx={{
                          bgcolor: 'background.paper',
                        }}
                        alt={`${customer.first_name} ${customer.last_name}`}
                      />
                    )}
                  />
                </ReferenceField>
              </ListItemAvatar>

              <ListItemText
                primary={<StarRatingField record={record} />}
                secondary={record.comment}
                sx={{
                  overflowY: 'hidden',
                  height: '4em',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  paddingRight: 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        &nbsp;
      </Box>
      <Button
        sx={{ borderRadius: 0 }}
        component={Link}
        to='/reviews'
        size='small'
        color='primary'
      >
        <Box
          sx={{
            p: 1,
            color: 'primary.main',
          }}
        >
          {translate('dashboard.all_reviews')}
        </Box>
      </Button>
    </CardWithIcon>
  );
};

export default PendingReviews;
