export class User {
  constructor(
    public id: number = null,
    public fname: string = "",
    public lname: string = "",
    public email: string = "",
    public password: string = "",
    public confirm: string = "",
    public address: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: boolean = null,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
