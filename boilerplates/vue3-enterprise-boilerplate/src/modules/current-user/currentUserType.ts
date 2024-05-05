export type CurrentUser = {
  user: {
    firstName: string;
    lastName: string;
    firstNameKh: string;
    lastNameKh: string;
    username: string;
    fullNameEn: string;
    fullNameKh: string;
    email: string;
    profileImageUrl: string;
  } | null;
  authorities: string[];
};
