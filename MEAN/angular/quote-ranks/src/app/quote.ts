export class Quote {
  constructor(
    public id:number = null,
    public quote:string = '',
    public author:string = '',
    public upvotes:number = 0,
    public downvotes:number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
