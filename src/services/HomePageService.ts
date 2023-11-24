import {
  ApiResponse,
  ClientHomePageBlocks,
  MainPageSections,
} from '@/types/services/HomePageServiceEnteties';
import { IDataResponse } from '@/types/services/interface';
import generalRequest from '@/utils/axiosSetup';

const getHomePageData = async (): Promise<IDataResponse<ClientHomePageBlocks | null>> => {
  try {
    const { data } = await generalRequest<ApiResponse>({ url: 'page-main' });

    const businessData = {} as ClientHomePageBlocks;

    for (const key of Object.keys(data.blocks)) {
      const k = key as keyof ClientHomePageBlocks;
      // @ts-ignore
      businessData[k] = data.blocks[k].data as MainPageSections;
    }

    return { status: true, data: businessData };
  } catch (error) {
    console.log(error);
    return { status: false, data: null };
  }
};

export { getHomePageData };
