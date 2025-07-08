import { z } from 'zod';

export const ReferenceDto = z
  .object({
    prevAppraisalNo: z.string().nullable(),
    prevAppraisalValue: z.number().nullable(),
    prevAppraisalDate: z.string().datetime({ offset: true }).nullable(),
  })
  .passthrough();
export const LoanDetailDto = z
  .object({
    loanApplicationNo: z.string().nullable(),
    limitAmt: z.number().nullable(),
    totalSellingPrice: z.number().nullable(),
  })
  .passthrough();
export const AddressDto = z
  .object({
    houseNo: z.string().nullable(),
    roomNo: z.string().nullable(),
    floorNo: z.string().nullable(),
    locationIdentifier: z.string().nullable(),
    moo: z.string().nullable(),
    soi: z.string().nullable(),
    road: z.string().nullable(),
    subDistrict: z.string(),
    district: z.string(),
    province: z.string(),
    postcode: z.string().nullable(),
  })
  .passthrough();
export const ContactDto = z
  .object({
    contactPersonName: z.string(),
    contactPersonContactNo: z.string(),
    projectCode: z.string().nullable(),
  })
  .passthrough();
export const FeeDto = z
  .object({ feeType: z.string(), feeRemark: z.string().nullable() })
  .passthrough();
export const RequestorDto = z
  .object({
    requestorEmpId: z.string(),
    requestorName: z.string(),
    requestorEmail: z.string(),
    requestorContactNo: z.string(),
    requestorAo: z.string(),
    requestorBranch: z.string(),
    requestorBusinessUnit: z.string(),
    requestorDepartment: z.string(),
    requestorSection: z.string(),
    requestorCostCenter: z.string(),
  })
  .passthrough();
export const RequestCustomerDto = z
  .object({ name: z.string(), contactNumber: z.string() })
  .passthrough();
export const RequestPropertyDto = z
  .object({ propertyType: z.string(), buildingType: z.string(), sellingPrice: z.number() })
  .passthrough();
export const RequestCommentDto = z.object({ comment: z.string() }).passthrough();
export const UpdateRequestRequest = z
  .object({
    purpose: z.string(),
    hasAppraisalBook: z.boolean(),
    priority: z.string(),
    reference: ReferenceDto,
    channel: z.string(),
    occurConstInspec: z.number().int().nullable(),
    loanDetail: LoanDetailDto,
    address: AddressDto,
    contact: ContactDto,
    fee: FeeDto,
    requestor: RequestorDto,
    customers: z.array(RequestCustomerDto),
    properties: z.array(RequestPropertyDto),
    comments: z.array(RequestCommentDto),
  })
  .passthrough();
export const UpdateRequestResponse = z.object({ isSuccess: z.boolean() }).passthrough();
export const RequestDetailDto = z
  .object({
    purpose: z.string(),
    hasAppraisalBook: z.boolean(),
    priority: z.string(),
    reference: ReferenceDto,
    channel: z.string(),
    occurConstInspec: z.number().int().nullable(),
    loanDetail: LoanDetailDto,
    address: AddressDto,
    contact: ContactDto,
    fee: FeeDto,
    requestor: RequestorDto,
  })
  .passthrough();
export const GetRequestByIdResponse = z
  .object({
    id: z.number().int(),
    appraisalNo: z.string(),
    status: z.string(),
    detail: RequestDetailDto,
  })
  .passthrough();
export const DeleteRequestResponse = z.object({ isSuccess: z.boolean() }).passthrough();
export const UpdateRequestCommentRequest = z.object({ comment: z.string() }).passthrough();
export const RequestDto = z
  .object({
    id: z.number().int(),
    appraisalNo: z.string(),
    status: z.string(),
    detail: RequestDetailDto,
  })
  .passthrough();
export const GetRequestResult = z.object({ requests: z.array(RequestDto) }).passthrough();
export const CreateRequestRequest = z
  .object({
    purpose: z.string(),
    hasAppraisalBook: z.boolean(),
    priority: z.string(),
    reference: ReferenceDto,
    channel: z.string(),
    occurConstInspec: z.number().int().nullable(),
    loanDetail: LoanDetailDto,
    address: AddressDto,
    contact: ContactDto,
    fee: FeeDto,
    requestor: RequestorDto,
    customers: z.array(RequestCustomerDto),
    properties: z.array(RequestPropertyDto),
    comments: z.array(RequestCommentDto),
  })
  .passthrough();
export const CreateRequestResponse = z.object({ id: z.number().int() }).passthrough();
export const AddCommentToRequestRequest = z.object({ comment: z.string() }).passthrough();
export const TokenRequest = z
  .object({
    grantType: z.string(),
    clientId: z.string(),
    code: z.string(),
    codeVerifier: z.string(),
    redirectUri: z.string(),
  })
  .passthrough();

export const schemas = {
  ReferenceDto,
  LoanDetailDto,
  AddressDto,
  ContactDto,
  FeeDto,
  RequestorDto,
  RequestCustomerDto,
  RequestPropertyDto,
  RequestCommentDto,
  UpdateRequestRequest,
  UpdateRequestResponse,
  RequestDetailDto,
  GetRequestByIdResponse,
  DeleteRequestResponse,
  UpdateRequestCommentRequest,
  RequestDto,
  GetRequestResult,
  CreateRequestRequest,
  CreateRequestResponse,
  AddCommentToRequestRequest,
  TokenRequest,
};

export type CreateRequestRequestType = z.infer<typeof CreateRequestRequest>;
export type AddressDtoType = z.infer<typeof AddressDto>;
