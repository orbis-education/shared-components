export interface User {
    userID?: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    partnerID?: number;
    partnerSiteID?: number;
    shared?: boolean;
    requestedBy?: string;
    requestDate?: string;
    notes?: string;
    lastLogin?: string;
    updatedBy?: number;
    active?: boolean;
    createDate?: string;
    updateDate?: string;
    inactiveDate?: string;
    applicationID?: number;
    applicationName?: string;
    userRoleID?: number;
    userRole?: string;
}
export interface UserRequest extends User {
    userRequestID?: number;
    positionName?: string;
}
export interface LoggedInUser extends User {
    isSystemAdministrator?: boolean;
    isAdministrator?: boolean;
    isExtendedRealitySimulationSpecialist?: boolean;
    isDirectorSimulationAndIntegratedSimulationOperations?: boolean;
}
