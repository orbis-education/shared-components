// {
//   "userID": 3,
//   "firstName": "Joseph",
//   "lastName": "Hofmeister",
//   "email": "Joseph.Hofmeister@orbiseducation.com",
//   "username": "joseph.hofmeister",
//   "partnerID": null,
//   "partnerSiteID": null,
//   "shared": null,
//   "requestedBy": null,
//   "requestDate": null,
//   "notes": null,
//   "lastLogin": "2025-10-29 04:01:52",
//   "updatedBy": null,
//   "active": true,
//   "createDate": "2020-08-17T18:27:11.000Z",
//   "updateDate": "2022-05-24T18:41:18.000Z",
//   "inactiveDate": null,
//   "partnerName": null,
//   "partnerAbbreviation": null,
//   "applicationID": 2,
//   "applicationName": "Extended Reality Scheduling System",
//   "userRoleID": 6,
//   "userRole": "System Administrator",
//   "userApplicationsCreateDate": "2020-08-17T18:27:11.000Z",
//   "applications": "Extended Reality Scheduling System",
//   "previousLastLogin": "2025-10-29T04:00:59.000Z",
//   "enteredUsername": "joseph.hofmeister",
//   "enteredPassword": "test",
//   "status": "success",
//   "isSystemAdministrator": true,
//   "isAdministrator": true,
// }

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
