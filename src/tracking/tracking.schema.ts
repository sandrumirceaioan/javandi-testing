import * as mongoose from 'mongoose';

export const TracksSchema = new mongoose.Schema({
    dDateT: {
        type: Date,
        required: true
      },
      dHourT: {
        type: String,
        required: true
      },
      sCreativeIdT: {
        type: String,
        required: true
      },
      sCreativeTypeT: {
        type: String,
        required: true
      },
      sLpIdT: {
        type: String,
        required: true
      },
      sSourceT: {
        type: String,
        required: false
      },
      sSubId1T: {
        type: String,
        required: false
      },
      sSubId2T: {
        type: String,
        required: false
      },
      sSubId3T: {
        type: String,
        required: false
      },
      sSubId4T: {
        type: String,
        required: false
      },
      sSubId5T: {
        type: String,
        required: false
      },
      parentOfferId: {
        type: String,
        required: false
      },
      parentOfferCreativeId: {
        type: String,
        required: false
      },
      /*nCampaignIdT: {
        type: String
        //required: true
      },*/
      sCountryT: {
        type: String,
        required: true
      },
      nClicksT: {
        type: Number,
        required: false
      },
      nCpaPxlT: {
        type: Number,
        required: false
      },
      nCpaCostsT: {
        type: Number,
        required: false
      },
      nCpaCostsNrT: {
        type: Number,
        required: false
      },
      nCplPxlT: {
        type: Number,
        required: false
      },
      nCplCostsT: {
        type: Number,
        required: false
      },
      nCplCostsNrT: {
        type: Number,
        required: false
      },
      nCpcCostsT: {
        type: Number,
        required: false
      },
      nCpcCostsNrT: {
        type: Number,
        required: false
      },
      nRevenuePxlT: {
        type: Number,
        required: false
      },
      nRsCostsT: {
        type: Number,
        required: false
      },
      nRsCostsNrT: {
        type: Number,
        required: false
      },
      sParentReferralIdT: {
        type: String,
        required: false
      },
      nReferralCpaT: {
        type: Number,
        required: false
      },
      nReferralCpcT: {
        type: Number,
        required: false
      },
      nReferralCplT: {
        type: Number,
        required: false
      },
      nBrandIdT: {
        type: String,
        required: true
      },
      sCategoryT: {
        type: String,
        required: true
      },
      sTrackingDomain: {
        type: String
      },
      testSales: {
        type: Boolean
      },
      skipDelete: {
        type: Boolean
      },
      trackLastModifiedBy: {
        type: String
      },
      trackLastModifiedOn: {
        type: Date
      },
      trackCreatedon: {
        type: Date,
        default: Date.now
      },
      trackCreatedby: {
        type: String
      }
}, {collection: 'tracks'});