interface DefaultResponse<T> extends DefaultResponseFields {
  data: T[];
}

export interface DefaultResponseFields {
  currentPage: number;
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: Link[];
  nextPageUrl: string | null;
  path: string;
  perPage: number;
  prevPageUrl: string | null;
  to: number;
  total: number;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface CommonBlockInfo {
  id: string | number;
  createdAt: string;
  updatedAt: string;
}

interface MainPageHeader extends CommonBlockInfo {
  tip: string;
  headerTextWhite: string;
  headerTextPurple: string;
}

interface MainPageFeaturesBlock extends CommonBlockInfo {
  whiteText: string;
  purpleText: string;
  description: string;
}

interface MainPageFeature extends CommonBlockInfo {
  title: string;
  description: string;
  mainPageFeaturesBlockId: string | number;
  picture: string;
}

interface MainPageCandidateBlock extends CommonBlockInfo {
  callToActionTitle: string;
  whiteTitle: string;
  purpleTitle: string;
  bottonText: string;
}

interface CandidateBlockItem extends CommonBlockInfo {
  image: string;
  title: string;
  text: string;
  mainPageCandidateBlockId: string | number;
}

interface MainPageCompanyBlock extends CommonBlockInfo {
  callToActionTitle: string;
  whiteTitle: string;
  purpleTitle: string;
  bottonText: string;
}

interface CompanyBlockItem extends CommonBlockInfo {
  image: string;
  title: string;
  text: string;
  mainPageCompanyBlockId: string | number;
}

interface MainPageFaqBlock extends CommonBlockInfo {
  whiteTitle: string;
  purpleTitle: string;
}

interface FaqItem extends CommonBlockInfo {
  question: string;
  answer: string;
  mainPageFaqBlockId: string | number;
}

interface MainPageCallToActionBlock extends CommonBlockInfo {
  whiteText: string;
  orandeText: string;
  description: string;
  bottonText: string;
}

interface MainPageCallToActionFooter extends CommonBlockInfo {
  whiteTitle: string;
  purpleTitle: string;
  text: string;
  bottonText: string;
}

export interface MainPageVideo extends CommonBlockInfo {
  active: boolean;
  video: string;
}

export interface ApiMainDataBlocks {
  mainPageHeaders: DefaultResponse<MainPageHeader>;
  mainPageFeaturesBlocks: DefaultResponse<MainPageFeaturesBlock>;
  mainPageFeatures: DefaultResponse<MainPageFeature>;
  mainPageCandidateBlocks: DefaultResponse<MainPageCandidateBlock>;
  candidateBlockItems: DefaultResponse<CandidateBlockItem>;
  mainPageCompanyBlocks: DefaultResponse<MainPageCompanyBlock>;
  companyBlockItems: DefaultResponse<CompanyBlockItem>;
  mainPageFaqBlocks: DefaultResponse<MainPageFaqBlock>;
  faqItems: DefaultResponse<FaqItem>;
  mainPageCallToActionBlocks: DefaultResponse<MainPageCallToActionBlock>;
  mainPageCallToActionFooters: DefaultResponse<MainPageCallToActionFooter>;
}

// type Sections =
//   | MainPageHeader[]
//   | MainPageFeaturesBlock[]
//   | MainPageCandidateBlock[]
//   | CandidateBlockItem[]
//   | MainPageCompanyBlock[]
//   | CompanyBlockItem[]
//   | MainPageFaqBlock[]
//   | FaqItem[]
//   | MainPageCallToActionBlock[]
//   | MainPageCallToActionFooter[];

export type MainPageSections =
  | MainPageHeader[]
  | MainPageFeaturesBlock[]
  | MainPageCandidateBlock[]
  | CandidateBlockItem[]
  | MainPageCompanyBlock[]
  | CompanyBlockItem[]
  | MainPageFaqBlock[]
  | FaqItem[]
  | MainPageCallToActionBlock[]
  | MainPageCallToActionFooter[];

export interface ApiResponse {
  data: {
    blocks: ApiMainDataBlocks;
  };
}

// export type ClientHomePageBlocks = Record<keyof ApiMainDataBlocks, MainPageSections>;
export interface ClientHomePageBlocks {
  mainPageHeaders: MainPageHeader[];
  mainPageFeaturesBlocks: MainPageFeaturesBlock[];
  mainPageFeatures: MainPageFeature[];
  mainPageCandidateBlocks: MainPageCandidateBlock[];
  candidateBlockItems: CandidateBlockItem[];
  mainPageCompanyBlocks: MainPageCompanyBlock[];
  companyBlockItems: CompanyBlockItem[];
  mainPageFaqBlocks: MainPageFaqBlock[];
  faqItems: FaqItem[];
  mainPageCallToActionBlocks: MainPageCallToActionBlock[];
  mainPageCallToActionFooters: MainPageCallToActionFooter[];
  mainPageVideos: MainPageVideo[];
}
