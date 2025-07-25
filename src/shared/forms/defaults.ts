import { type CreateRequestRequestType, type RequestTitleDtoType } from './v1';

export const createRequestRequestDefaults: CreateRequestRequestType = {
  purpose: '',
  hasAppraisalBook: false,
  priority: 'Normal',
  reference: {
    prevAppraisalNo: '',
    prevAppraisalValue: '' as unknown as number,
    prevAppraisalDate: '2023-01-01T14:30:00Z',
  },
  channel: '',
  occurConstInspec: '' as unknown as number,
  loanDetail: {
    loanApplicationNo: '',
    limitAmt: '' as unknown as number,
    totalSellingPrice: '' as unknown as number,
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
  titleDocuments: [],
  collateral: {
    collateralType: 'land',
    collateralStatus: '',
    titleNo: '',
    owner: '',
    noOfBuilding: '' as unknown as number,
    titleDetail: '',
  },
  area: {
    rai: '' as unknown as number,
    ngan: '' as unknown as number,
    wa: '' as unknown as number,
    usageArea: '' as unknown as number,
  },
  condo: {
    collateralType: '',
    collateralStatus: '',
    titleNo: '',
    owner: '',
    noOfBuilding: '',
    titleDetail: '',
  },
  titleAddress: {
    houseNo: '',
    roomNo: '',
    floorNo: '',
    buildingNo: '',
    moo: '',
    soi: '',
    road: '',
    subDistrict: '',
    district: '',
    province: '',
    postcode: '',
  },
  dopaAddress: {
    houseNo: '',
    roomNo: '',
    floorNo: '',
    buildingNo: '',
    moo: '',
    soi: '',
    road: '',
    subDistrict: '',
    district: '',
    province: '',
    postcode: '',
  },
  building: {
    buildingType: '',
  },
  vehicle: {
    vehicleType: '',
    vehicleRegistrationNo: '',
    vehAppointmentLocation: '',
  },
  machine: {
    machineStatus: '',
    machineType: '',
    machineRegistrationStatus: '',
    machineRegistrationNo: '',
    machineInvoiceNo: '',
    noOfMachine: '' as unknown as number,
  },
};
