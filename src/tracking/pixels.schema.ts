import * as mongoose from 'mongoose';

export const PixelsSchema = new mongoose.Schema({

  nTrackingIdTP: {
    type: String,
    required: true
  },
  nNewTrackingIdCpaTP: {
    type: String,
    required: false
  },
  nNewTrackingIdCplTP: {
    type: String,
    required: false
  },
  sUniqueIdTP: {
    type: String,
    required: true
  },
  trackUrl: {
    type: String,
    // default: "0",
    required: false
  },
  adminId: {
    type: String,
    // default: "0",
    required: false
  },
  nCpaPxlTP: {
    type: String,
    // default: "0",
    required: false
  },
  nCplPxlTP: {
    type: String,
    // default: "0",
    required: false
  },
  nRevenuePxlTP: {
    type: String,
    // default: "0",
    required: false
  },
  dDateCpaPxlTP: {
    type: Date,
    default: "",
    required: false
  },
  dDateCplPxlTP: {
    type: Date,
    default: "",
    required: false
  },
  dDateRevenuePxlTP: {
    type: Date,
    default: "",
    required: false
  },
  sParentReferralIdTP: {
    type: String,
    required: false
  },
  sParentComValTP: {
    type: String,
    required: false
  },
  sCpcCostTP: {
    type: String,
    required: false
  },
  sParentCpcComValTP: {
    type: String,
    required: false
  },
  sCpcCostNrTP: {
    type: String,
    required: false
  },
  sParentCPAComTP: {
    type: String,
    required: false
  },
  sParentCPLComTP: {
    type: String,
    required: false
  },
  sExternalUid: {
    type: String,
    required: false
  },
  accepted: {
    type: Boolean,
    required: false
  },
  s2sCplMarked: {
    type: Boolean
  },
  s2sCpaMarked: {
    type: Boolean
  },
  bbpCplMarked: {
    type: Boolean
  },
  bbpCpaMarked: {
    type: Boolean
  },
  pixelOrigin: {
    type: String,
    required: false
  }
}, {collection: 'trackpxls'});