import { type CreateRequestRequestType, type RequestTitleDtoType } from './v1';

export const createRequestRequestDefaults: CreateRequestRequestType = {
  purpose: '',
  hasAppraisalBook: false,
  priority: 'Normal',
  reference: {
    prevAppraisalNo: '',
    prevAppraisalValue: 0,
    prevAppraisalDate: '2023-01-01T14:30:00Z',
  },
  channel: '',
  occurConstInspec: 0,
  loanDetail: {
    loanApplicationNo: '',
    limitAmt: 0,
    totalSellingPrice: 0,
  },
  address: {
    houseNo: '',
    roomNo: '',
    floorNo: '',
    locationIdentifier: '',
    moo: '',
    soi: '',
    road: '',
    subDistrict: '',
    district: '',
    province: '',
    postcode: '',
  },
  contact: {
    contactPersonName: '',
    contactPersonContactNo: '',
    projectCode: '',
  },
  fee: {
    feeType: '',
    feeRemark: '',
  },
  requestor: {
    requestorEmpId: '',
    requestorName: '',
    requestorEmail: '',
    requestorContactNo: '',
    requestorAo: '',
    requestorBranch: '',
    requestorBusinessUnit: '',
    requestorDepartment: '',
    requestorSection: '',
    requestorCostCenter: '',
  },
  customers: [],
  properties: [],
  comments: [],
  titles: [],
};

export const requestTitleDtoDefaults: RequestTitleDtoType = {
  collateral: {
    collateralType: 'land',
  },
};
