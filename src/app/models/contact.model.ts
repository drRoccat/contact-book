export class Contact {

  public id: number;
  public name: string;
  public surname: string;
  public birthDay: Date;
  public avatar: string;

  constructor(item?) {
    if (item != null) {
      this.id = item.id;
      this.name = item.name;
      this.surname = item.surname;
      this.birthDay = item.birthDay;
      this.avatar = item.avatar;
    }
  }
}
