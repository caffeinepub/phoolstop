import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeadRequest {
    city: string;
    businessName: string;
    businessType: BusinessType;
    email?: string;
    message: string;
    timestamp: Time;
    phone?: string;
    budgetRange: string;
}
export type BusinessType = {
    __kind__: "hotel";
    hotel: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "temple";
    temple: null;
} | {
    __kind__: "restaurant";
    restaurant: null;
} | {
    __kind__: "corporate";
    corporate: null;
};
export type Time = bigint;
export interface backendInterface {
    getAllEnquiries(): Promise<Array<LeadRequest>>;
    submitEnquiry(lead: LeadRequest): Promise<void>;
}
