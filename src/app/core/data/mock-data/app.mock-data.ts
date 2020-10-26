import { Tda } from '../models/app.models';

export const TdaMockData: Tda = {
    id: 123,    
    isActiveMedifilmPrice: true,
    allowHiaReferencePackage: false,
    dateData: [
        {
            id: 33,
            date: new Date(2019, 10, 18),
            pharmaSdo: 456789,
            medifilmPrice: 12.20,
            factoryPrice: 3.14,
            status: 'Active'
        }
    ],
}