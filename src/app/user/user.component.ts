import { Component, OnInit } from '@angular/core';

//services
import { UserManagerService } from './services/user-manager.service';

//Models
import { IUser, IUserResponse, IUserPicture } from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  picture: string;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  handleClick() {
    this.getRandomUser();
  }

  getRandomUser() {
    this.userManagerService
    .getRandomName()
    .subscribe((response: IUserResponse) => {
      const { results } = response; //Destructuring
      const [data] = results; //Destructuring con un array
      const { name, email, phone, picture }: IUser = data; //Destructuring
      this.name = `${name.first} ${name.last}`;
      this.email = email;
      this.phone = phone;
      this.picture = picture.large;
    })
  }
}
