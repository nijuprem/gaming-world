import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms'
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

export interface Platform{
    id: number,
    name: string
    slug: string
}

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: ()=> 
    apiClient
    .get('/platforms/lists/parents')
    .then<FetchResponse<Platform>>(res=> res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length ,results: platforms}
})

export default usePlatform;