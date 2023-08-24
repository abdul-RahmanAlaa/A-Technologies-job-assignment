export interface IEmp {
  id: string;
  name: string;
  email: string;
  workDays: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  files: [fileName: string, imgPath: string, size: number];
}
