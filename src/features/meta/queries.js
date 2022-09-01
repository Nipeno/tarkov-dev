// Queries used to get flea market fee factors, armor attributes,
// and item categories from the API
import { useQuery } from 'react-query';
import doFetchMeta from './do-fetch-meta';

export const useMetaQuery = (queryOptions) => {
    const metaQuery = useQuery('meta', () => doFetchMeta(), {
        refetchInterval: 600000,
        placeholderData: [],
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        ...queryOptions,
    });

    return metaQuery;
};