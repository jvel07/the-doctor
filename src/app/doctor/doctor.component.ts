import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'doctor.component.html'
})

export class DoctorComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
       // this.loadAllPatients();
       this.loadAllUsers();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllPatients(role: string) {
        this.userService.getAllPatients(role).subscribe(users => { this.users = users; });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}