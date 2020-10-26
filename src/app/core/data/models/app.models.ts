export interface Status {
    status: string,
    id: number
}

export interface DateData {
    id: number,
    date: Date,
    pharmaSdo: number,
    medifilmPrice: number,
    factoryPrice: number,
    status: string;
}


export interface Tda {
    id: number,
    isActiveMedifilmPrice: boolean,
    allowHiaReferencePackage: boolean,
    dateData: DateData[],
}