export  interface IVacationModel
 {
  vacationId?:number;
  destination?: string;
  description?: string;
  fromDate?: string;
  toDate?: string;
  price?: number;
  image?: string;
  isFollowed?: boolean;
  amountOfFollowers?: number;
  userType?: any;
}

  export default IVacationModel
  