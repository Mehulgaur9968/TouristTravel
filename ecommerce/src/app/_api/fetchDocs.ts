import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import type { Config } from '../../payload/payload-types'
import { CATEGORIES } from '../_graphql/categories'
import { ORDERS } from '../_graphql/orders'
import { PAGES } from '../_graphql/pages'
import { PRODUCTS } from '../_graphql/products'
import { DESTINATIONS } from '../_graphql/destinations'
import { DIARIES } from '../_graphql/diaries'
import { CRAFTS } from '../_graphql/crafts'
import { MEDIA } from '../_graphql/media'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

const queryMap = {
  pages: {
    query: PAGES,
    key: 'Pages',
  },
  products: {
    query: PRODUCTS,
    key: 'Products',
  },
  orders: {
    query: ORDERS,
    key: 'Orders',
  },
  categories: {
    query: CATEGORIES,
    key: 'Categories',
  },
  destinations: {
    query: DESTINATIONS,
    key: 'Destinations',
  },
  diaries: {
    query: DIARIES,
    key: 'Diaries',
  },
  crafts: {
    query: CRAFTS,
    key: 'Crafts',
  },
  media: {
    query: MEDIA,
    key: 'allMedia',
  },
}

export const fetchDocs = async <T>(
  collection: string,
  draft?: boolean,
): Promise<T[]> => {
  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`)

  let token: RequestCookie | undefined

  if (draft) {
    const { cookies } = await import('next/headers')
    token = cookies().get(payloadToken)
  }

  const url = `${GRAPHQL_API_URL}/api/graphql`;
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
    ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
  };
  const cache = 'no-store';
  const next = { tags: [collection] };
  const body = JSON.stringify({
    query: queryMap[collection].query,
  });

  const docs: T[] = await fetch(url, {
    method,
    headers,
    cache,
    next,
    body,
  })
    ?.then(res => res.json())
    ?.then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching docs')

      return res?.data?.[queryMap[collection].key]?.docs
    })

    // console.log(`${GRAPHQL_API_URL}/api/graphql`);

  return docs
}
