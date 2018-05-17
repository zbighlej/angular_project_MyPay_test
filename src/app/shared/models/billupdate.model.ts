export class BillUpdate{
  constructor(
    public month: string,
    public year: number,
    public whater: number,
    public gass: number,
    public electricity: number,
    public id?: number
  ){}
}
