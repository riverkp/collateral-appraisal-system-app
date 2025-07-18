import { useQuery } from '@tanstack/react-query';
import type { ParameterParams, ParametersResponse } from '../types/api';
import axios from 'axios';

export const useParameters = (params: ParameterParams | undefined) => {
  return useQuery({
    queryKey: ['parameters'],
    queryFn: async (): Promise<ParametersResponse> => {
      const { data } = await axios.get('https://localhost:7111/parameter', {
        params,
      });
      console.log(data);
      return data;
    },
    enabled: !!params,
  });
};
