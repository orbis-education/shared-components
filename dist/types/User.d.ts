export interface User {
    active?: boolean;
    applicationID?: number | null;
    applicationName?: string;
    applications?: string;
    createDate?: string;
    createdBy?: number | null;
    createdByUsername?: string | null;
    email: string;
    firstName: string;
    inactiveDate?: string;
    inactivatedBy?: number | null;
    inactivatedByUsername?: string | null;
    lastLogin?: string;
    lastName: string;
    notes?: string;
    partnerAbbreviation?: string;
    partnerID?: number | null;
    partnerName?: string;
    partnerSiteID?: number | null;
    password?: string;
    requestDate?: string;
    requestedBy?: string;
    shared?: boolean;
    updateDate?: string;
    updatedBy?: number | null;
    updatedByUsername?: string | null;
    userApplicationsCreateDate?: string;
    userID?: number;
    userRole?: string;
    userRoleID?: number;
    username: string;
}
export interface UserRequest extends User {
    city?: string;
    completed?: boolean;
    details?: string;
    partnerSiteAbbreviation: string;
    partnerSiteAddressID?: number;
    partnerSiteAddressesActive?: boolean;
    positionID?: number;
    positionName?: string;
    requestStatus?: string;
    requestTypeID?: number;
    requestTypeName?: string;
    preferredDate?: string;
    state?: string;
    street?: string;
    userRequestID?: number;
    zipCode?: string;
}
export interface LoggedInUser extends User {
    isSystemAdministrator: boolean;
    isAdministrator: boolean;
    isExtendedRealitySimulationSpecialist: boolean;
    isLabAndSimulationResourceManager: boolean;
    enteredUsername?: string;
    enteredPassword?: string;
    status?: string;
}
export interface UserRole {
    userRoleID?: number;
    userRole?: string;
    createDate?: string;
    active?: boolean;
}
export interface ApplicationUserRole extends UserRole {
    applicationID?: number;
    applicationName?: string;
}
