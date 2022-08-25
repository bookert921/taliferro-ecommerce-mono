export interface TestKitOrder {
    customerId?: string;
    orderId?: string;
    order?: any;
    pracId?: string;
    orderDate?: any;
    orderTaker?: string;
    productType_ordered?: string;
    requester?: string;
    companyName?: string;
    companyId?: string;

    process?: string;
    locPos?: string;
    clinicName?: string;
    reqLoc?: string;

    shipping_method?: string;
    tracking_num?: string;

    processingStatus?: string;
    processingComment?: string;
    comment?: string;

    shopifyOrderNumber?: string;
    kitNumber?: string;

    timeCollected?: any;
    dateCollected?: any;

    gender?: string;
    dob?: string;
    age?: number;
    status: any;

    billMethod?: string;
    notchName?: string;
    notchOrderId?: string;

    labelAmount?: any;
    sampleType?: string;
    sampleVolume?: string;

    files?: any;

    firstName?: string;
    lastName?: string;
    streetAddress1?: string;
    streetAddress2?: string;
    city?: string;
    province?: string;
    zip?: string;
    country?: string;
    email: any;
    phone?: string;
    textNotification: boolean;
    emailNotification: boolean;
    uid: any;
    _id: any;

    lastUpdated: number;
    updatedBy: string;
    createdBy: string;
    createdAt: number;
    browserIp?: string;
}