import * as mongoose from 'mongoose';

export interface Pixel extends mongoose.Document {
    nTrackingIdTP: String;
    nNewTrackingIdCpaTP: String;
    nNewTrackingIdCplTP: String;
    sUniqueIdTP: String;
    trackUrl: String;
    adminId: String;
    nCpaPxlTP: String;
    nCplPxlTP: String;
    nRevenuePxlTP: String;
    dDateCpaPxlTP: Date;
    dDateCplPxlTP: Date;
    dDateRevenuePxlTP: Date;
    sParentReferralIdTP: String;
    sParentComValTP: String;
    sCpcCostTP: String;
    sParentCpcComValTP: String;
    sCpcCostNrTP: String;
    sParentCPAComTP: String;
    sParentCPLComTP: String;
    sExternalUid: String;
    accepted: Boolean;
    s2sCplMarked: Boolean;
    s2sCpaMarked: Boolean;
    bbpCplMarked: Boolean;
    bbpCpaMarked: Boolean;
    pixelOrigin: String;
}